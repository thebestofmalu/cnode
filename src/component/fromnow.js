import dayjs from "dayjs"
var relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativeTime);
require('dayjs/locale/zh-cn')
dayjs.locale('zh-cn')


//时间组件
export default function FormNow(props){
    let {date} = props
    return  dayjs(date).fromNow()
}