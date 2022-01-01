import React, { Fragment, useEffect } from 'react';
import {useSelector} from 'react-redux'
import {  useHistory, useParams } from 'react-router';
import { useTopic } from '../../store/action';
import { Alert } from 'antd';
import Details from './details';
import Replies from './replies';
function TopicPage() {

  let getData = useTopic()
  let {id} = useParams()
  let history = useHistory()
  let {loading,data,isError,err_msg} = useSelector(state=>state.topic)
  useEffect(()=>{
    getData(id)
  },[id]);
    return (
      <div id="topic">
          {
          isError?(<Alert   
          closable
          message={"请求出错"}
          type="error"
          description={
            <Fragment>
              <p>{err_msg}</p>
              <p>点击关闭按钮返回上一页</p>
            </Fragment>
          }
          afterClose={()=>{
              history.goBack()
          }}
          />):(<Fragment>
            <Details loading={loading} data={data}/>
            <Replies loading={loading} data={data.replies}/>
          </Fragment>)}
      </div>
    );
  }
  
  export default TopicPage;
  