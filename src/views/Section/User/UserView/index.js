import React, { useEffect } from 'react';
import { connect } from 'dva';
import styles from './index.scss';

function UserView(props) {
  useEffect(() => {
    props.userView()

  }, [])
  console.log(props)
  let { data, index, dataView } = props 
console.log(data,dataView)
  function clickItem(title,i){
    console.log(title,i)
    index=i;
    console.log(index)
  }

  return (<div>
    <h2 className={styles.title}>用户展示</h2>
    <div>
      <div className={styles.nav}>
        {
          dataView.map((item, i) => {
            return <span key={i} 
            onClick={()=>clickItem(item.title,index)}>{item.title}</span>
          })
        }
      </div>
      
      <div>
      <h2></h2>
        {
          data&&data.map((item, index) => {
            return <p key={index}>
              <span>{item.user_name}</span>
              <span>{item.user_pwd}</span>
            </p>
          })
        }
      </div>
    </div>

  </div>)
}
//props的类型检查
UserView.propTypes = {

}
//props的默认值
UserView.defaultProps = {

}
const mapStateToProps = state => {
  // console.log("state",state)
  return {
    ...state.identity
  }
}
const mapDispatchToProps = dispatch => {
  return {
    userView() {
      dispatch({
        type: 'identity/userView'
      })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserView)