import React, { useState,useEffect } from 'react'
import { connect } from 'dva'
import styles from './index.scss';
import { Form, Icon, Input, Button, Checkbox } from 'antd';

function LoginPage(props){
    console.log('props...',props)
    let {login}=props
    useEffect(()=>{
        login({
            user_name:'chenmanjie',
            user_pwd:'Chenmanjie123!'
        })
    },[]);

    //处理表单提交
    let handleSubmit = e => {
        e.preventDefault();
            props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
      };
    //表单校验
    const { getFieldDecorator } = props.form;
    return (
        <div className="login">
        <Form onSubmit={handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: '请输入你的用户名!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="请输入用户名"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入你的密码!' },
            { pattern: /^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)])+$)^.{8,16}$/, message: '密码校验失败!密码包含大小写字母、数字、特殊符号!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="请输入用户密码"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>记住密码</Checkbox>)}
          <a className="login-form-forgot" href="">
            忘记密码
          </a>
          <Button type="primary" htmlType="submit" className="login-form-button">
            登录
          </Button>
        </Form.Item>
      </Form>
      </div>
    )
}

//props的类型检查
LoginPage.propTypes={}
//props的默认值
LoginPage.defaultProps={}


const mapStateToProps = state => {
    return {}
}

const mapDispatchToProps = dispatch => {
    return {
        login(payload) {
            dispatch({
                type: 'user/login',
                payload
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(LoginPage))