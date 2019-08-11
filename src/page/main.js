import React, { Component } from 'react';
//导入轮播图的组件
import CarouselPage from "./component/carousel.js"

class Main extends Component {
    constructor(props) {
        super(props)
        this.state= {

        }
    }

    render() {
        return (
            <div className="main-wrapper">
                {/* // 轮播图 */}
                <CarouselPage />
            </div>
        )
    }
}

export default Main;