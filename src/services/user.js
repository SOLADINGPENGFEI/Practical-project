import request from '../utils/request';

//登录接口
export function login(parmas){
    return request({
        url:'/user/login',
        method:'POST',
        data:parmas
    })
}