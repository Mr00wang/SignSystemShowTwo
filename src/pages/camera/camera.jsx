import React,{Component} from 'react';
import './camera.less'
import {Button, message,Modal} from "antd";
import {reqFaceSign, reqFaceSignExit} from "../../api";
import storageUtils from "../../utils/storageUtils";


var mediaStreamTrack ;
export default class Camera extends Component{
    state = {
        Status: 0, //状态为0确认签退没有显示，状态为1确认签退有显示
        CameraMedia: 0,//状态为0为未打开摄像头，状态为1为打开摄像头

    };
    /**
     * 打开摄像头
     */
    openMedia = () => {

        // 老的浏览器可能根本没有实现 mediaDevices，所以我们可以先设置一个空的对象
        if (navigator.mediaDevices === undefined) {
            navigator.mediaDevices = {};
        }

        // 一些浏览器部分支持 mediaDevices。我们不能直接给对象设置 getUserMedia
        // 因为这样可能会覆盖已有的属性。这里我们只会在没有getUserMedia属性的时候添加它。
        if (navigator.mediaDevices.getUserMedia === undefined) {
            navigator.mediaDevices.getUserMedia = function(constraints) {
                // 首先，如果有getUserMedia的话，就获得它
                var getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

                // 一些浏览器根本没实现它 - 那么就返回一个error到promise的reject来保持一个统一的接口
                if (!getUserMedia) {
                    return Promise.reject(new Error('getUserMedia is not implemented in this browser'));
                }

                // 否则，为老的navigator.getUserMedia方法包裹一个Promise
                return new Promise(function(resolve, reject) {
                    getUserMedia.call(navigator, constraints, resolve, reject);
                });
            }
        }
        const constraints = {
            video: { width: 2400, height: 1400 },
            audio: false,
        };
        if(this.state.CameraMedia === 0)
        {
            this.setState({
                CameraMedia:1,
            });
            //获得video摄像头
            var video = document.getElementById('video');
            var promise = navigator.mediaDevices.getUserMedia(constraints);
            promise.then((mediaStream) => {

                video.srcObject = mediaStream;

                video.play();
            });

            //拍照
            this.UseTakePhoto();
        }else{
            this.setState({
                CameraMedia:0,
            });
            // window.opener.history.go(0);
            // window.opener.location.reload()
            // location.replace("http://10.85.15.27:3001");
            /*var promise1 = navigator.mediaDevices.getUserMedia(constraints);
            promise1.then((videoElem) => {

                let stream = videoElem.srcObject;
                let tracks = stream.getTracks();
                tracks.forEach(function(track) {
                    track.stop();
                });
                videoElem.srcObject = null;
            });*/


        }

    };

    /**
     * 休眠
     */
    Sleep = (time) => {
        const start=Date.now(),expire=start+time;
        while(Date.now()<expire){}
        return 0;
    };

    /**
     * 扫脸签退
     */
    signOut = () => {
        this.setState({Status:1});
        Modal.confirm({
            title: `确认签退吗?`,
            onOk: async () => {
               // message.success("签退成功！")
                const result = await reqFaceSignExit("confirmation");
                if(result.error_code===37){
                    message.success(result.msg +` 😘`);

                    this.setState({Status:0});

                    //this.Sleep(2000);

                }else{
                    message.error(result.msg);
                }
            },
            onCancel: async () => {
                this.setState({Status:0});
            }
        })
    };


    /**
     * 拍照
     */
    UseTakePhoto = () => {
      this.time = setInterval(this.takePhoto,5000);
    };

    takePhoto = async () => {
        if(this.state.Status === 1){
            // message.success("此时不能签到")
        }else {
            //获得Canvas对象
            let video = document.getElementById('video');
            let canvas = document.getElementById('canvas');
            let ctx = canvas.getContext('2d');

            ctx.drawImage(video, 0, 0, 430, 430);

            let imgData = canvas.toDataURL("image/type");
            const result = await reqFaceSign(storageUtils.getPlace(), imgData);

            if (result.error_code === 32) {
               // message.success(result.msg)
            } else if (result.error_code === 33) {
                message.success(result.msg);
            } else if (result.error_code === 34) {
                if (this.state.Status === 0) {
                    this.signOut();
                    /*console.log("休眠5s");
                    this.Sleep(5000);
                    console.log("休眠5sok");*/
                }
            } else if (result.error_code === 35) {
                message.success(result.msg+`😘`);
                //this.Sleep(3000);
               // message.success("此时暂停5s😘");

            } else if (result.error_code === 36) {
                message.success(result.msg);
            }
        }
    };

    /**
     * 关闭摄像头
     */
    closeMedia = () => {
        console.log("1"+mediaStreamTrack);
        mediaStreamTrack && mediaStreamTrack.stop();
        console.log("2"+mediaStreamTrack);
        // mediaStreamTrack = null;
        console.log("3"+mediaStreamTrack);
        clearInterval(this.time);

    };

    render() {
        return(
            <div className="camera" onClick={this.openMedia}>
                {/*<Button type="primary" onClick={this.openMedia}>开启摄像头</Button>*/}
                {/*<Button type="primary" onClick={this.closeMedia}>关闭摄像头</Button>*/}
                {/*<Button type="primary" onClick={this.takePhoto}>拍照</Button>*/}
                {/*<Button type="primary" onClick={this.closeMedia}>关闭摄像头</Button>*/}
                <video id="video" autoPlay="autoplay" style={{width:"100%", height:"100%" ,objectFit:"fill",borderRadius:"50%" ,border:"3px solid #fff"}}/>
                <canvas id="canvas" width="450px" height="280px" />
            </div>
        )
    }
}