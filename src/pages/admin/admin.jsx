import React,{Component} from 'react';
import {Redirect} from 'react-router-dom'
import memoryUtils from "../../utils/memoryUtils";
import './admin.less'
import Header from  '../../component/header'
import Content from "../../component/content/content";
/*
后台管理的路由组件
 */
export default class Admin extends Component{

    render() {
        const user = memoryUtils.user
        if(!user){
            return <Redirect to='/login' />
        }
        return (

            <div className='admin' style={{minHeight:'100%'}}>
                    <header className='admin-header'>
                        <Header/>
                    </header>
                    <section className='admin-content'>
                        <Content/>
                    </section>
                    <footer className='admin-footer' style={{textAlign:'center' , backgroundColor:'transparent',color:'black'}}>Copyright&copy;2019 Software Innovation Base Of Zhengzhou University Of Light Industry. All Rights Reserved</footer>
            </div>
        )
    }
}