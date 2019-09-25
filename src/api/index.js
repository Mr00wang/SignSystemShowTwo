/*
要求： 能根据接口文档定义接口请求
包含应用中所有接口请求函数的模块
每个函数的返回值都是promise
 */

import ajax from "./ajax";

// const BASE = 'http://localhost:5000'
const BASE = '';
//登陆接口

/*
export function reqLogin() {
    return ajax('/login', {username,password}, 'POST')
}*/

export const reqLogin = (username,password) => ajax(BASE+'/faceid_war/loginServlet', {username,password}, 'POST');

//获取公告
export const reqGetInform = (place) => ajax(BASE + '/faceid_war/getNoticeMessageServlet',{place},'POST');

//获取前三名接口
export const reqGetFirstRank = (place) => ajax(BASE + '/faceid_war/topThreeServlet',{place},'POST');

//获取后三名接口
export const reqGetLastRank = (place) => ajax(BASE + '/faceid_war/reciprocalThreeServlet',{place},'POST');

//获取位置接口
export const reqGetSeat = () => ajax(BASE + '/faceid_war/getSeatMap');

//点击签到接口
export const reqSign = (memberName) => ajax(BASE + '/faceid_war/clickSignInServlet',{memberName},'POST');

//点击签退接口
export const reqSignExit = (memberName) => ajax(BASE + '/faceid_war/clickSignOutServlet',{memberName},'POST');

//扫脸签到接口
export const reqFaceSign = (place,base64) => ajax(BASE + '/faceid_war/judgingFaceExistAndSignInOrSignOutServlet',{place,base64},'POST');

//扫脸签退接口
export const reqFaceSignExit = (ConfirmationOrCancellation) => ajax(BASE + '/faceid_war/judgingMemberSingOut',{ConfirmationOrCancellation},'POST');

//定点签到接口
export const reqTimeExit = () => ajax(BASE + '/faceid_war/graphPersonSignTimes');

//签到记录接口
export const reqGetRecord = (place) => ajax(BASE + '/faceid_war/fiveRecord',{place},'POST');