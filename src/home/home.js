import React, { Component } from 'react';
import { Flex } from 'antd-mobile';
import Menu from "./menu.js"
//引入样式表
import styles from "./home.module.css"
//修改公共样式
import './home.css'
//引入路由
import {
    BrowserRouter as Router,
    Route
  } from "react-router-dom";

//引入组件
import Main from "../page/main.js"
import Chat from "../page/chat.js"
import Info from "../page/info.js"
import Mine from "../page/mine.js"
//引入图片
import home from "../spritePng/home.png"
import search from "../spritePng/search.png"
import chat from "../spritePng/chat.png"
import mine from "../spritePng/mine.png"
//引入房源组件
import HouseList from "../page/houseList.js"

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            imgSrcArr: [
                home,
                search,
                chat,
                mine
            ]
        }
    }

    render() {
        return (
            <div className={styles["home"]}>
                <div className={styles["home-container"]}>
                    <Router>
                        {/* 路由填充位 */}
                        <Route path="/home" component={Main} />
                        <Route path="/houselist" component={HouseList}/>
                        <Route path="/home/chat" component={Chat} />
                        <Route path="/home/info" component={Info} />
                        <Route path="/home/mine" component={Mine} />
                    </Router>
                </div>
                <section className={`${styles["home-bottom"]} home-section`}>
                    <Flex>
                        <Flex.Item><Menu to="/home" current={true} slotName="主页" src={this.state.imgSrcArr[0]}  /></Flex.Item>
                        <Flex.Item><Menu to="/home/chat" slotName="微聊"  src={this.state.imgSrcArr[1]}  /></Flex.Item>
                        <Flex.Item><Menu to="/home/info" slotName="咨询"  src={this.state.imgSrcArr[2]}  /></Flex.Item>
                        <Flex.Item><Menu to="/home/mine" slotName="我的"  src={this.state.imgSrcArr[3]}  /></Flex.Item>
                    </Flex>
                </section>
            </div>
        )
    }
}

export default Home;