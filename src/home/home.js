import React, { Component } from 'react';
import { Flex } from 'antd-mobile';
import Menu from "./menu.js"
//引入样式表
import "./home.css"
//引入路由
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
  } from "react-router-dom";

//引入组件
import Main from "../page/main.js"
import Chat from "../page/chat.js"
import Info from "../page/info.js"
import Mine from "../page/mine.js"

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className="home">
                <div className="home-container">
                    {/* 路由填充位 */}
                    <Route path="/home" component={Main} />
                    <Route path="/home/chat" component={Chat} />
                    <Route path="/home/info" component={Info} />
                    <Route path="/home/mine" component={Mine} />
                </div>
                <section className="home-bottom">
                    <Flex>
                        <Flex.Item><Menu to="/home" current={true} slotName="主页"  /></Flex.Item>
                        <Flex.Item><Menu to="/home/chat" slotName="微聊"  /></Flex.Item>
                        <Flex.Item><Menu to="/home/info" slotName="咨询"  /></Flex.Item>
                        <Flex.Item><Menu to="/home/mine" slotName="我的"  /></Flex.Item>
                    </Flex>
                </section>
            </div>
        )
    }
}

export default Home;