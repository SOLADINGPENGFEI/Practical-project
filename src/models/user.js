import {login} from '../services'

export default {
    //命名空间
    namespace:'user',
    //模块内部的状态
    state:{},

    subscriptions:{
        setup({dispatch,history}){

        }
    },

    //异步操作
    effects:{
        *login({payload},{call,put}){
            console.log('payload...',payload)
            let data=yield call(login);
            console.log('data...',data)
        },

        *fetch({payload},{call,put}){
            yield put({type:'save'})
        }
    },

    //同步操作
    reducers:{
        save(state,action){
            return {...state,...action.payload}
        }
    },
}