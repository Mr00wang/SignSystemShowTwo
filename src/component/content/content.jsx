import React,{Component} from 'react';
import './content.less'
import {Col, Row} from "antd";
import Camera from "../../pages/camera/camera";
import Time from "../../pages/time/time";
import Rank from "../../pages/rank/rank";
import Place from "../../pages/place/place";
import Inform from "../../pages/inform/inform";
export default class Content extends Component{
    render() {
        return(
            <div className='content'>
                <Row className='content-top'>
                    <Inform/>
                </Row>
                <Row className='content-center'>
                    <h1 style={{fontFamily:'楷体'}}>成功 = 艰苦劳动 + 正确的方法 + 少说空话</h1>
                </Row>
                <Row className='content-bottom'>
                    <Col span={6} className="content-bottom1">
                        <Camera/>
                    </Col>
                    <Col span={6} className="content-bottom2">
                        <Time/>
                    </Col>
                    <Col span={6} className="content-bottom3">
                        <Rank/>
                    </Col>
                    <Col span={6} className="content-bottom4">
                        <Place/>
                    </Col>
                </Row>

            </div>
        )
    }
}