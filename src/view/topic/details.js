import React, { Fragment } from 'react';
import { Card } from 'antd';
import TopicTag from '../../component/topicTag';
import {Link} from 'react-router-dom'
import FormNow from '../../component/fromnow';

export default  function  Details(props){
    let {data,loading} = props
    let {author,content,create_at,good,top,tab,title,visit_count} =data
    return <Card
       bordered
       loading={loading}
       title={<Fragment
       >
        <h1><TopicTag tab={top?"top":(good?"good":tab)}/>{title}</h1>
            <p> {"   "}作者:<Link to={`/user/${author.loginname}`}>{author.loginname}</Link>{"   "}创建时间:<FormNow date={create_at}/>{"   "}浏览人数:{visit_count}</p >
       </Fragment>}
       type="inner"
       >
        <div dangerouslySetInnerHTML={{__html:content}}></div>
        
       </Card>
    
}