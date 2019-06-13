import React, { Component } from 'react';
import {connect} from 'dva'
import { Table } from 'antd';

class questionType extends Component {

    state = { 
       
     }
     
    render() {
        const {typeData} = this.props
        console.log(typeData)
          const columns = [
            {
              title: '类型ID',
              dataIndex: 'exam_id',
              key: 'exam_id',
            },
            {
              title: '类型名称',
              dataIndex: 'exam_name',
              key: 'exam_name',
            },
            {
              title: '操作',
              dataIndex: 'action',
              key: 'action',
            },
          ];
        return (
        <Table  columns={columns} 
        dataSource={typeData?typeData.data:null} />
        );
    }
    componentDidMount() {
        this.props.getType()
    }
}
const mapState = state => {
    return state.exam
}
const mapDispatch = dispatch => {
    return {
        getType() {
            dispatch({
                type: 'exam/typeQuestion'
            })
        }
    }
}
export default connect(mapState,mapDispatch)(questionType);