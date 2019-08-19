import React, { Component } from 'react';
//路由模块
import { withRouter } from "react-router-dom";
import styles from "./houseList.module.css"
import { Icon } from 'antd-mobile';
//服务
import { getHomeListAPI } from "../api/api.js"

class HouseList extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.getHomeListData()
    }

    async getHomeListData() {
        let { homeType } = this.props.location.state.params
        let params = {
            home_type: homeType
        }
        let res = await getHomeListAPI(params)
        console.log(res)
    }

    goback = () => {
        // this.props.history.push("/home")
        this.props.history.goBack()
    }

    render() {
        let name = this.props.location.state.params.nam
        return (
            <div className={styles["house-list"]}>
                <div className={styles["head-title"]}>
                    {/* 点击时触发父组件的事件函数 */}
                    <div onClick={this.goback} className={styles['icon']}>
                        <Icon type="left" />
                    </div>
                    <span>{ name }</span>
                </div>
            </div>
        )
    }
}

export default withRouter(HouseList)