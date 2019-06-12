import React from 'react'
import {Route,Switch} from 'dva/router'
import styles from './index.scss'
import {Layout} from 'antd';
import Menu from '@/components/Menu/Menu'

const { Header, Content, Sider } = Layout;

function IndexPage(props){
    return <Layout className={styles.container}>
    <Header className={styles.header}>
        <p>header</p>
    </Header>
    <Layout>
        <Sider className={styles.sider}>
            <Menu/>
        </Sider>
    </Layout>
      <Content>
          <Switch>
              <Route path='/questions/add' component={null}></Route>
              <Route path='/questions/type' component={null}></Route>
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