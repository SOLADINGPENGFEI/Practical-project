import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import Editor from 'for-editor'
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
        console.log(this.props)
        return (
          <div>
              <Select defaultValue="javascript" style={{ width: 220 }}>
                <Option value="javascript">javascript</Option>
               
              </Select><br/>
              <Select defaultValue="课程选择" style={{ width: 220 }}>
                <Option value="课程选择">课程选择</Option>
               
              </Select><br/>
              <Select defaultValue="课程选择" style={{ width: 220 }}>
                <Option value="课程选择">课程选择</Option>
             
              </Select><br/>
              <Select defaultValue="课程选择" style={{ width: 220 }}>
                <Option value="课程选择">课程选择</Option>
                
              </Select>
              <Editor value={value} onChange={this.handleChange.bind(this)} />
              <Button>提交</Button>
          </div>

        )
      }
    
}

export default Addquestion;