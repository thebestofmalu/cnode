import React, { useEffect } from 'react';
import IndexNav from "./indexNav";
import { useSelector} from 'react-redux'
import TopicsList from '../../component/topicslist'
import { useTopicsList } from "../../store/action";
import qs from 'qs'
import { useLocation } from 'react-router-dom';
import IndexPagination from './indexPagination';

function IndexPage(props) {

  let {data,loading} = useSelector(state=>state.topics)
  let getData = useTopicsList();
  let {search } = useLocation() 
  let {tab,page} = qs.parse(search.substr(1));
  useEffect( ()=>{
    //console.log(11);
      getData(tab,page);
  },[tab,page])
  
  return (
      <div >
          <IndexNav/>
          <TopicsList data={data} 
                      loading={loading}/>
          {loading?"":<IndexPagination/>}  
      </div>
    );
  }
  
  export default IndexPage;
  