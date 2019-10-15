import React,{Component} from "react";
import {reqGetRecord, reqTimeExit} from "../../api";
import {message, Table} from "antd";
import storageUtils from "../../utils/storageUtils";
import "./record.less"
import {formateDate, formateDate1} from "../../utils/dateUtils";
export class Record extends Component {
    state = {
      records:[],
        currentTime: formateDate1(Date.now()),//当前时间字符串
    };
    /*
    初始化Table所有列的数组
     */
    initColumns = () => {
        this.columns = [
            {
                width:60,
                title: '姓名',
                dataIndex: 'memberName', //显示数据对应的属性名
            },
            {
                width:70,
                title: '签到时间',
                dataIndex: 'getIntoTime',
                /*defaultSortOrder: 'descend',
                sorter: (a, b) => a.place - b.place,*/
            },
            {
                width:50,
                title: '累计时间',
                dataIndex:'totalTime',
            },

        ]
    };

    getTimeAllExit = async () => {
        const request = await reqTimeExit();
        if(request.error_code === 27){
            message.success("系统已自动签退!")
        }
    };

    getTime = () => {
        this.intervalId = setInterval(() => {
            const currentTime = formateDate1(Date.now());
            const currentTime1 = formateDate(Date.now());
            this.setState({currentTime},
                () => {
                    if(currentTime1 === '12:00:00'){
                        this.getTimeAllExit()
                    }else if(currentTime1 === '22:30:00'){
                        this.getTimeAllExit()
                    }
                })
        },1000);


    };

    /**
     第一次render（）之后执行一次
     一般在此执行异步操作： 发ajax请求启动定时器
     */

    /*
    为第一次render()准备数据
     */
    componentWillMount()
        {
        this.initColumns();

    }

    componentWillUnmount ()
        {
        // 清除定时器
        clearInterval(this.intervalId);
    }
    time = setInterval(this.getRecord = async () => {
        const result = await reqGetRecord(storageUtils.getPlace());
        const records = result.data;
        console.log(records);
        if(result.error_code === 57){
            this.setState({
                records:records
            })
        }else{
            message.error("记录获取失败")
        }
    },1000);

    componentDidMount() {
        this.getRecord();
        this.getTime()
    }

    render() {
        const {records} = this.state;
        return(
            <div className="record">
                <h1 style={{fontSize:35,marginBottom:2,color:'orange'}}>签 到 记 录</h1>
                <Table
                    bordered={true}
                    rowKey='id'
                    dataSource={records}
                    columns={this.columns}
                    pagination={false}
                />
            </div>

        )
    }
}

