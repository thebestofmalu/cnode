import { Affix, Col, Layout, Row ,Menu} from 'antd';
import { Link ,useLocation} from 'react-router-dom';
import React from 'react';
import {nav} from '../router/index'
import MenuItem from 'antd/lib/menu/MenuItem';


//首页Header组件

function Header(props){

    let {pathname} = useLocation(); //useLocation获取url，解构获得pathname
    let activeIndex = nav.findIndex((navData)=>{
        return pathname === navData.to
    })
    return(
        <Affix offsetTop={0}>
            <Layout.Header id="header">
                <div className="warp"></div>
                <Row>
                    <Col xs={6}
                         sm={4}
                        
                    >
                        <h1 className="logo"><Link to="/">CNODE</Link></h1>
                    </Col>
                    <Col xs={18}
                         sm={20}
                    >
                        <Menu mode="horizontal" theme="dark" selectedKeys={[activeIndex+""]}>

                            {nav.map((navData,index)=>{
                                return <MenuItem key={index}><Link to={navData.to}>{navData.txt}</Link></MenuItem>
                            })}
                            {/* <Menu.Item key="0">首页</Menu.Item>
                            <Menu.Item key="1">新手入门</Menu.Item>
                            <Menu.Item key="2">关于</Menu.Item> */}
                        </Menu>
                    </Col>
                </Row>
           </Layout.Header>
        </Affix>
    )
}

export default Header