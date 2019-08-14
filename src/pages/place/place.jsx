import React,{Component} from 'react';
import {Button, Drawer} from "antd";
import './place.less'
import Content from "./content";
export default class Place extends Component{
    constructor (props) {
        super(props);
        this.seat = React.createRef()
    }
    state = {
        //backgroundColor:'red',
        visible: false,
        data: [],
    };

    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    render() {
        return (
            <div className='place'>
                <Button type="primary" onClick={this.showDrawer} >
                    座 位 分 布
                </Button>
                <Drawer
                    title="座位分布"
                    placement="top"
                    height='540px'
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                >
                    <Content key={Math.random()}  ref={this.seat}/>
                </Drawer>
            </div>
        );
    }
}