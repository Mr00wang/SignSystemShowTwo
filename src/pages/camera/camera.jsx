import React,{Component} from 'react';
import './camera.less'
import {Button, message,Modal} from "antd";
import {reqFaceSign, reqFaceSignExit} from "../../api";
import storageUtils from "../../utils/storageUtils";


var mediaStreamTrack = null;
export default class Camera extends Component{
   /* state = {
        mediaStreamTrack: null,
    };*/

    /**
     * 打开摄像头
     */
    openMedia = () => {


        // 老的浏览器可能根本没有实现 mediaDevices，所以我们可以先设置一个空的对象
        if (navigator.mediaDevices === undefined) {
            navigator.mediaDevices = {};
        }
        if (navigator.mediaDevices.getUserMedia === undefined) {
            navigator.mediaDevices.getUserMedia = function (constraints) {
                // 首先，如果有getUserMedia的话，就获得它
                const getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;

                // 一些浏览器根本没实现它 - 那么就返回一个error到promise的reject来保持一个统一的接口
                if (!getUserMedia) {
                    return Promise.reject(new Error('getUserMedia is not implemented in this browser'));
                }

                // 否则，为老的navigator.getUserMedia方法包裹一个Promise
                return new Promise(function (resolve, reject) {
                    getUserMedia.call(navigator, constraints, resolve, reject);
                });
            }
        }
        const constraints = {
            video: { width: 450, height: 280 },
            audio: false
        };
        //获得video摄像头
        let video = document.getElementById('video');
        let promise = navigator.mediaDevices.getUserMedia(constraints);
        promise.then((mediaStream) => {
            mediaStreamTrack = typeof mediaStream.stop === 'function' ? mediaStream : mediaStream.getTracks()[1];
            video.srcObject = mediaStream;
            video.play();
        });
    };

    /**
     * 扫脸签退
     */
    signOut = () => {
        Modal.confirm({
            title: `确认签退吗?`,
            onOk: async () => {
               // message.success("签退成功！")
                const result = await reqFaceSignExit("confirmation")
                if(result.error_code===37){
                    message.success(result.msg);
                }else{
                    message.error(result.msg);
                }
            }
        })
    }
    takePhoto;

    /**
     * 拍照
     */
    time = setInterval(this.takePhoto = async () => {
        //获得Canvas对象
        let video = document.getElementById('video');
        let canvas = document.getElementById('canvas');
        let ctx = canvas.getContext('2d');

        ctx.drawImage(video, 0, 0, 300, 200);

        let imgData = document.getElementById('canvas').toDataURL("image/type");
        const result = await reqFaceSign(storageUtils.getPlace(),imgData);
        //console.log(result.data);
       // console.log(result.error_code);
        if(result.error_code===32){
            //message.success(result.msg)
        }else if(result.error_code===33){
            //message.success(result.msg)
        }else if(result.error_code===34){
            this.signOut();
            //message.success(result.msg)

        }else if(result.error_code===35){
            message.success(result.msg)
        }else if(result.error_code===36){
            message.success(result.msg)
        }
        /*
        // toDataURL  ---  可传入'image/png'---默认, 'image/jpeg'
        let img = document.getElementById('canvas').toDataURL();
        // 这里的img就是得到的图片
        console.log('img-----', img);
        document.getElementById('imgTag').src=img;
        */
    },5000);
    /**
     * 关闭摄像头
     */
    closeMedia = () => {
        mediaStreamTrack.stop()
      //   let status = 0;
      // this.state.mediaStreamTrack === null ? status=0 : status=1;
      // if(status===1){
      //     this.state.mediaStreamTrack.stop()
      // }
    };

    /**
     * 保存图片
     */
    saveCapture = () => {
        //imgData =canvas.toDataURL({format: 'png', quality:1, width:320, height:240});
        // var oCanvas = document.getElementById("canvas");
        // Canvas2Image.saveAsImage(oCanvas, 480
        // , 320, "png", "image1");
        //图片导出为 jpg 格式

        let type = 'jpg';
        let imgData = document.getElementById('canvas').toDataURL(type);
        console.log('hahha:'+imgData);
        /**
         * 获取mimeType
         * @param  {String} type the old mime-type
         * @return the new mime-type
         */
        let _fixType = function(type) {
            type = type.toLowerCase().replace(/jpg/i, 'jpeg');
            let r = type.match(/png|jpeg|bmp|gif/)[0];
            return 'image/' + r;
        };

        // 加工image data，替换mime type
        imgData = imgData.replace(_fixType(type),'image/octet-stream');

        /**
         * 在本地进行文件保存
         * @param  {String} data     要保存到本地的图片数据
         * @param  {String} filename 文件名
         */
        let saveFile = function(data, filename){
            let save_link = document.createElementNS('http://www.w3.org/1999/xhtml', 'a');
            save_link.href = data;
            save_link.download = filename;

            let event = document.createEvent('MouseEvents');
            event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
            save_link.dispatchEvent(event);
        };

        // 下载后的文件名
        let filename = 'image.' + type;
        // download
        saveFile(imgData,filename);
    };
    render() {
        return(
            <div className="camera" >
                <Button type="primary" onClick={this.openMedia}>开启摄像头</Button>
                {/*<Button type="primary" onClick={this.closeMedia}>关闭摄像头</Button>*/}
                <Button type="primary" onClick={this.takePhoto}>拍照</Button>
                <Button type="primary" onClick={this.closeMedia}>关闭摄像头</Button>
                <video id="video" width="450px" height="280px" autoPlay="autoplay"/>
                <canvas id="canvas" width="450px" height="280px" />


            </div>
        )
    }
}