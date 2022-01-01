import { Card,List,Comment ,Avatar} from 'antd';
import { UserOutlined } from '@ant-design/icons';
import React from 'react';
import { Content } from 'antd/lib/layout/layout';
import FormNow from '../../component/fromnow';
import { Link } from 'react-router-dom';


export default function Replies(props){

    const {loading,data=[]} =props
    data.reverse();

    return(
        <Card title="评论列表"
              loading={loading}
              type="inner"
        >
            <List
            dataSource={data}
            renderItem={(itemData)=>{
                let {author,content,create_at} = itemData
                return <List.Item><Comment
                    author={<Link to={`/user/${author.loginname}`}>{author.loginname}</Link>}
                    avatar={<Avatar 
                        icon={<UserOutlined />}
                        src={author.avatar_url} 
                        title={author.loginname}/>
                    }
                    content={<div dangerouslySetInnerHTML={{__html:content}}>
                        
                    </div>}
                    datetime={<time>发表于: {<FormNow date={create_at} />}</time>}
                />
               </List.Item> 
            }}

            pagination={
                {simple:true}
            }

            />

        </Card>
    )
}