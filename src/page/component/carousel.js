import React, { Component } from 'react';
import { Carousel, WingBlank } from 'antd-mobile';
import './carousel.css'
//获取api
import { getSwiperAPI } from "../../api/api.js"

class CarouselPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      imgHeight: 176,
    }
  }

  componentDidMount() {
    // simulate img loading
    getSwiperAPI({}).then(res => {
      let { meta, data } = res
      if(meta.status == 200) {
        //处理原始数据
        let list = res.data.list
        list.forEach((_,index) => {
          _.id = index
        })
        // console.log(list,res.data.list)
        this.setState({
          data: list
        })  
      }
    })
  }
  render() {
    return (
      <WingBlank>
        <Carousel
          autoplay={true}
          infinite
        >
          {this.state.data.map(val => (
             <a
              key={val.id}
              href="javaScript:void(0)"
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={val.original}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
      </WingBlank>
    );
  }
}

export default CarouselPage;