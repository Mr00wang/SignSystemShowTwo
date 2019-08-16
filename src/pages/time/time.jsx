import React,{Component} from 'react';
import {formateDate, formateDate1} from "../../utils/dateUtils";
import './time.less'
import {reqTimeExit} from "../../api";
import {message} from "antd";
export default class Time extends Component{
    state = {
        currentTime: formateDate1(Date.now()),//当前时间字符串
    };

    getTimeAllExit = async () => {
        const request = await reqTimeExit();
        if(request.error_code === 27){
            message.success("系统已自动签退!")
        }
    };

    getTime = () => {
        this.intervalId = setInterval(() => {
            const currentTime = formateDate1(Date.now());
            const currentTime1 = formateDate(Date.now());
            this.setState({currentTime},
                () => {
                    if(currentTime1 === '12:00:00'){
                        this.getTimeAllExit()
                    }else if(currentTime1 === '22:00:00'){
                        this.getTimeAllExit()
                    }
                })
        },1000);


    };

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
        const {currentTime} = this.state;
        return(
            <div className='time'>
                <h1>{currentTime}</h1>
            </div>
        )
    }
}