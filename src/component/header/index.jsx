import React,{Component} from 'react';
import './index.less'
import './style.css'
import {withRouter} from 'react-router-dom'

class Header extends Component{

    render() {
        return(
            <div className="header">
                <div style={{fontSize:50,marginTop:10,color:'orange',fontStyle:'bold'}}>软 件 创 新 基 地 签 到 系 统</div>

            </div>
        )
    }
}
export default withRouter(Header)