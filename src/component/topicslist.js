import React from 'react';
import { Link} from 'react-router-dom';
import {Avatar, Col, List} from 'antd'
import { UserOutlined } from '@ant-design/icons';
import TopicTag from './topicTag';
import dayjs from "dayjs"
import FormNow from './fromnow';

var relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativeTime);
require('dayjs/locale/zh-cn')
dayjs.locale('zh-cn')

function TopicsList(props) {

    let {data , loading} = props

    return (
      <List className="topics_list"
        loading={loading}
        dataSource={data}
        renderItem = {(data,index)=>{
              // console.log(data);
              let {author,last_reply_at,good,top,tab,title,id}=data
              let {avatar_url,loginname} = author
              return <List.Item>
                  <Col xs={24}
                       md={20}
                  >
                      <Link to={`/user/${loginname}`}>
                        <Avatar 
                            icon={<UserOutlined />}
                            src={avatar_url} 
                            size={32}
                            title={loginname}/>
                        <TopicTag
                            tab={top?"top":(good?"good":tab)}
                            className="TopicTag-tag"
                        /> 
                        <Link to={`/topics/${id}`}  style={{marginLeft:10}} >{title}</Link>
                      </Link> 
                </Col>

                <Col xs={0}
                      md={4}
                      className= "from_now"
                >
                  <FormNow date={last_reply_at}/>
                </Col>
              </List.Item>
        }}
      >
      </List>
    );
  }
  
  export default TopicsList;
  