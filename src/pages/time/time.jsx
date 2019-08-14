import React,{Component} from 'react';
import {formateDate1} from "../../utils/dateUtils";
import './time.less'
export default class Time extends Component{
    state = {
        currentTime: formateDate1(Date.now()),//当前时间字符串
    }

    getTime = () => {
        this.intervalId = setInterval(() => {
            const currentTime = formateDate1(Date.now())
            this.setState({currentTime})
        },1000)

    }

    /**
       第一次render（）之后执行一次
       一般在此执行异步操作： 发ajax请求启动定时器
    */

    componentDidMount() {
        this.getTime()
    }
    componentWillUnmount () {
        // 清除定时器
        clearInterval(this.intervalId)
    }

    render() {
        const {currentTime} = this.state
        return(
            <div className='time'>
                <h1>{currentTime}</h1>
            </div>
        )
    }
}