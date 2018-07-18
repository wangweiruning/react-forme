import React, {Component} from 'react';
import {Input, Button, message,Icon} from 'antd';
import {login,getmusic} from './../api/api';
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: '',
            appId:"1",
            errText: ''
        };
        this.handleInput = this.handleInput.bind(this);
    }

   async  submitLogin() {
       const daas = await getmusic({});
console.log(daas)


        // message.destroy();
        // let {userName, password} = {...this.state};
        //     if (!userName) return message.error("登录账号不能为空",1);
        //     if (!password) return message.error("登录密码不能为空",1);
        //     if (password.length < 6) return message.error("登录密码长度最少为6位",1);
          
        // let logindate= await login({userName, password});
        //         console.log(logindate)
        //     if(logindate.code===200){
        //         alert(3)
        //             // localStorage.setItem( 'uid',logindate.data.uid);
        //             // localStorage.setItem( 'uname',logindate.data.uname);
                    
        //             window.location='/';
        //     }

    }

    handleInput(k, v) {
        this.setState({
            [k]: v.target.value
        });
    }

    render() {
        return (<div className="bg_login">
                <div className="bg_tit">
                    <span className="log_span" style={{color:'#045a73'}}>调试智联后台管理系统登陆</span>
                </div>
                <div className="bg_mesa">
                </div>
                <div className="bg_toum">
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        marginBottom: 20,
                        alignItems: 'center',
                        textAlign: 'center'
                    }}>
                        <span style={{color:'white'}}>
                                账号：</span>
                                <Input  onChange={(v) => this.handleInput('userName', v)} 
                                        value={this.state.userName}
                                        style={{width: 290, height: 45, opacity: 'initial'}}
                                        placeholder='请输入账号'/>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row',
                     alignItems: 'center', textAlign: 'center'}}>
                        <span style={{color:'white'}}>
                                密码：</span>
                                <Input  onChange={(v) => this.handleInput('password', v)} value={this.state.password}
                                        style={{width: 290, height: 45}} placeholder='请输入密码' type="password"
                                        onPressEnter={() => this.submitLogin()}/>
                    </div>
                    <Button onClick={() => this.submitLogin()} style={{
                        width: 290,
                        height: 45,
                        marginLeft: 50,
                        marginTop: 60,
                        border: 'none',
                        background:'#045a73',
                        color:'white',
                        letterSpacing:2
                    }}>登录</Button>
                </div>

                <div className="bg_res">
                    <span style={{fontFamily: '宋体', fontSize: 20, color: '#fafafa'}}>
                     贵州可靠智慧能源技术有限公司 2018 <Icon type="copyright" /> All Rights Reserverd.</span>
                </div>

            </div>
        );
    }
}
