import React, { Component } from 'react';
import { Icon } from 'antd-mobile';
import { Route, Link } from "react-router-dom";
import "./menu.css"

class Menu extends Component {
    render() {
        const { to,slotName,current } = this.props
        return (
            // <div>
            //     <Link to={to}>
            //         <Icon type="right" />
            //         <h4>{ slotName }</h4>
            //     </Link>
            // </div>
            <Route
                path={to}
                // exact表示精确选中
                exact={current}
                // match表示是否接收到
                children={({ match }) => (
                <div className={`linkWrapper ${match ? "active" : ""}`}> 
                    <Link to={to}>
                        <Icon type="right" />
                        <h4>{ slotName }</h4>
                    </Link>
                </div>
                )}
            />
        )
    }
}

export default Menu;