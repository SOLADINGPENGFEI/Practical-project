import React from 'react'
import { Route, Switch } from 'dva/router'
import styles from './index.scss'
import MyMenu from '@/components/Menu/Menu'
import { Layout, Menu, Dropdown, Icon } from 'antd';
import QuestionsAdd from '@/views/Main/Questions/Add/add.js'
import QuestionsType from '@/views/Main/Questions/Type/type.js'

const { Header, Content, Sider } = Layout;


function IndexPage(props) {
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
    return <Layout className={styles.container}>
        <Header className={styles.header}>
            <div className={styles.header_img}>
                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551624718911&di=4a7004f8d71bd8da84d4eadf1b59e689&imgtype=0&src=http%3A%2F%2Fimg105.job1001.com%2Fupload%2Falbum%2F2014-10-15%2F1413365052_95IE3msH.jpg" />
            </div>
            <div>
                <img src="https://cdn.nlark.com/yuque/0/2019/png/anonymous/1547609339813-e4e49227-157c-452d-be7e-408ca8654ffe.png?x-oss-process=image/resize,m_fill,w_48,h_48/format,png" />
                <Dropdown overlay={menu}>
                    <a className="ant-dropdown-link" href="#">
                        chenmanjie <Icon type="down" />
                    </a>

                </Dropdown>
            </div>
        </Header>
        <Layout className={styles.sider}>
            <Sider>
                <MyMenu />
            </Sider>
        </Layout>
        <Content>
            <Switch>
                <Route path='/questions/add' component={QuestionsAdd}></Route>
                <Route path='/questions/type' component={QuestionsType}></Route>
                <Route path='/questions/view' component={null}></Route>
                <Route path='/users/add' component={null}></Route>
                <Route path='/users/view' component={null}></Route>
                <Route path='/exam/add' component={null}></Route>
                <Route path='/exam/list' component={null}></Route>
                <Route path='/class/class' component={null}></Route>
                <Route path='/class/teacher' component={null}></Route>
                <Route path='/class/student' component={null}></Route>
                <Route path='/read/awit' component={null}></Route>
            </Switch>
        </Content>
    </Layout>
}

export default IndexPage;