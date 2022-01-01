import { Card,Avatar } from "antd";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import FormNow from "../../component/fromnow";
import TopicsList from "../../component/topicslist";
import { useUser } from "../../store/action";
import { UserOutlined } from '@ant-design/icons';

function UserPage() {

  let {loginname} = useParams();
  let getData = useUser();
  let {data,loading} = useSelector(state=>state.user);
  let {recent_replies=[],recent_topics=[],avatar_url,create_at,githubUsername,score} = data
 
  useEffect(()=>{
      getData(loginname)
  },[loginname])

    return (
      <div  className="user_page">
          <Card loading={loading}
                className="user-details"
          >

            <Avatar
              size={64}
              icon={<UserOutlined />}
              src={avatar_url}
              />
            
            <p style={{marginTop:20}}> 用户名:{loginname}{"     "}注册时间:{<FormNow date={create_at}/>}{"    "} 积分:{score}</p> 
            <p>github:<a href= "_blank">https://github.com/{githubUsername}</a ></p >

          </Card>

          <Card loading={loading}
                title={"最近创建话题"}
                type={"inner"}
          >
            <TopicsList
              loading={loading}
              data={recent_topics}
            />
          </Card>


          <Card loading={loading}
                title={"最近参与的话题"}
                type={"inner"}
          >
            <TopicsList
              loading={loading}
              data={recent_replies}
            />
          </Card>
         
      </div>
    );
  }
  
  export default UserPage;
  