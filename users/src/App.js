import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import {forgetPwd} from './api/api';
import { Layout, Menu, Icon,Row,Col, Dropdown, message,Avatar,Modal,Input } from 'antd';
import OpenHistory from './component/OpenHistory';
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      collapsed: false,
      visible:false,
      oldpwd:'',
      pwd:'',
      appId:'1',
      qq:'',
      username:localStorage.getItem('uname')
    };
  }
  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  }
  logout=()=>{//退出登陆
    localStorage.clear('token');
    setTimeout(()=>{
      window.location = "/login";
    },1000)
  }
  handleInput= (params,v) =>{//输入发生变化
    this.setState({
      [params]:v
    })
  }
  async submitPwd(){//提交修改密码
    let {oldpwd,pwd,qq,appId,username}={...this.state};
    if(!oldpwd || !pwd || !qq ||!appId || !username){
      message.error("输入不能为空",1);
      return
    }else if(this.state.oldpwd===this.state.pwd){
      message.error("新密码不能与当前密码一样",1);
      return 
    }else if(this.state.pwd.length<6){
      message.error("密码不能低于6位，请重新输入",1);
      return 
    }else{
      let getsubmit = await forgetPwd({pwd,qq,appId,username});
      if(getsubmit.status==="0"){
        message.success("密码修改成功！",1);
        window.location='/login';
      }else{
        message.success("error",1);
      }
     
    }
  
    
    this.setState({
      visible:false
    })
  }
  render() {
    let username = localStorage.getItem("uname");
    const menu = (
      <Menu style={{margintop:10,textAlign:'center'}}>
        <Menu.Item key="2" onClick={()=>this.setState({visible:"true"})}>修改密码</Menu.Item>
        <Menu.Item key="3" onClick={()=>this.logout()}>退出登录</Menu.Item>
      </Menu>
    );
    return (
      <Router>
      <Layout style={{ minHeight: '100vh' }}>
       {/* Sider left */}
        <Sider style={{paddingTop:50}}
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span><Link to='/' tag='p' style={{color:'#fff',display:'inline-block',width:'100%'}}>调试1</Link></span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="desktop" />
              <span><Link to='/UserCount'  tag='p' style={{color:'#fff',display:'inline-block',width:'100%'}}>调试2</Link></span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={<span><Icon type="user" /><span>调试3</span></span>}
            >
              <Menu.Item key="3">
                <Link  tag='p' to='/Three' style={{color:'#fff',display:'inline-block',width:'100%'}}>
                调试0000
                </Link>
              </Menu.Item>
              <Menu.Item key="4">调试111111</Menu.Item>
              <Menu.Item key="5">调试222222</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={<span><Icon type="team" /><span>调试4</span></span>}
            >
              <Menu.Item key="6">调试444444444444</Menu.Item>
              <Menu.Item key="8">调试555555555555</Menu.Item>
            </SubMenu>
            <Menu.Item key="9">
              <Icon type="file" />
              <span>调试5</span>
            </Menu.Item>
          </Menu>
        </Sider>
        {/* Sider left */}
        {/* Sider right */}
        <Layout>
        {/* Header */}
          <Header style={{ background:'rgb(32, 144, 186)', padding: 0 }}>
              <div style={{textAlign:"center"}}>
                  <Row>
                    <Col span={8}><h2 style={{color:"#fff"}}>欢迎来到调试智联管理系统中心</h2></Col>
                    <Col span={3} offset={13}>
                        <Dropdown overlay={menu}>
                            <div className="ant-dropdown-link"  
                            style={{width:150,height:50,margin:"5px"}}>
                            你好，{username}
                            <Avatar style={{ backgroundColor: '#87d068'}} icon="user" />
                            </div>
                        </Dropdown>
                    </Col>
                  </Row>
              </div>
              <Modal
                destroyOnClose={true}
                title="修改密码"
                width={400}
                bodyStyle={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}
                visible={this.state.visible}
                onCancel={() => this.setState({visible: false})}
                onOk={() => this.submitPwd()}
                cancelText="取消"
                okText="确定"
            >
                <div className="modal_choose" style={{width:'100%'}}>
                    <span style={{display: 'flex', width: 80,color:'red'}}>*账号：</span>
                    <Input placeholder="请输入账号"
                           onChange={(e)=>this.handleInput('username',e.target.value)}/>
                </div>
                <div className="modal_choose" style={{width:'100%'}}>
                    <span style={{display: 'flex', width: 80,color:'red'}}>*qq号：</span>
                    <Input placeholder="请输入qq号"
                           onChange={(e)=>this.handleInput('qq',e.target.value)}/>
                </div>
                <div className="modal_choose" style={{width:'100%'}}>
                    <span style={{display: 'flex', width: 80,color:'red'}}>*原密码：</span>
                    <Input placeholder="请输入原密码"
                           onChange={(e)=>this.handleInput('oldpwd',e.target.value)}/>
                </div>
                <div className="modal_choose" style={{width:'100%'}}>
                    <span style={{display: 'flex', width: 80,color:'red'}}>*新密码：</span>
                    <Input placeholder="请输入新密码"
                           onChange={(e) => this.handleInput('pwd', e.target.value)}/>
                </div>
            </Modal>
          </Header>
          {/* Header */}
          {/* Content */}
          <Content style={{ margin: '10px 16px' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 680 }}>
            <Switch>
              <Route exact path="/" component={OpenHistory}/>
              {/* <Route exact path="/UserCount" component={UserCount}/> */}
              {/* <Route exact path="/Three" component={Three}/> */}
            </Switch> 
            </div>
          </Content>
          {/* Content */}
          {/* Footer */}
          <Footer style={{ textAlign: 'center' }}>
            users ©2018 Created by 贵州可靠智慧能源有限公司
          </Footer>
          {/* Footer */}
        </Layout>
        {/* Sider right */}
      </Layout>
      </Router>
    );
  }
}

export default App;