/***
 * 
 *统一定义接口，有利于维护 
 * 
 **/

const BASEURL = 'http://localhost:3000/';
const HISTORY= 'https://www.jindi163.com:8443/JDLot/lot/';
const TTTT='http://v.juhe.cn/toutiao/index';
const URL ={
    userLogin:BASEURL+'user/login',//用户登陆
    forgetPwd:BASEURL+'user/resetPwd',//忘记密码
    histOpen:HISTORY+'type/pagelist?PageSize=100&PageNum=1&table_name=pk10',
    test:TTTT+'?type=shehui&key=76db99a8de0bb25da0ea78e8747f4971'
}
export default URL