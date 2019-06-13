import React, { Component } from 'react';
// import ReactDOM from 'react-dom'
import Editor from 'for-editor'
import {connect} from 'dva'
import {Button,Select, Input,Form} from 'antd'

const { Option } = Select;
class Addquestion extends Component {
    constructor() {
        super()
        this.state = {
          value: ''
        }
      }
      
      handleChange(value) {
        this.setState({
          value
        })
      }

      
      render() {
        const { value } = this.state
        const {data,subdata,questionData} = this.props
        console.log(questionData)
        return (
          <div>
              <h3>题目信息</h3>
              <div>
                <div><label>题干</label></div>
                <div><Input placeholder="请输入题目标题,不超过20个字" /></div>
                <div>
                <div><label>题目主题</label></div>
                <Editor value={value} onChange={this.handleChange.bind(this)} />
              </div>
              </div>
              <div>
                <div><label>请选择考试类型:</label></div>
                <div>
                  <Select defaultValue="请选择" style={{ width: 220 }}>
                    {
                      data?data.data.map(item=>(
                        <Option value={item.exam_name} 
                        key={item.exam_id}>{item.exam_name}</Option>
                      )):null
                    }
                  </Select>
                </div>
              </div>
              <br/>
                <div>
                  <div><label>请选择课程类型:</label></div>
                  <div>
                    <Select defaultValue="请选择" style={{ width: 220 }}>
                      {
                        subdata?subdata.data.map(item=>(
                            <Option value={item.subject_text}
                            key={item.subject_id}>{item.subject_text}</Option>
                        )):null
                      }
                    </Select>
                  </div>
                </div>
              <br/>
              <div>
                <div><label>请选择题目类型:</label></div>
                <div>
                  <Select defaultValue="请选择" style={{ width: 220 }}>
                    {
                      questionData?questionData.data.map(item=>(
                        <Option value={item.questions_type_text}
                        key={item.questions_type_id}>{item.questions_type_text}</Option>
                      )):null
                    }
                  </Select>
                </div>
              </div>
              <div>
                <div><label>答案信息:</label></div>
                <Editor value={value} onChange={this.handleChange.bind(this)} />
              </div>
              <Button>提交</Button>
          </div>

        )
      }
      
      componentDidMount(){
        this.props.examType()
        this.props.getSubject()
        this.props.getquestionData()
        // this.props.Addquestion()
      }
    
}
const mapState = state => {
  return state.exam
}
const mapDispatch = dispatch => {
  return {
    examType() {
        dispatch({
          type:'exam/examType'
        })
      },
      getSubject() {
        dispatch({
          type:'exam/subject'
        })
      },
      getquestionData() {
        dispatch({
          type: 'exam/questionsType'
        })
      },
      Addquestion(payload) {
        dispatch({
          type:'exam/addQuestion',
          payload
        })
      }
  }
}
export default connect(mapState,mapDispatch)(Addquestion);