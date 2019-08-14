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

export const reqLogin = (username,password) => ajax(BASE+'/CodingForFaceID_war/loginServlet', {username,password}, 'POST');

//获取公告
export const reqGetInform = (place) => ajax(BASE + '/CodingForFaceID_war/getNoticeMessageServlet',{place},'POST');

//获取前三名接口
export const reqGetFirstRank = (place) => ajax(BASE + '/CodingForFaceID_war/topThreeServlet',{place},'POST');

//获取后三名接口
export const reqGetLastRank = (place) => ajax(BASE + '/CodingForFaceID_war/reciprocalThreeServlet',{place},'POST');

//获取位置接口
export const reqGetSeat = () => ajax(BASE + '/CodingForFaceID_war/getSeatMap');

//点击签到接口
export const reqSign = (memberName) => ajax(BASE + '/CodingForFaceID_war/clickSignInServlet',{memberName},'POST');

//点击签退接口
export const reqSignExit = (memberName) => ajax(BASE + '/CodingForFaceID_war/clickSignOutServlet',{memberName},'POST');