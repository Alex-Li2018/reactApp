import React, { Component } from 'react';
import { Button, Toast, List, InputItem } from 'antd-mobile';
// import { createForm } from 'rc-form';
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
            username,
            pw: password 
        }
        loginAPI(params).then(res => {
            let { meta } = res
            if(meta.status == 200) {

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
        {/* <List renderHeader={() => 'Format'}> */}
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
        {/* </List> */}
        </div>
    );
    }
}

// const login = createForm()(Login);

export default login;