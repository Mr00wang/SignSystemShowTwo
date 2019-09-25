import React,{Component} from 'react';
import {Col, message, Row} from 'antd'
import './rank.less'
import {reqGetFirstRank, reqGetLastRank} from "../../api";
import storageUtils from "../../utils/storageUtils";

export default class Rank extends Component{

    state = {
        firsts: [{},{},{}],
        lasts: [{},{},{}],
    };

    getFirstRank = async () => {
        const request = await reqGetFirstRank(storageUtils.getPlace());
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
        const request = await reqGetLastRank(storageUtils.getPlace());
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
                <h1 style={{fontSize:30,marginBottom:2,color:'orange',textShadow:"2px 2px 2px #fff",fontFamily:'幼圆'}}>累计时间排名</h1>
                <div className="rank-content">

                    <Row span={15} className='rank-First'>
                        <Col className="rank-First0" >前三名</Col><br/>
                        <hr size={50}/><hr/>
                        <Col className="rank-First1" span={8}>{firsts[0].memberName}</Col>
                        <Col className="rank-First2" span={8}>{firsts[1].memberName}</Col>
                        <Col className="rank-First3" span={8}>{firsts[2].memberName}</Col>
                    </Row>
                    <hr size={26}/><hr/>
                    <br/><br/>
                    <Row span={12} className='rank-Last'>
                        <Col className="rank-Last0" >后三名</Col><br/>
                        <hr size={26}/><hr/>
                        <Col className="rank-Last1" span={8}>{lasts[0].memberName}</Col>
                        <Col className="rank-Last2" span={8}>{lasts[1].memberName}</Col>
                        <Col className="rank-Last3" span={8}>{lasts[2].memberName}</Col>

                    </Row>
                </div>
            </div>
        )
    }

}