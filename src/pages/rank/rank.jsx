import React,{Component} from 'react';
import {Col, message, Row} from 'antd'
import './rank.less'
import {reqGetFirstRank, reqGetLastRank} from "../../api";
import memoryUtils from "../../utils/memoryUtils";

export default class Rank extends Component{

    state = {
        firsts: [{},{},{}],
        lasts: [{},{},{}],
    };

    getFirstRank = async () => {
        const request = await reqGetFirstRank(339);
        if(request.error_code ===  19){
            const firsts  = request.data;
            this.setState({
                firsts: firsts
            })
        }else{
            message.error(request.msg);
        }

    };

    getLastRank = async () => {
        const request = await reqGetLastRank(339);
        if(request.error_code ===  21){
            const lasts  = request.data;
            this.setState({
                lasts
            })
        }else{
            message.error(request.msg);
        }
    };



    componentDidMount() {
       this.getFirstRank();
        this.getLastRank();
    }


   /* componentWillReceiveProps(nextprops);
    {
        const { memberName} = nextprops
    }*/
    render() {
        const {firsts ,lasts} = this.state;

       // console.log()
        //console.log(lasts[0].memberName)
        return(
            <div className="rank">
                <div className="rank-content">
                    <Col span={12} className='rank-First'>
                        <Row className="rank-First0">前三名</Row>
                        <Row className="rank-First1">{firsts[0].memberName}</Row>
                        <Row className="rank-First2">{firsts[1].memberName}</Row>
                        <Row className="rank-First3">{firsts[2].memberName}</Row>
                    </Col>
                    <Col span={12} className='rank-Last'>
                        <Row className="rank-Last0">后三名</Row>
                        <Row className="rank-Last1">{lasts[0].memberName}</Row>
                        <Row className="rank-Last2">{lasts[1].memberName}</Row>
                        <Row className="rank-Last3">{lasts[2].memberName}</Row>
                    </Col>
                </div>
            </div>
        )
    }

}