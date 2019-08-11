import React, { Component } from 'react';
import { Button, Toast, List, InputItem } from 'antd-mobile';
// import { createForm } from 'rc-form';
import { withRouter } from "react-router-dom";
//服务的api
import { loginAPI } from "../api/api.js"

//提示框
function showToast(str) {
    Toast.info(str, 1);
}

class login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: ""
        }
    }
    componentDidMount() {
        // this.autoFocusInst.focus();
    }
    
    //提交表单
    handleClick = () => {
        let { username,password } = this.state
        if(!username && !password) return 

        let params = {
            uname:　username,
            pwd: password 
        }
        loginAPI(params).then(res => {
            let { meta } = res
            if(meta.status == 200) {
                //获取路由的操作
                const { history } = this.props
                //存入localstorage
                localStorage.setItem("myToken",res.data.token)
                //路由跳转
                history.push("/home")
            }else {
                showToast("请输入正确的用户名或则密码")
            }
        })
    }
    //获取用户名数据
    handleUserName = (val) => {
        this.setState({
            username: val
        })
    }
    //获取密码数据
    handlePassword = (val) => {
        this.setState({
            password: val
        })
    }

    render() {

    return (
        <div>
        <List renderHeader={() => '登录'}>
            <InputItem
                value={this.state.username}
                onChange={this.handleUserName}
                clear
                placeholder="请输入用户名"
            >用户名</InputItem>
            <InputItem
                value={this.state.password}
                onChange={this.handlePassword}
                type="password"
                placeholder="****"
            >密码</InputItem>
            <Button type="primary" onClick={this.handleClick }>登录</Button>
        </List>
        </div>
    );
    }
}

// const login = createForm()(Login);

export default withRouter(login);