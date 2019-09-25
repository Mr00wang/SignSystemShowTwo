import React,{Component} from 'react';
import './content.less'
import {Col, Row} from "antd";
import Camera from "../../pages/camera/camera";
import Rank from "../../pages/rank/rank";
import {Record} from "../../pages/record/record";
export default class Content extends Component{
    render() {
        return(
            <div className='content'>
                <Row className='content-top'>
                    <Camera/>
                </Row>
                <br/>
                <hr size="10"/>
                <br/>
                <Row className='content-center'>
                    <Col span={12}>
                        <Record/>
                    </Col>
                    <Col span={12}>
                        <Rank/>
                    </Col>
                </Row>
            </div>
        )
    }
}