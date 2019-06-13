import React, {useEffect} from 'react';
import { connect } from 'dva';
import styles from './index.scss';

  function UserView(props){  
     return <div className=''>
       <h2 className={styles.title}>用户展示</h2>
        
    </div> 
}
  //props的类型检查
  UserView.propTypes={

  }
  //props的默认值
  UserView.defaultProps={
      
  }
  const mapStateToProps=state=>{
      // console.log("state",state)
      return{
       
      }
  }
  const mapDispatchToProps=dispatch=>{
      return{
       
      }
  }
export default connect(mapStateToProps,mapDispatchToProps)(UserView)