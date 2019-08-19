import React, { Component } from 'react';
//路由模块
import { withRouter } from "react-router-dom";
//导入服务
import { getMenuAPI,getMenuInfoAPI,getMenuFaqAPI } from "../api/api.js"
//导入轮播图的组件
import CarouselPage from "./component/carousel.js"
import { Flex } from 'antd-mobile';
import Calc from "./component/calc.js"
//导入样式
import './main.css'

class Main extends Component {
    constructor(props) {
        super(props)
        this.state= {
            menuList: [],
            infoList: [], //咨询数据
            faqList: [], //好客问答
            hideCalcFlag: false, //默认不显示计算器页面
        }
    }

    //组件挂载时调用
    componentWillMount() {
        this.getMenuData()
        this.getMenuInfoData()
        this.getMenuFaqData()
    }   

    //获取menu数据
    async getMenuData() {
        let res = await getMenuAPI({})
        let { meta,data } = res
        if(meta.status == 200) {
            this.setState({
                menuList: data.list
            })
        }
    }

    //获取infos数据
    async getMenuInfoData() {
        let res = await getMenuInfoAPI()

        let { meta,data } = res
        if(meta.status == 200) {
            this.setState({
                infoList: data.list
            })
        }
    }

    //获取faq数据
    async getMenuFaqData() {
        let res = await getMenuFaqAPI()

        let { meta,data } = res
        if(meta.status == 200) {
            this.setState({
                faqList: data.list
            })
        }
    }

    //隐藏计算器页面
    hideMenu = (val) => {

        let { menu_name: name } = val
        let { history } = this.props
        switch(name) {
            case "二手房": 
                history.push('/houselist',{ params: { name: name,homeType: 1 } })
            break;
            case "新房": 
                history.push('/houselist',{ params: { name: name,homeType: 2 } })
            break;
            case "租房": 
                history.push('/houselist',{ params: { name: name,homeType: 3 } })
            break;
            case "海外": 
                history.push('/houselist',{ params: { name: name,homeType: 3 } })
            break;
            case "地图找房": 
                console.log(name)   
            break;
            case "查公交": 
                console.log(name)
            break;
            case "计算器": 
                this.setState({
                    hideCalcFlag: true
                })
            break;
            case "问答": 
                console.log(name)
            break;
        }
        // if(name == "计算器") {
        //     this.setState({
        //         hideCalcFlag: true
        //     })
        // }else {
        //     this.setState({
        //         hideCalcFlag: false
        //     })
        // }
    }

    //传递给子组件的事件
    hideCalcComponets = () => {
        this.setState({
            hideCalcFlag: false
        })
    }

    render() {
        const Menu = (props) => {
            return (
                <Flex>
                    {/* 满足条件才渲染 */}
                    {props.menuList.length && props.menuList.map(val => (
                        <Flex.Item key={val.id}>
                            <span onClick={ this.hideMenu.bind(this,val) } >{val.menu_name}</span>    
                        </Flex.Item>
                    ))}
                </Flex>
            )
        }

        const Info = (props) => { 
            return (
                <div className="menu-info">
                    <img className="info-img" src="http://47.96.21.88:8086/public/zixun.png" />
                    <div className="info-list">
                        {
                            props.infoList.length && props.infoList.map(item => (
                                // 必须要有根组件
                                <div className="info-list-item" key={item.id}>
                                    <span>限购 ●</span>
                                    <span>{item.info_title}</span>
                                </div>
                            ))
                        }
                    </div>
                </div>
            )
        }

        const Question = (props) => {
            return (
                <div className="menu-question">
                    <h4 className="title">好客问答</h4>
                    <ul>
                        {
                           props.faqList.length && props.faqList.map(item => (
                                <li className="question-list" key={item.question_id}>
                                    <span className="num">?</span>
                                    <span className="name">{item.question_name}</span>
                                    <span className="tag">{item.question_tag}</span>
                                </li>
                            )) 
                        }
                    </ul>
                </div>
            )
        }

        //整体的页面显示组件
        const LayoutShow = () => { 
            if(this.state.hideCalcFlag) {
                //  计算器页面 
                return (<Calc hideCalcComponets={this.hideCalcComponets} />) 
            }else {
                return (
                    <div>
                        {/* // 轮播图 */}
                        <CarouselPage />
                        {/* 使用menu函数组件 */}
                        <Menu menuList={this.state.menuList} />
                        {/* 咨询函数组件 */}
                        <Info infoList={this.state.infoList} />
                        {/* 好客问答 */}
                        <Question faqList={this.state.faqList} />
                    </div>
                )
            }
        }

        return (
            <div className="main-wrapper">
                <LayoutShow/> 
            </div>
        )
    }
}

export default withRouter(Main);