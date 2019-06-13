import  {addQuestion,examType,getQuestionsType,getSubject} from '../services/index'
// import {setToken, getToken} from '@/utils/user'

export default {
    // 命名空间
    namespace: 'exam',
  
    // 模块内部的状态
    state: {
      //  data: {}
    },
  
    subscriptions: {
      setup({ dispatch, history }) {  // eslint-disable-line
      },
    },
  
    // 异步操作
    effects: {
      *examType({payload},{call,put}) {
            let data = yield call(examType)
            console.log('data...',data)
            yield put({
              type: 'getexamType',
              data
            })
      }
    },
  
    // 同步操作
    reducers: {
      getexamType(state,{data}) {
        return { ...state,data};
      },
    },
  
  };
  