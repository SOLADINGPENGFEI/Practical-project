import  {
  addQuestion,
  examType,
  questionsType,
  subject,
  typeQuestion,
  allQuestion} from '../services/index'
// import {setToken, getToken} from '@/utils/user'

export default {
    // 命名空间
    namespace: 'exam',
  
    // 模块内部的状态
    state: {
      
    },
  
    subscriptions: {
      setup({ dispatch, history }) {  // eslint-disable-line
      },
    },
  
    // 异步操作
    effects: {
      *examType({payload},{call,put}) {
            let data = yield call(examType)
            // console.log('data...',data)
            yield put({
              type: 'getexamType',
              data
            })
      },
      *subject({payload},{call,put}) {
        let subdata = yield call(subject)
        // console.log('subdata...',subdata)
        yield put({
          type: 'getSubject',
          subdata
        })
      },
      *questionsType({payload},{call,put}) {
        let questionData = yield call(questionsType)
        // console.log('questionsType...',questionData)
        yield put({
          type: 'getquestionsType',
          questionData
        })
      },
      *addQuestion({payload},{call,put}) {
        let addData = yield call(addQuestion)
        // console.log('addData...',addData)
        yield put({
          type:'addquestion',
          payload:addData
        })
      },
      *typeQuestion({payload},{call,put}) {
        let typeData = yield call(typeQuestion)
          // console.log('typeData...',typeData)
          yield put({
            type: 'Type',
            typeData
          })
      },
      *allQuestion({pauload},{call,put}) {
        let AllData = yield call(allQuestion)
          console.log('AllData...',AllData)
          yield put({
            type: 'getAllData',
            AllData
          })
      }
    },
  
    // 同步操作
    reducers: {
      getexamType(state,{data}) {
        return { ...state,data};
      },
      getSubject(state,{subdata}) {
        return {...state, subdata}
      },
      getquestionsType(state,{questionData}) {
        return {...state,questionData}
      },
      addquestion(state, {payload}) {
        return {...state,payload}
      },
      Type(state, {typeData}) {
        return {...state,typeData}
      },
      getAllData(state,{AllData}) {
        return {...state, AllData}
      }
    },
  
  };
  