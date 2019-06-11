import request from '../utils/request';

export function query() {
  return request('/api/users');
}

//登录接口
export function login(params) {
  return request({
    url:'/user/login',
    method:'POST',
    data: params
  })
}