import React, {Component} from "react";
import {reqGetSeat, reqSign, reqSignExit} from "../../api";
import './content.less'
import {message} from "antd";
import storageUtils from "../../utils/storageUtils";
export default class Content extends Component{
    state = {
        data:[],
        //room1:[],
        //room2:[],
        state:false,
    };

    /**
     * 获取
     */
    getUsers = async () => {
        const result = await reqGetSeat();

        if(result.error_code === 31){
            const data = result.data;
            console.log(data);
            this.setState({
                data
            })
        }
    };

    /**
     * 异步加载座位列表
     */
    componentDidMount() {
        this.getUsers()
    }

    /**
     * 分房间
     */
    groupBy = (arr, property) => {
        return arr.reduce(function(memo, x) {
            if (!memo[x[property]]) { memo[x[property]] = []; }
            memo[x[property]].push(x);
            return memo;
        }, {});
    }

    sign = async (memberName,seat,state) => {
        //state状态为0为签到,为1为签退
        if(state === 0){
            if(memberName !== ''){

                const request = await reqSign(memberName);
                if(request.error_code === 23){
                    message.success(request.msg);
                    document.getElementById(seat).style.backgroundColor='green'
                    this.getUsers()

                }else{
                    message.error(request.msg)
                }
            }
        }else{
            if(memberName !== ''){
                const request = await reqSignExit(memberName);
                if (request.error_code === 25){
                    message.success(request.msg);
                    document.getElementById(seat).style.backgroundColor='red'
                    this.getUsers()
                }else {
                    message.error(request.msg)
                }
            }

        }

    };
    render() {
        const {data} = this.state;
        const room = this.groupBy(data, 'room');
        //var room2  = new Array(room.room339);
        var room1  = room.room338;
        var room2  = room.room339;
        //var room339 = new Object(room.room339);

        /*room339.data.map(function (value, index, array) {
            room1 = room1.concat(value);
        });*/
        // room1.push(room339);
        console.log(room1);
       // console.log(room339);

        //console.log(data.length)
       /* room.room339.forEach(function (value,key,ownerMap) {
            console(key+":"+ ownerMap)

        })*/

       // room1.push(room.room339)
        //room2.push(room.room339)
       // console.log(room1.length)
       // console.log(room1)

        if(storageUtils.getPlace() === '338'){
            if(room1 === undefined){
                console.log("数据为空")
            } else{

                    var seat1 = room1.find(item => item.seat===1);
                    var seat2 = room1.find(item => item.seat===2);
                    var seat3 = room1.find(item => item.seat===3);
                    var seat4 = room1.find(item => item.seat===4);
                    var seat5 = room1.find(item => item.seat===5);
                    var seat6 = room1.find(item => item.seat===6);
                    var seat7 = room1.find(item => item.seat===7);
                    var seat8 = room1.find(item => item.seat===8);
                    var seat9 = room1.find(item => item.seat===9);
                    var seat10 = room1.find(item => item.seat===10);
                    var seat11 = room1.find(item => item.seat===11);
                    var seat12 = room1.find(item => item.seat===12);
                    var seat13 = room1.find(item => item.seat===13);
                    var seat14 = room1.find(item => item.seat===14);
                    var seat15 = room1.find(item => item.seat===15);
                    var seat16 = room1.find(item => item.seat===16);
                    var seat17 = room1.find(item => item.seat===17);
                    var seat18 = room1.find(item => item.seat===18);
                    var seat19 = room1.find(item => item.seat===19);
                    var seat20 = room1.find(item => item.seat===20);
                    var seat21 = room1.find(item => item.seat===21);
                    var seat22 = room1.find(item => item.seat===22);
                    var seat23 = room1.find(item => item.seat===23);
                    var seat24 = room1.find(item => item.seat===24);
                    var seat25 = room1.find(item => item.seat===25);
                    var seat26 = room1.find(item => item.seat===26);
                    var seat27 = room1.find(item => item.seat===27);
                    var seat28 = room1.find(item => item.seat===28);
                    var seat29 = room1.find(item => item.seat===29);
                    var seat30 = room1.find(item => item.seat===30);
                    var seat31 = room1.find(item => item.seat===31);
                    var seat32 = room1.find(item => item.seat===32);
                }
            //339房间
        }else{
            if(room2 === undefined ){
                console.log("数据为空")
            }else{
                seat1 = room2.find(item => item.seat===1);
                seat2 = room2.find(item => item.seat===2);
                seat3 = room2.find(item => item.seat===3);
                seat4 = room2.find(item => item.seat===4);
                seat5 = room2.find(item => item.seat===5);
                seat6 = room2.find(item => item.seat===6);
                seat7 = room2.find(item => item.seat===7);
                seat8 = room2.find(item => item.seat===8);
                seat9 = room2.find(item => item.seat===9);
                seat10 = room2.find(item => item.seat===10);
                seat11 = room2.find(item => item.seat===11);
                seat12 = room2.find(item => item.seat===12);
                seat13 = room2.find(item => item.seat===13);
                seat14 = room2.find(item => item.seat===14);
                seat15 = room2.find(item => item.seat===15);
                seat16 = room2.find(item => item.seat===16);
                seat17 = room2.find(item => item.seat===17);
                seat18 = room2.find(item => item.seat===18);
                seat19 = room2.find(item => item.seat===19);
                seat20 = room2.find(item => item.seat===20);
                seat21 = room2.find(item => item.seat===21);
                seat22 = room2.find(item => item.seat===22);
                seat23 = room2.find(item => item.seat===23);
                seat24 = room2.find(item => item.seat===24);
                seat25 = room2.find(item => item.seat===25);
                seat26 = room2.find(item => item.seat===26);
                seat27 = room2.find(item => item.seat===27);
                seat28 = room2.find(item => item.seat===28);
                seat29 = room2.find(item => item.seat===29);
                seat30 = room2.find(item => item.seat===30);
                seat31 = room2.find(item => item.seat===31);
                seat32 = room2.find(item => item.seat===32);
            }
        }

        return(
            <div className="drawer-body">

                <div className="row1">
                    <div className="column" id={"seat1"} onClick={() => this.sign(seat1===undefined ? "" : seat1.memberName,"seat1",seat1===undefined ? "" : seat1.state)} style={{backgroundColor:seat1 === undefined ? 'red' : (seat1.state===0 ? 'red' : 'green')}}>
                        <div className="single-data">
                            <span> {seat1===undefined ? "" : seat1.seat+'、'+seat1.memberName}</span><br/>
                            <span>{seat1===undefined ? "" : (seat1.totalTime+' min')}</span>
                        </div>
                    </div>

                    <div className="column" id={"seat2"} onClick={() => this.sign(seat2===undefined ? "" : seat2.memberName,"seat2",seat2===undefined ? "" : seat2.state)} style={{backgroundColor:seat2 === undefined ? 'red' : (seat2.state===0 ? 'red' : 'green')}}>
                        <div className="single-data">
                            <span> {seat2===undefined ? "" : seat2.seat+'、'+seat2.memberName}</span><br/>
                            <span>{seat2===undefined ? "" : seat2.totalTime+' min'}</span>
                        </div>
                    </div>
                    <div className="column" id={"seat3"} onClick={() => this.sign(seat3===undefined ? "" : seat3.memberName,"seat3",seat3===undefined ? "" : seat3.state)} style={{backgroundColor:seat3 === undefined ? 'red' : (seat3.state===0 ? 'red' : 'green')}}>
                        <div className="single-data">
                            <span> {seat3===undefined ? "" : seat3.seat+'、'+seat3.memberName}</span><br/>
                            <span>{seat3===undefined ? "" : seat3.totalTime + ' min'}</span>
                        </div>
                    </div>
                    <div className="column" id={"seat4"} onClick={() => this.sign(seat4===undefined ? "" : seat4.memberName,"seat4",seat4===undefined ? "" : seat4.state)} style={{backgroundColor:seat4 === undefined ? 'red' : (seat4.state===0 ? 'red' : 'green')}}>
                        <div className="single-data">
                            <span> {seat4===undefined ? "" : seat4.seat+'、'+seat4.memberName}</span><br/>
                            <span>{seat4===undefined ? "" : seat4.totalTime + ' min'}</span>
                        </div>
                    </div>
                    <div className="column" id={"seat5"} onClick={() => this.sign(seat5===undefined ? "" : seat5.memberName,"seat5",seat5===undefined ? "" : seat5.state)} style={{backgroundColor:seat5 === undefined ? 'red' : (seat5.state===0 ? 'red' : 'green')}}>
                        <div className="single-data">
                            <span> {seat5===undefined ? "" : seat5.seat+'、'+seat5.memberName}</span><br/>
                            <span>{seat5===undefined ? "" : seat5.totalTime + ' min'}</span>
                        </div>
                    </div>
                    <div className="column" id={"seat6"} onClick={() => this.sign(seat6===undefined ? "" : seat6.memberName,"seat6",seat6===undefined ? "" : seat6.state)} style={{backgroundColor:seat6 === undefined ? 'red' : (seat6.state===0 ? 'red' : 'green')}}>
                        <div className="single-data">
                            <span> {seat6===undefined ? "" : seat6.seat+'、'+seat6.memberName}</span><br/>
                            <span>{seat6===undefined ? "" : seat6.totalTime + ' min'}</span>
                        </div>
                    </div>
                    <div className="column" id={"seat7"} onClick={() => this.sign(seat7===undefined ? "" : seat7.memberName,"seat7",seat7===undefined ? "" : seat7.state)} style={{backgroundColor:seat7 === undefined ? 'red' : (seat7.state===0 ? 'red' : 'green')}}>
                        <div className="single-data">
                            <span> {seat7===undefined ? "" : seat7.seat+'、'+seat7.memberName}</span><br/>
                            <span>{seat7===undefined ? "" : seat7.totalTime + ' min'}</span>
                        </div>
                    </div>
                    <div className="column" id={"seat8"} onClick={() => this.sign(seat8===undefined ? "" : seat8.memberName,"seat8",seat8===undefined ? "" : seat8.state)} style={{backgroundColor:seat8 === undefined ? 'red' : (seat8.state===0 ? 'red' : 'green')}}>
                        <div className="single-data">
                            <span> {seat8===undefined ? "" : seat8.seat+'、'+seat8.memberName}</span><br/>
                            <span>{seat8===undefined ? "" : seat8.totalTime + ' min'}</span>
                        </div>
                    </div>
                    <div className="column" id={"seat9"} onClick={() => this.sign(seat9===undefined ? "" : seat9.memberName,"seat9",seat9===undefined ? "" : seat9.state)} style={{backgroundColor:seat9 === undefined ? 'red' : (seat9.state===0 ? 'red' : 'green')}}>
                        <div className="single-data">
                            <span> {seat9===undefined ? "" : seat9.seat+'、'+seat9.memberName}</span><br/>
                            <span>{seat9===undefined ? "" : seat9.totalTime + ' min'}</span>
                        </div>
                    </div>
                    <div className="column" id={"seat10"} onClick={() => this.sign(seat10===undefined ? "" : seat10.memberName,"seat10",seat10===undefined ? "" : seat10.state)} style={{backgroundColor:seat10 === undefined ? 'red' : (seat10.state===0 ? 'red' : 'green')}}>
                        <div className="single-data">
                            <span> {seat10===undefined ? "" : seat10.seat+'、'+seat10.memberName}</span><br/>
                            <span>{seat10===undefined ? "" : seat10.totalTime + ' min'}</span>
                        </div>
                    </div>
                    <div className="column" id={"seat11"} onClick={() => this.sign(seat11===undefined ? "" : seat11.memberName,"seat11",seat11===undefined ? "" : seat11.state)} style={{backgroundColor:seat11 === undefined ? 'red' : (seat11.state===0 ? 'red' : 'green')}}>
                        <div className="single-data">
                            <span> {seat11===undefined ? "" : seat11.seat+'、'+seat11.memberName}</span><br/>
                            <span>{seat11===undefined ? "" : seat11.totalTime + ' min'}</span>
                        </div>
                    </div>
                    <div className="column" id={"seat12"} onClick={() => this.sign(seat12===undefined ? "" : seat12.memberName,"seat12",seat12===undefined ? "" : seat12.state)} style={{backgroundColor:seat12 === undefined ? 'red' : (seat12.state===0 ? 'red' : 'green')}}>
                        <div className="single-data">
                            <span> {seat12===undefined ? "" : seat12.seat+'、'+seat12.memberName}</span><br/>
                            <span>{seat12===undefined ? "" : seat12.totalTime + ' min'}</span>
                        </div>
                    </div>
                    <div className="column" id={"seat13"} onClick={() => this.sign(seat13===undefined ? "" : seat13.memberName,"seat13",seat13===undefined ? "" : seat13.state)} style={{backgroundColor:seat13 === undefined ? 'red' : (seat13.state===0 ? 'red' : 'green')}}>
                        <div className="single-data">
                            <span> {seat13===undefined ? "" : seat13.seat+'、'+seat13.memberName}</span><br/>
                            <span>{seat13===undefined ? "" : seat13.totalTime + ' min'}</span>
                        </div>
                    </div>
                    <div className="column" id={"seat14"} onClick={() => this.sign(seat14===undefined ? "" : seat14.memberName,"seat14",seat14===undefined ? "" : seat14.state)} style={{backgroundColor:seat14 === undefined ? 'red' : (seat14.state===0 ? 'red' : 'green')}}>
                        <div className="single-data">
                            <span> {seat14===undefined ? "" : seat14.seat+'、'+seat14.memberName}</span><br/>
                            <span>{seat14===undefined ? "" : seat14.totalTime + ' min'}</span>
                        </div>
                    </div>
                    <div className="column" id={"seat15"} onClick={() => this.sign(seat15===undefined ? "" : seat15.memberName,"seat15",seat15===undefined ? "" : seat15.state)} style={{backgroundColor:seat15 === undefined ? 'red' : (seat15.state===0 ? 'red' : 'green')}}>
                        <div className="single-data">
                            <span> {seat15===undefined ? "" : seat15.seat+'、'+seat15.memberName}</span><br/>
                            <span>{seat15===undefined ? "" : seat15.totalTime + ' min'}</span>
                        </div>
                    </div>
                    <div className="column" id={"seat16"} onClick={() => this.sign(seat16===undefined ? "" : seat16.memberName,"seat16",seat16===undefined ? "" : seat16.state)} style={{backgroundColor:seat16 === undefined ? 'red' : (seat16.state===0 ? 'red' : 'green')}}>
                        <div className="single-data">
                            <span> {seat16===undefined ? "" : seat16.seat+'、'+seat16.memberName}</span><br/>
                            <span>{seat16===undefined ? "" : seat16.totalTime + ' min'}</span>
                        </div>
                    </div>
                </div>

                {/*过道*/}



                <div className="row2">
                    <div className="column" id={"seat17"} onClick={() => this.sign(seat17===undefined ? "" : seat17.memberName,"seat17",seat17===undefined ? "" : seat17.state)} style={{backgroundColor:seat17 === undefined ? 'red' : (seat17.state===0 ? 'red' : 'green')}}>
                        <div className="single-data">
                            <span> {seat17===undefined ? "" : seat17.seat+'、'+seat17.memberName}</span><br/>
                            <span>{seat17===undefined ? "" : seat17.totalTime + ' min'}</span>
                        </div>
                    </div>
                    <div className="column" id={"seat18"} onClick={() => this.sign(seat18===undefined ? "" : seat18.memberName,"seat18",seat18===undefined ? "" : seat18.state)} style={{backgroundColor:seat18 === undefined ? 'red' : (seat18.state===0 ? 'red' : 'green')}}>
                        <div className="single-data">
                            <span> {seat18===undefined ? "" : seat18.seat+'、'+seat18.memberName}</span><br/>
                            <span>{seat18===undefined ? "" : seat18.totalTime + ' min'}</span>
                        </div>
                    </div>
                    <div className="column" id={"seat19"} onClick={() => this.sign(seat19===undefined ? "" : seat19.memberName,"seat19",seat19===undefined ? "" : seat19.state)} style={{backgroundColor:seat19 === undefined ? 'red' : (seat19.state===0 ? 'red' : 'green')}}>
                        <div className="single-data">
                            <span> {seat19===undefined ? "" : seat19.seat+'、'+seat19.memberName}</span><br/>
                            <span>{seat19===undefined ? "" : seat19.totalTime + ' min'}</span>
                        </div>
                    </div>
                    <div className="column" id={"seat20"} onClick={() => this.sign(seat20===undefined ? "" : seat20.memberName,"seat20",seat20===undefined ? "" : seat20.state)} style={{backgroundColor:seat20 === undefined ? 'red' : (seat20.state===0 ? 'red' : 'green')}}>
                        <div className="single-data">
                            <span> {seat20===undefined ? "" : seat20.seat+'、'+seat20.memberName}</span><br/>
                            <span>{seat20===undefined ? "" : seat20.totalTime + ' min'}</span>
                        </div>
                    </div>
                    <div className="column" id={"seat21"} onClick={() => this.sign(seat21===undefined ? "" : seat21.memberName,"seat21",seat21===undefined ? "" : seat21.state)} style={{backgroundColor:seat21 === undefined ? 'red' : (seat21.state===0 ? 'red' : 'green')}}>
                        <div className="single-data">
                            <span> {seat21===undefined ? "" : seat21.seat+'、'+seat21.memberName}</span><br/>
                            <span>{seat21===undefined ? "" : seat21.totalTime + ' min'}</span>
                        </div>
                    </div>
                    <div className="column" id={"seat22"} onClick={() => this.sign(seat22===undefined ? "" : seat22.memberName,"seat22",seat22===undefined ? "" : seat22.state)} style={{backgroundColor:seat22 === undefined ? 'red' : (seat22.state===0 ? 'red' : 'green')}}>
                        <div className="single-data">
                            <span> {seat22===undefined ? "" : seat22.seat+'、'+seat22.memberName}</span><br/>
                            <span>{seat22===undefined ? "" : seat22.totalTime + ' min'}</span>
                        </div>
                    </div>
                    <div className="column" id={"seat23"} onClick={() => this.sign(seat23===undefined ? "" : seat23.memberName,"seat23",seat23===undefined ? "" : seat23.state)} style={{backgroundColor:seat23 === undefined ? 'red' : (seat23.state===0 ? 'red' : 'green')}}>
                        <div className="single-data">
                            <span> {seat23===undefined ? "" : seat23.seat+'、'+seat23.memberName}</span><br/>
                            <span>{seat23===undefined ? "" : seat23.totalTime+ ' min'}</span>
                        </div>
                    </div>
                    <div className="column" id={"seat24"} onClick={() => this.sign(seat24===undefined ? "" : seat24.memberName,"seat24",seat24===undefined ? "" : seat24.state)} style={{backgroundColor:seat24 === undefined ? 'red' : (seat24.state===0 ? 'red' : 'green')}}>
                        <div className="single-data">
                            <span> {seat24===undefined ? "" : seat24.seat+'、'+seat24.memberName}</span><br/>
                            <span>{seat24===undefined ? "" : seat24.totalTime + ' min'}</span>
                        </div>
                    </div>
                    <div className="column" id={"seat25"} onClick={() => this.sign(seat25===undefined ? "" : seat25.memberName,"seat25",seat25===undefined ? "" : seat25.state)}  style={{backgroundColor:seat25 === undefined ? 'red' : (seat25.state===0 ? 'red' : 'green')}}>
                        <div className="single-data">
                            <span> {seat25===undefined ? "" : seat25.seat+'、'+seat25.memberName}</span><br/>
                            <span>{seat25===undefined ? "" : seat25.totalTime + ' min'}</span>
                        </div>
                    </div>
                    <div className="column" id={"seat26"} onClick={() => this.sign(seat26===undefined ? "" : seat26.memberName,"seat26",seat26===undefined ? "" : seat26.state)}  style={{backgroundColor:seat26 === undefined ? 'red' : (seat26.state===0 ? 'red' : 'green')}}>
                        <div className="single-data">
                            <span> {seat26===undefined ? "" : seat26.seat+'、'+seat26.memberName}</span><br/>
                            <span>{seat26===undefined ? "" : seat26.totalTime + ' min'}</span>
                        </div>
                    </div>
                    <div className="column" id={"seat27"} onClick={() => this.sign(seat27===undefined ? "" : seat27.memberName,"seat27",seat27===undefined ? "" : seat27.state)}  style={{backgroundColor:seat27 === undefined ? 'red' : (seat27.state===0 ? 'red' : 'green')}}>
                        <div className="single-data">
                            <span> {seat27===undefined ? "" : seat27.seat+'、'+seat27.memberName}</span><br/>
                            <span>{seat27===undefined ? "" : seat27.totalTime + ' min'}</span>
                        </div>
                    </div>
                    <div className="column" id={"seat28"} onClick={() => this.sign(seat28===undefined ? "" : seat28.memberName,"seat28",seat28===undefined ? "" : seat28.state)}  style={{backgroundColor:seat28 === undefined ? 'red' : (seat28.state===0 ? 'red' : 'green')}}>
                        <div className="single-data">
                            <span> {seat28===undefined ? "" : seat28.seat+'、'+seat28.memberName}</span><br/>
                            <span>{seat28===undefined ? "" : seat28.totalTime + ' min'}</span>
                        </div>
                    </div>
                    <div className="column" id={"seat29"} onClick={() => this.sign(seat29===undefined ? "" : seat29.memberName,"seat29",seat29===undefined ? "" : seat29.state)}  style={{backgroundColor:seat29 === undefined ? 'red' : (seat29.state===0 ? 'red' : 'green')}}>
                        <div className="single-data">
                            <span> {seat29===undefined ? "" : seat29.seat+'、'+seat29.memberName}</span><br/>
                            <span>{seat29===undefined ? "" : seat29.totalTime + ' min'}</span>
                        </div>
                    </div>
                    <div className="column" id={"seat30"} onClick={() => this.sign(seat30===undefined ? "" : seat30.memberName,"seat30",seat30===undefined ? "" : seat30.state)}  style={{backgroundColor:seat30 === undefined ? 'red' : (seat30.state===0 ? 'red' : 'green')}}>
                        <div className="single-data">
                            <span> {seat30===undefined ? "" : seat30.seat+'、'+seat30.memberName}</span><br/>
                            <span>{seat30===undefined ? "" : seat30.totalTime + ' min'}</span>
                        </div>
                    </div>
                    <div className="column" id={"seat31"} onClick={() => this.sign(seat31===undefined ? "" : seat31.memberName,"seat31",seat31===undefined ? "" : seat31.state)}  style={{backgroundColor:seat31 === undefined ? 'red' : (seat31.state===0 ? 'red' : 'green')}}>
                        <div className="single-data">
                            <span> {seat31===undefined ? "" : seat31.seat+'、'+seat31.memberName}</span><br/>
                            <span>{seat31===undefined ? "" : seat31.totalTime + ' min'}</span>
                        </div>
                    </div>
                    <div className="column" id={"seat32"} onClick={() => this.sign(seat32===undefined ? "" : seat32.memberName,"seat32",seat32===undefined ? "" : seat32.state)}  style={{backgroundColor:seat32 === undefined ? 'red' : (seat32.state===0 ? 'red' : 'green')}}>
                        <div className="single-data">
                            <span> {seat32===undefined ? "" : seat32.seat+'、'+seat32.memberName}</span><br/>
                            <span>{seat32===undefined ? "" : seat32.totalTime + ' min'}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}