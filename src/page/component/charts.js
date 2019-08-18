import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';

class Charts extends Component { 
    //echarts的数据 
    getOption = () => {
        const {chartData} = this.props;
        return {
          title : {
            text: '贷款数据统计',
            subtext: '纯属虚构',
            x:'center'
          },
          tooltip : {
            trigger: 'item',
            // formatter: "{c}"
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          legend: {
            orient: 'vertical',
            left: 'left',
            data: ['贷款总额','支付利息']
          },
          series : [{
            name: '访问来源',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
              {value:335, name:'贷款总额'},
              {value:310, name:'支付利息'},
              {value:200, name:'利息'}
            ],
            // data: chartData,
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }]
        }
    }

    render() {
        // render echarts option.
        return (
            <ReactEcharts option={this.getOption()} />
        )
    }
}

export default Charts
