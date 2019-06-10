import React, { Component } from 'react';
import style from './Main.css';
import { Menu, Dropdown, Icon, Button } from 'antd';


import 'antd/dist/antd.css';
const { SubMenu }  = Menu;
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
      <Menu>
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
      <div className={style.main} style={{width:"100%",height:"100%"}}>
          <div className={style.header}>
               <img src="/public/bwLOGO.png" alt=""/>
               <div>
                  <img src="/public/head.jpg" alt=""/>
                  <Dropdown overlay={menu}>
                      <a className="ant-dropdown-link" href="#">
                        个人信息 <Icon type="down" />
                      </a>
                  </Dropdown>
               </div>
          </div>
            <div className={style.list}>
            <div style={{ width: 200,height:"100%"}}>
              <Menu
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                theme="dark"
                inlineCollapsed={this.state.collapsed}
              >
                <SubMenu
                  key="sub1"
                  title={
                    <span>
                      <Icon type="appstore" />
                      <span>试卷管理</span>
                    </span>
                  }
                >
                  <Menu.Item key="1">添加试题</Menu.Item>
                  <Menu.Item key="2">试题分类</Menu.Item>
                  <Menu.Item key="3">查看试题</Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub2"
                  title={
                    <span>
                      <Icon type="appstore" />
                      <span>用户管理</span>
                    </span>
                  }
                >
                  <Menu.Item key="4">添加用户</Menu.Item>
                  <Menu.Item key="5">用户展示</Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub3"
                  title={
                    <span>
                      <Icon type="appstore" />
                      <span>考试管理</span>
                    </span>
                  }
                >
                  <Menu.Item key="6">添加考试</Menu.Item>
                  <Menu.Item key="7">试卷管理</Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub4"
                  title={
                    <span>
                      <Icon type="mail" />
                      <span>班级管理</span>
                    </span>
                  }
                >
                  <Menu.Item key="8">班级管理</Menu.Item>
                  <Menu.Item key="9">教室管理</Menu.Item>
                  <Menu.Item key="10">学生管理</Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub5"
                  title={
                    <span>
                      <Icon type="appstore" />
                      <span>阅卷管理</span>
                    </span>
                  }
                >
                  <Menu.Item key="11">待批班级</Menu.Item>
                </SubMenu>
              </Menu>
        </div>
        </div>
      </div>
    )
  }
}



Main.propTypes = {

};

export default Main;
