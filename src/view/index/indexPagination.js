import { List, Pagination } from 'antd';
import React from 'react';
import { Link,useLocation } from 'react-router-dom';
import { types } from '../../router';
import qs from 'qs'

export default function IndexPagination(props){

    let {search} = useLocation();
    let {tab="all",page=1} = qs.parse(search.substr(1))

    return(
        <div className="index-pagination">
            <Pagination 
            defaultPageSize={20}
            current={page-0}
            total={300}
           
            itemRender={(page,type)=>{
                
                switch(type){

                    case "page" :
                        return <Link to={`/?tab=${tab}&page=${page}`}>{page}</Link>

                    case "prev" :
                        return <Link to={`/?tab=${tab}&page=${page}`}>{"<"}</Link>
                    case "next" :
                            return <Link to={`/?tab=${tab}&page=${page}`}>{">"}</Link>
                     default :
                                return <Link to={`/?tab=${tab}&page=${page}`}>{"..."}</Link>
                }

            }}
            />
        </div>
    )
}