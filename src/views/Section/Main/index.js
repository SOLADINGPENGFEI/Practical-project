import React, { Component } from 'react';
import MainComp from '@/components/Menu'

import style from './Main.css';
import { Menu, Dropdown, Icon, Layout,Breadcrumb } from 'antd';
import { Route,Switch } from 'dva/router'
import Addquestion from '../Question/Addquestion/index'
import UserAdd from '@/views/Section/User/UserAdd'
import UserView from '@/views/Section/User/UserView'

const {Header, Content, Sider } = Layout

class Main extends Component {
   state = {
    collapsed: false,
   }
   toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  render() {
    const menu = (
      <Menu style={{marginTop:"30px"}}>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
            个人中心
          </a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
            我的班级
          </a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
            设置
          </a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
            退出登录
          </a>
        </Menu.Item>
      </Menu>
    );
    return (
      <Layout className={style.main} style={{width:"100%",height:"100%"}}>
          <Header className={style.header}>
               <img src="/public/bwLOGO.png" alt=""/>
               <div className={style.person_data}>
                  <Dropdown overlay={menu}>
                      <a className="ant-dropdown-link" href="javascript:;" style={{color:"#000"}}>
                      <img src="/public/head.jpg" alt=""/>
                        个人信息 
                        <Icon type="down" />
                      </a>
                  </Dropdown>
               </div>
          </Header>
        <Layout className={style.list}>
            <Sider style={{ width: 200,height:"100%"}}>
                <MainComp />
            </Sider>
          <Content style={{ padding: '0 30px' }}>
            <Switch>
                <Route path='/main/question/add' component={Addquestion}></Route>
                <Route path='/main/question/type' component={Addquestion}></Route>
                <Route path='/main/question/view' component={Addquestion}></Route>
                <Route path='/main/user/add' component={UserAdd}></Route>
                <Route path='/main/user/view' component={UserView}></Route>
                <Route path='/main/exam/add' component={Addquestion}></Route>
                <Route path='/main/exam/manage' component={Addquestion}></Route>
                <Route path='/main/class/manage' component={Addquestion}></Route>
                <Route path='/main/class/classroomManage' component={Addquestion}></Route>
                <Route path='/main/class/studentManage' component={Addquestion}></Route>
                <Route path='/main/paper/approval' component={Addquestion}></Route>
            </Switch>
          </Content>
        </Layout>
      </Layout>
    )
  }
}



Main.propTypes = {

};

export default Main;
