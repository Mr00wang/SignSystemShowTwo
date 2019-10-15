import React,{Component} from 'react'
import {Form, Table,message,Tag,BackTop} from "antd";
import {reqGetFirstRank, reqGetInform, reqGetLastRank,reqGetSeat} from "../../api"
import {formateDate2} from "../../utils/dateUtils";

class Online extends Component{
    state = {
        loading:false,
        data:[],
        firsts: [{},{},{}],
        lasts: [{},{},{}],
        inform: [{}],
    };

    /**
     * 标题
     */
    initColumns = () => {
        this.columns = [
            {
                title: '姓名',
                dataIndex:'memberName',
                // width: 120
            },
            {
                title: "人员状态",
                render: (record) => {
                    let color = record.state === 0 ? 'rgb(169,169,169)' : 'green';
                    let text;
                    if (color === 'rgb(169,169,169)') {
                        text = '未在线';
                    } else {
                        text = `已在线`;
                    }
                    return (
                        <span>
                            <Tag color={color}>{text}</Tag>
                            <span>{color === "green" ? record.getIntoTime : this.diffTime(record.exitTime,formateDate2(Date.now()))}</span>
                        </span>

                    );
                },
            },
            {
                title: "总时长",
                dataIndex: "totalTime",
                defaultSortOrder: 'descend',
                sorter: (a, b) => a.totalTime - b.totalTime,
                // width: 120
            }
        ]
    };

    /**
     * 第一次渲染表格标题
     */
    componentWillMount() {
        this.initColumns()
    }

    /**
     * 获取总人员
     * @returns {Promise<void>}
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
     * 异步加载数据
     */
    componentDidMount() {
        this.getUsers();
        this.getFirstRank();
        this.getLastRank();
        this.getInform()
    }

    /**
     * 计算未在线时长
     */
    diffTime = (startDate,endDate) => {
        let startDate1 = startDate.replace(/\-/g, "/");
        let endDate1 = endDate.replace(/\-/g, "/");
        startDate1= new Date(startDate1);
        endDate1 = new Date(endDate1);
        let diff=endDate1.getTime() - startDate1.getTime();//时间差的毫秒数
        //计算出相差天数
        let days=Math.floor(diff/(24*3600*1000));
        //计算出小时数
        let leave1=diff%(24*3600*1000);    //计算天数后剩余的毫秒数
        let hours=Math.floor(leave1/(3600*1000));
        //计算相差分钟数
        let leave2=leave1%(3600*1000);        //计算小时数后剩余的毫秒数
        let minutes=Math.floor(leave2/(60*1000));
        //计算相差秒数
        let leave3=leave2%(60*1000);      //计算分钟数后剩余的毫秒数
        let seconds=Math.round(leave3/1000);
        let returnStr = seconds + "秒";
        // let returnStr = "";
        if(minutes>0) {
            returnStr = minutes + "分" + returnStr;
        }
        if(hours>0) {
            returnStr = hours + "小时" + returnStr;
        }
        if(days>0) {
            returnStr = days + "天" + returnStr;
        }

        return returnStr;

    };

    /**
     * 获取总时长前三名
     * @returns {Promise<void>}
     */
    getFirstRank = async () => {
        const request = await reqGetFirstRank("338");
        if(request.error_code ===  19){
            const firsts  = request.data;
            this.setState({
                firsts: firsts
            })
        }else{
            message.error(request.msg);
        }

    };

    /**
     * 获取总时长后三名
     * @returns {Promise<void>}
     */
    getLastRank = async () => {
        const request = await reqGetLastRank("338");
        if(request.error_code ===  21){
            const lasts  = request.data;
            this.setState({
                lasts
            })
        }else{
            message.error(request.msg);
        }
    };


    /**
     * 公告编辑
     * @returns {Promise<void>}
     */
    getInform = async () => {

        const request = await reqGetInform("338");
        if(request.error_code === 17){
            const inform = request.data;
            this.setState({
                inform:inform
            })

        }else{
            message.error(request.msg);
        }
    };


    /**
     * 房间分组
     * @param arr
     * @param property
     * @returns {*}
     */
    groupBy = (arr, property) => {
        return arr.reduce(function(memo, x) {
            if (!memo[x[property]]) { memo[x[property]] = []; }
            memo[x[property]].push(x);
            return memo;
        }, {});
    };
    render(){
        const {data,loading,firsts,lasts,inform} = this.state;
        const o = this.groupBy(data, 'room');
        const inform1 = inform[0].content;
        return(
            <div style={{overflow:'auto',height:'100%',backgroundColor:'#001529'}}>
                <header style={{height:60}}><div style={{color:'white',textAlign:'center',fontSize:'20px',marginTop:30}}>软件创新基地签到系统</div></header>
                <section style={{backgroundColor:"white"}}>
                    <div style={{paddingLeft:12,paddingTop:10,fontSize:20}}>
                        <h3>公告</h3>
                        <div style={{fontSize:18}}>{inform1}</div>
                        <hr/><br/>
                        <h3>总时长排名</h3>
                        <div>前三名</div>
                        <Tag color="green" style={{fontSize:20,width:80,height:24,textAlign:'center'}}>{firsts[0].memberName}</Tag>
                        <Tag color="green" style={{fontSize:20,width:80,height:24,textAlign:'center'}}>{firsts[1].memberName}</Tag>
                        <Tag color="green" style={{fontSize:20,width:80,height:24,textAlign:'center'}}>{firsts[2].memberName}</Tag>
                        <br/>
                        <div>后三名</div>
                        <Tag color="red" style={{fontSize:20,width:80,height:24,textAlign:'center'}}>{lasts[0].memberName}</Tag>
                        <Tag color="red" style={{fontSize:20,width:80,height:24,textAlign:'center'}}>{lasts[1].memberName}</Tag>
                        <Tag color="red" style={{fontSize:20,width:80,height:24,textAlign:'center'}}>{lasts[2].memberName}</Tag><br/>
                        <hr/>
                    </div><br/>
                    <div>
                        <div style={{paddingLeft:12,paddingTop:10,fontSize:20}}>338人员情况</div>
                        <Table
                            bordered={true}
                            loading={loading}
                            rowKey='index'
                            dataSource={o.room338}
                            columns={this.columns}
                            // pagination={{defaultPageSize: 6,showQuickJumper: true}}
                            pagination={false}
                        />
                    </div>
                    <div>
                        <BackTop />
                        <strong style={{ color: 'rgba(64, 64, 64, 0.6)' }}>
                        </strong>
                    </div>
                </section>
                <footer style={{backgroundColor:'#001529',height:60}}>
                    <div style={{fontSize:'15px',color:'white',textAlign:'center',marginTop:30}}>&copy;2019郑州轻工业大学软件创新基地</div>
                </footer>
        </div>
        )
    }
}

const  WrapOnline = Form.create()(Online);
export default WrapOnline