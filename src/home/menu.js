import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Route, Link } from "react-router-dom";
import styles  from "./menu.module.css"

class Menu extends Component {
    //类型检测
    static propTypes = {
        to: PropTypes.string,
        slotName: PropTypes.string,
        current: PropTypes.bool,
        src: PropTypes.string
    }

    render() {
        const { to,slotName,current,src } = this.props
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
                <div className={`${styles['linkWrapper']} ${match ? styles['active'] : ""}`}> 
                    <Link to={to}>
                        <img className={styles["img-icon"]} src={src} />
                        <div className={styles['title']}>{ slotName }</div>
                    </Link>
                </div>
                )}
            />
        )
    }
}

export default Menu;