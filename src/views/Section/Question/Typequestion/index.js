import React, { Component } from 'react';
import {connect} from 'dva'
import { Table,Button,Modal,Input } from 'antd';

class questionType extends Component {

    state = { 
       visible: false,
       columns: []
     }
     showModal = () => {
       this.setState({
         visible: true
       })
     }
     handleOk = e => {
       this.setState({
         visible: false
       })
     }
     handleCancel = e => {
       console.log(e)
       this.setState({
         visible: false
       })
     }
     handleValue = e => {
      console.log(e.target.value)
      // this.props.typeData?this.props.typeData.push({
      //     questions_type_sort:+new Date(),
      //     questions_type_text: e.target.value
      //   }):{}
      
     }
    render() {
        const {typeData} = this.props
        console.log(typeData)
          const columns = [
            {
              title: '类型ID',
              dataIndex: 'questions_type_sort',
              key: 'questions_type_sort',
            },
            {
              title: '类型名称',
              dataIndex: 'questions_type_text',
              key: 'questions_type_text',
            },
            {
              title: '操作',
              dataIndex: '',
              key: '',
            },
          ];
        return (
        <div>
          <Button type="primary" onClick={this.showModal}>添加类型</Button>
          <Modal
          title="创建新类型"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
         <Input placeholder="请输入类型名称" onChange={e=>this.handleValue(e)}/>
        </Modal>
          <Table  columns={columns} dataSource={typeData?typeData.data:null} />
        </div>
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