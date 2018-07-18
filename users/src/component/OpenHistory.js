import React, {Component} from 'react';
import {Icon,Table} from 'antd';
import {histOpen} from './../api/api';
import axios from 'axios';
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            PageSize:"100",
            PageNum:"1",
            table_name:"pk10",
            data:[]
        };
    }
   async componentDidMount(){
        // this.getdates()
        let url = 'http://music.163.com/api/playlist/detail?id=3778678&updateTime=-1'
		axios(url)
			.then((data) => {
				return data.json()
			})
			.then((res) => {
                console.log(res)
				let songs = res.result.tracks
				// 取前20首
				songs.length = 20
				this.setState({
					songDS: this.state.songDS.cloneWithRows(songs),
					songs: songs,
					currentSong: songs[0],
					
				})
			})
    //   const test = await getmusic({id:"3778678",updateTime:"-1"});

    }
     getdates(){//获取用户列表信息
        const {PageSize,PageNum,table_name}= this.state;
        const user =  histOpen();
        console.log(user)
     }
    render() {
        const clums=[
            {
                title: '开奖期数',
                dataIndex: 'name',
                align: 'center',  
            },
    
            {
                title: '开奖号码',
                dataIndex: 'qq',
                width: 118,
                align: 'center'
                
            },
            {
                title: '开奖时间',
                dataIndex: 'pwd',
                align: 'center',
            }]
        return (<div className="bg_login">
               <div style={{border: '1px solid #189bc1'}}>
                    <Table
                        rowKey="id"
                        pagination={{pageSize: this.state.pageSize, total: this.state.totile}} locale={{emptyText: '暂无数据'}}
                        // onChange={(e) => this.page(e)}
                         size="middle"
                        bordered dataSource={this.state.data} columns={clums} scroll={{x: '100%'}}
                       
                    /></div>

                <div className="bg_res">
                    <span style={{fontFamily: '宋体', fontSize: 20, color: '#fafafa'}}>
                     贵州可靠智慧能源技术有限公司 2018 <Icon type="copyright" /> All Rights Reserverd.</span>
                </div>

            </div>
        );
    }
}
