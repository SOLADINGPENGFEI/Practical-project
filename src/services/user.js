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