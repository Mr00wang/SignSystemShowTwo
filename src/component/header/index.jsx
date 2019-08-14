import React,{Component} from 'react';
import './index.less'
import './style.css'
import {withRouter} from 'react-router-dom'

class Header extends Component{

    render() {
        return(
            <div className="header">
                    <h1>软 件 创 新 基 地 签 到 系 统</h1>
                    <div className="penguin">
                        <div className="body">
                            <div className="eye"/>
                            <div className="eye"/>
                            <div className="beak"/>
                        </div>
                        <div className="foot"/>
                        <div className="foot"/>
                    </div>
            </div>
        )
    }
}
export default withRouter(Header)