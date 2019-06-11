import {login} from '../services/index'
export default {
    // 命名空间
    namespace: 'user',
  
    // 模块内部的状态
    state: {
      
    },
  
    subscriptions: {
      setup({ dispatch, history }) {  // eslint-disable-line
      },
    },
  
    // 异步操作
    effects: {
      *login({payload},{call, put}) {
        // console.log('payload...', payload, login)
        let data = yield call(login,payload)
        console.log('data...',data)
        yield put({
          type: 'save',
          data
        })
      },
      *fetch({ payload }, { call, put }) {  // eslint-disable-line
        // yield put({ type: 'save' });
      },
    },
  
    // 同步操作
    reducers: {
      'save'(state, {action:payload}) {
        console.log('state...',state)
        console.log('action...',payload)
        return {
            ...state,
            ...payload
        }
      },
      
    },
  
  };
  