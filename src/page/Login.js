import React, { PureComponent } from 'react'
import { Card, Input, Button, Spin, message } from 'antd';
//import { setToken } from '../utils/auth'
import { UserOutlined, KeyOutlined } from '@ant-design/icons';
//import { loginApi } from '../services/auth'
import './Login.css'

class Login extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            isLoading:false,
            userName:'',
            password:''
        }
    }
    setUserName(userName){
        this.setState(()=>userName)
    }
    setPassword(password){
        this.setState(()=>password)
    }
    checkLogin(){
            //接口
    }
    render() {
        return (
            <div className="login-div">
                <Spin tip="Loading..." spinning={this.state.isLoading}>
                    <Card title="tiktok backstage" bordered={true} style={{width:400}}>
                        <Input
                            id="userName"
                            size="large"
                            placeholder="Enter your userName"
                            prefix={<UserOutlined style={{color:'rgba(0,0,0,.25'}} /> }
                            onChange={(e)=>{this.setUserName(e.target.value)}}
                        />
                        <br/><br/>

                        <Input.Password
                            id="userName"
                            size="large"
                            placeholder="Enter your password"
                            prefix={<KeyOutlined  style={{color:'rgba(0,0,0,.25'}} /> }
                            onChange={(e)=>{this.setPassword(e.target.value)}}
                        />
                        <br/><br/>

                        <Button type="primary" size="large" block onClick={this.checkLogin}>Login in</Button>
                    </Card>
                </Spin>
            </div>
        )
    }
}

export default Login