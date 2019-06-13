import React, { Component } from 'react';
// import ReactDOM from 'react-dom'
import Editor from 'for-editor'
import {connect} from 'dva'
import {Button,Select} from 'antd'

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
        const {data} = this.props
        console.log(data)
        return (
          <div>
              <div>
                <div><label>请选择考试类型:</label></div>
                <div>
                  <Select defaultValue="" style={{ width: 220 }}>
                    {/* {
                      data.data.map(item=>(
                        <Option value={item.exam_name} 
                        key={item.exam_id}>{item.exam_name}</Option>
                      ))
                    } */}
                  </Select>
                </div>
              </div>
              <br/>
                <div>
                  <div><label>请选择课程类型:</label></div>
                  <div>
                    <Select defaultValue="" style={{ width: 220 }}>
                      <Option value="课程选择">课程选择</Option>
                    </Select>
                  </div>
                </div>
              <br/>
              <div>
                <div><label>请选择题目类型:</label></div>
                <div>
                  <Select defaultValue="" style={{ width: 220 }}>
                    <Option value="课程选择">课程选择</Option>
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
      }
  }
}
export default connect(mapState,mapDispatch)(Addquestion);