import React,{Component} from 'react';
import {Redirect} from 'react-router-dom'
import memoryUtils from "../../utils/memoryUtils";
import './admin.less'
import Header from  '../../component/header'
import Content from "../../component/content/content";
import {Col,Row }from "antd";
import Inform from "../inform/inform";
import Time from "../time/time";
import Place from "../place/place";
import storageUtils from "../../utils/storageUtils";

/*
后台管理的路由组件
 */
export default class Admin extends Component{

    render() {
        /*const user = memoryUtils.user;
        const place = memoryUtils.place;*/
        const user = storageUtils.getUser();
        const place = storageUtils.getPlace();
        const key1 = Object.keys(user);
        const key2 = Object.keys(place);

        console.log(user+'...'+place);
        if(key1.length===0 || key2.length===0){
            return <Redirect to='/login' />
        }
        return (

            <div className='admin' style={{minHeight:'100%'}}>
                <Col span={18} className="admin-content">
                    <header className='admin-header'>
                        <Header/>
                    </header>
                    <section className='admin-content'>
                        <Content/>
                    </section>
                    <footer className='admin-footer' style={{textAlign:'center' , backgroundColor:'transparent',color:'black'}}>Copyright&copy;2019 Software Innovation Base Of Zhengzhou University Of Light Industry. All Rights Reserved</footer>
                </Col>
                <Col span={6} className="admin-inform">
                    <Row className="admin-inform-top">
                        <div className="penguin">
                            <div className="body">
                                <div className="eye"/>
                                <div className="eye"/>
                                <div className="beak"/>
                            </div>
                            <div className="foot"/>
                            <div className="foot"/>
                        </div>
                    </Row>
                    <Row className="admin-inform-center">
                        <div style={{textAlign:"center",fontSize:50,backgroundColor:'#54657D',height:120,paddingTop:20,paddingBottom:20}}>公    告</div>
                        <Inform/>
                    </Row>
                    <Row className="admin-inform-bottom">
                        <Col span={12}>
                            <Place/>
                        </Col>
                        {/*<Col span={12}>*/}
                        {/*    /!*<Time/>*!/*/}
                        {/*</Col>*/}
                    </Row>

                </Col>
            </div>
        )
    }
}