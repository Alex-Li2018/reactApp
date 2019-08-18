// 计算器的页面
import React, { Component } from 'react';
import { Icon,Tabs,Badge } from 'antd-mobile';
import Charts from "./charts.js"
import styles from "./calc.module.css"

class Calc extends Component {
    constructor(props) {
        super(props)
        this.state= {
            tabs: [
                { title: "公积金贷款" },
                { title: "商业贷款" },
                { title: "组合贷款" },
            ]
        }
    }

    render() {
        const { hideCalcComponets } = this.props
        return (
            <div className={styles["calc"]}>
                {/* 返回图标 */}
                <div className={styles["head-title"]}>
                    {/* 点击时触发父组件的事件函数 */}
                    <div onClick={hideCalcComponets} className={styles['icon']}>
                        <Icon type="left" />
                    </div>
                    <span>贷率计算器</span>
                </div>
                <div>
                <Tabs tabs={this.state.tabs}
                    initialPage={0}
                    onChange={(tab, index) => { console.log('onChange', index, tab); }}
                    onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                    >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 'calc(100vh - 95px)', backgroundColor: '#fff' }}>
                       <Charts />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 'calc(100vh - 95px)', backgroundColor: '#fff' }}>
                        Content of second tab
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 'calc(100vh - 95px)', backgroundColor: '#fff' }}>
                        Content of third tab
                    </div>
                </Tabs>
                </div>
            </div>
        )
    }
}

export default Calc