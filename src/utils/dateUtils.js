/*
格式化日期
 */

export function formateDate(time) {
    if(!time) return '';
    let date = new Date(time);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    //如果是单个数，则前面补0
    hours  = hours<10  ? "0"+hours : hours;
    minutes = minutes<10 ? "0"+minutes : minutes;
    seconds = seconds<10 ? "0"+seconds : seconds;
    return hours + ':' + minutes + ':' + seconds
}


export function formateDate1(time) {
    if(!time) return ''
    let date = new Date(time)
    let hours = date.getHours()
    let minutes = date.getMinutes()
    hours  = hours<10  ? "0"+hours : hours;
    minutes = minutes<10 ? "0"+minutes : minutes;
    return hours + ':' + minutes
}

