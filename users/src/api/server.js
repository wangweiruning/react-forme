
import axios from 'axios';
import {message} from 'antd';
import qs from 'qs';

const server = axios.create({
    timeout: 15000 ,// 请求超时时间
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
})
server.interceptors.request.use(config => {
    
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
        if(config.method === 'post') {
            config.data = qs.stringify({
                ...config.data
            })
        } 

    return config
}, error => {
    console.log(error+"-------------------------")
    Promise.reject(error)
});
// respone拦截器
server.interceptors.response.use(
    response => {
        const res = response.data;
        message.destroy();
        if (res.code===401) {//401与后端约定的
            message.destroy();
            message.error(res.msg);
            setTimeout(() => {
                window.location.href = '/login';
                return;
            }, 100);
        }
        //0 获取数据成功  10过期
        if(res.status==="10"){
            window.location="/login";
        }
        if (res.code === 200) {
            return response.data;
        } else {
            message.destroy();
            message.error(res.msg);
            return Promise.reject('error');
        }
    },
    error => {
        return Promise.reject(error)
    }
)

export default server