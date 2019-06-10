import React from 'react';
import { connect } from 'dva';
import Main from '../components/Main/index'
import './IndexPage.css'

function IndexPage() {
  return (
    <div className="wrap" style={{width:"100%",height:"100%"}}>
       <Main />
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
