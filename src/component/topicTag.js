import React from 'react';
import {Tag} from 'antd'

/**
 * 从props的参数中，解构接受url中的tab，然后在函数中switch进行选择，其样式
 * 
 */

function setTag(tab) {

    switch(tab){
        
        case "top" :
            return <Tag className="TopicTag-tag" color="#87d068">置顶</Tag>
        case "good" :
            return <Tag className="TopicTag-tag" color="#f50">精华</Tag>
            case "share":
            return <Tag className="TopicTag-tag" color="green">分享</Tag>
        case "ask" :
            return<Tag className="TopicTag-tag" color="gold">问答</Tag>
        case "job":
            return <Tag className="TopicTag-tag" color="blue">招聘</Tag>
        case "dev":
            return <Tag className="TopicTag-tag" color="purple">测试</Tag>
        default :
            return null
    }

}

export  default function TopicTag(props){

    let {tab} = props;
    return  setTag(tab);

}