import React,{Component} from 'react';
import './inform.less'
import {reqGetInform} from "../../api";
import {message} from "antd";
import storageUtils from "../../utils/storageUtils";
export default class Inform extends Component{
    state = {
        inform:[{}],
    }
    componentDidMount() {
       this.getInform()
    }

    getInform = async () => {

        const request = await reqGetInform(storageUtils.getPlace());
        if(request.error_code === 17){
            const inform = request.data;
            this.setState({
                inform:inform
            })

        }else{
            message.error(request.msg);
        }
    }
    render() {
        const {inform} = this.state;
        const inform1 = inform[0].content;
        return(
            <div className='inform'>
                <div className='inform-content'>
                    {/*<span dangerouslySetInnerHTML={{__html: html}}></span>*/}
                    <span > <h1 style={{size:20}}>{inform1}</h1> </span>
                </div>

            </div>
        )
    }
}