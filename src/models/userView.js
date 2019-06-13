import  {userView} from '../services/index'

export default {
    // 命名空间
    namespace: 'identity',
  
    // 模块内部的状态
    state: {
        index:0,
        dataView :[{
            title: '用户数据'
          }, {
            title: '身份数据'
          }, {
            title: 'api接口权限'
          }, {
            title: '身份和api接口关系'
          }, {
            title: '视口接口权限'
          }, {
            title: '身份和视图权限关系'
          }]
    },
  
    subscriptions: {
      setup({ dispatch, history }) {  // eslint-disable-line
      },
    },
  
    // 异步操作
    effects: {
      *userView({payload},{call,put}){
          let data=yield call(userView)
          console.log('data...',data)
          yield put ({
              type:'userViews',
              data:data.data
          })
      }
      
    },
  
    // 同步操作
    reducers: {
        userViews(state,{data}) {
        return { ...state,data:data};
      },
    },
  
  };
  