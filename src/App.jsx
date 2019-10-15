/*
应用的根组件
 */

import React,{Component} from 'react';
import {BrowserRouter, Route,Switch} from 'react-router-dom'
import Login from "./pages/login/login";
import Admin from "./pages/admin/admin";
import Online from "./pages/online/online"
export default class App extends Component{
    render() {
        return(
            <BrowserRouter>
                <Switch>{/*只匹配其中的一个*/}
                    <Route path='/online' component={Online}/>
                    <Route path='/login' component={Login}/>
                    <Route path='/' component={Admin}/>
                </Switch>
            </BrowserRouter>
        )
    }
}