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

//添加用户接口
export function userAdd(params){
  return request({
      url:'/user',
      method:'POST',
      data:params
  })
}

//更新用户接口
export function userUpdate(params){
  return request({
      url:'/user/user',
      method:'PUT',
      data:params
  })
}

//添加身份接口
export function addIdentity(params){
  return request({
      url:'/user/identity/edit',
      method:'GET'
  })
}

//给身份设定api接口权限接口
export function setIdentityApi(params){
  return request({
      url:'/user/setIdentityApi',
      method:'POST',
      data:params
  })
}

//添加视图权限接口
export function authorityView(params){
  return request({
      url:'/user/authorityView/edit',
      method:'GET'
  })
}

//给身份设定视图权限接口
export function setIdentityView(params){
  return request({
      url:'/user/setIdentityView',
      method:'POST',
      data:params
  })
}
//展示用户接口
export function userView(){
  return request({
      url:'/user/user',
      method:'GET'
  })
}

//获取考试类型

export function examType() {
  return request({
    url:'/exam/examType',
    method:'GET'
  })
}
//获取试题类型
export function getQuestionsType() {
  return request({
    url:'/exam/getQuestionsType',
    method:'GET'
  })
}
//获取所有的课程
export function getSubject() {
  return request({
    url:'/exam/subject',
    method:'GET'
  })
}
//添加试题
export function addQuestion(params) {
  return request({
    url: '/exam/questions',
    method: 'POST',
    data: params
  })
}

//试题分类
export function typeQuestion() {
  return request({
    url: '/exam/examType',
    method: 'GET'
  })
}

//查看试题
export function viewQuestion() {
  return request({
    url: '/exam/question/new',
    method: 'GET'
  })
}

