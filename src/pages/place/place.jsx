import React,{Component} from 'react';
import {Button, Drawer,Icon} from "antd";
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
                <Button type="primary" onMouseOver={this.showDrawer} >
                    手动签到
                </Button>
                <div style={{
                    width:1024,
                }}>
                    <Drawer
                        // bodyStyle={{backgroundColor:"red"}}
                        title={
                            <div style={{textAlign:'center'}}>
                                <Icon type="heart" theme="twoTone" twoToneColor="#eb2f96" style={{width:20,height:20}}/>
                                &nbsp;&nbsp;
                                <span style={{fontSize:30}}>座 位 分 布</span>
                                &nbsp;&nbsp;
                                <Icon type="heart" theme="twoTone" twoToneColor="#eb2f96" />
                            </div>

                        }
                        //width={450}
                        // placement="top"
                        // height='480px'
                        placement="left"
                        width="1280px"
                        closable={true}
                        onClose={this.onClose}
                        visible={this.state.visible}
                    >
                        <Content key={Math.random()}  ref={this.seat}/>
                    </Drawer>
                </div>
            </div>
        );
    }
}