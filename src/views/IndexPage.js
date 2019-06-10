import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import {BrowserRouter,Link} from 'dva/router'
import RouterConfig from '../router'
import Main from '../components/Main/index'
import './IndexPage.css'

function IndexPage() {
  return (
    <BrowserRouter>
        <div className={styles.index}>
      <div className={styles.login}>
      <Form className="login-form" className={styles.login_form}>
        <Form.Item>
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="请输入用户名"
            />
        </Form.Item>
        <Form.Item>
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="请输入用户密码"
            />
        </Form.Item>
        <Form.Item className={styles.form_pwd}>
          <Checkbox>记住密码</Checkbox>
          <a className="login-form-forgot" href="">忘记密码</a><br/>
        </Form.Item>
        <Link to="/main" component={Main}>
        <Button type="primary" htmlType="submit" 
        className="login-form-button" className={styles.login_form_button}
        >登录</Button>
        </Link>
      </Form>
      </div>
        
    </div>
    </BrowserRouter>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
