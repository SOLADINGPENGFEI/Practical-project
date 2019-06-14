import React, { Component } from 'react';
import {connect} from 'dva'
import { Tag,Select,Input,Button,Table,Radio } from 'antd';
import './view.scss'
const { CheckableTag } = Tag;
const { Option } = Select;
const InputGroup = Input.Group;
class questionView extends Component {
    state = { 
        checked: true
     }
      
    render() {
        const {subdata,data,questionData,AllData} = this.props
          
        return (
            <div>
               <div className='viewNav'>
                <h4 style={{ marginBottom: 16 }}>课程类型:</h4>
                <div>
                  <Radio.Group defaultValue="" buttonStyle="solid" >
                    <Radio.Button>All</Radio.Button>
                  </Radio.Group>
                    {
                       subdata?subdata.data.map((item,index)=>(
                        <Radio.Group key={index} 
                        defaultValue='' buttonStyle="solid" style={{padding:'8px'}}>
                          <Radio.Button value={item.subject_id}>
                          {item.subject_text}</Radio.Button>
                        </Radio.Group>
                       )):null
                    }
                </div>
                <div className='type'>
                  <InputGroup compact >
                      <span>考试类型</span>
                      <Select defaultValue="请选择">
                          {
                          data?data.data.map(item=>(
                              <Option value={item.exam_name} 
                              key={item.exam_id}>{item.exam_name}</Option>
                          )):null
                          }
                      </Select>
                      <span>题目类型</span>
                      <Select defaultValue="请选择">
                      {
                          questionData?questionData.data.map(item=>(
                              <Option value={item.questions_type_text}
                              key={item.questions_type_id}>{item.questions_type_text}</Option>
                          )):null
                          }
                      </Select>
                  </InputGroup>
                <Button type="primary" icon="search">查询</Button>
                </div>
                </div>
                <div className='list'>
                  {
                        AllData?AllData.data.map((item) => 
                            <div key={item.questions_id} className='dl'>
                            <div className='dt'  onClick={()=>this.detailCont(item.questions_id)}>
                                <div className='titles'>{item.title}</div>
                                <div className='spans'>
                                    <span key={item.questions_type_id}>{item.questions_type_text}</span>
                                    <span key={item.subject_id}>{item.subject_text}</span>
                                    <span key={item.exam_id}>{item.exam_name}</span>
                                </div>
                                <div className='namea' key={item.user_id}>{item.user_name}发布</div>
                            </div>
                            <div className='dd' onClick={()=>this.editquestion(item)}>编辑</div>
                        </div>
                        ):null
                    }
                </div>
            </div>
        );
    }
    editquestion = (item) => {
      console.log(item)
      // console.log(this.props.history)
      this.props.history.replace('/main/question/viewEdit?'+item.questions_id)
    }
    detailCont = (id) => {
      console.log(id)
      this.props.history.replace('/main/question/viewDetail?'+id)
    }
    componentDidMount() {
        this.props.getSubject()
        this.props.examType()
        this.props.getquestionData()
        this.props.getAllData()
    }
}

const mapState = state => {
    return state.exam
}
const mapDispatch = dispatch => {
   return {
    getSubject() {
        dispatch({
          type:'exam/subject'
        })
      },
      examType() {
        dispatch({
          type:'exam/examType'
        })
      },getquestionData() {
        dispatch({
          type: 'exam/questionsType'
        })
      },getAllData(){
        dispatch({
            type:'exam/allQuestion'

        })
      }
   }
}
export default connect(mapState,mapDispatch)(questionView);