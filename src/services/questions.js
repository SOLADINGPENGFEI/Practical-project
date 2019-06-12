import request from '../utils/request';

//添加试卷接口
export function login(parmas){
    return request({
        url:'/exam/questions',
        method:'POST',
        data:parmas
    })
}

