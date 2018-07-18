import server from './server';
import url from './serviceAPI.config';

//登陆
export function login(data) {
    return server({
        url: url.userLogin,
        method: 'post',
        dataType: "json",
		contentType: "application/json;charset=UTF-8",
        data: data
    });
}
//忘记密码
export function forgetPwd(data) {
    return server({
        url: url.forgetPwd,
        method: 'post',
        dataType: "json",
		contentType: "application/json;charset=UTF-8",
        data: data
    });
}

//开奖历史
export function histOpen(data){
    return server({
        url: url.histOpen,
        method: 'post',
        dataType: "json",
		contentType: "application/x-www-form-urlencoded;charset=UTF-8",
        data: data
    })
}
//获取参数时  req.body ----------是post请求，获取参数
//           req.query----------是get 请求，获取参数

export function getmusic(data){
    return server({
        url: url.test,
        method: 'post',
        contentType: "application/x-www-form-urlencoded;charset=UTF-8",
        dataType: "json",
        data:data
    })
}