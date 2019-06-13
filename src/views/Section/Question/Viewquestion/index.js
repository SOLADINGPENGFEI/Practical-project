import React, { Component } from 'react';
import {connect} from 'dva'
import { Tag,Select,Input,Button,Table } from 'antd';
import './view.scss'
const { CheckableTag } = Tag;
const { Option } = Select;
const InputGroup = Input.Group;
class questionView extends Component {
    state = { 
        checked: true
     }
     handleChange = checked => {
        this.setState({ checked });
      };
    render() {
        const {subdata,data,questionData,AllData} = this.props
        console.log(AllData)
        const columns = [
            {
              dataIndex: 'title',
              key: 'title',
            },{
                key: 'exam_name',
                dataIndex: 'exam_name',
                render: exam_name => (
                  <span>
                        <Tag>
                          {exam_name.toUpperCase()}
                        </Tag>
                  </span>
                ),
              },{
                key: 'subject_text',
                dataIndex: 'subject_text',
                render: subject_text => (
                  <span>
                        <Tag>
                          {subject_text.toUpperCase()}
                        </Tag>
                  </span>
                ),
              },{
                key: 'questions_type_text',
                dataIndex: 'questions_type_text',
                render: questions_type_text => (
                  <span>
                        <Tag>
                          {questions_type_text.toUpperCase()}
                        </Tag>
                  </span>
                ),
              },
            {
                dataIndex: 'user_name',
                key: 'user_name',
                render: text => <a>{text}</a>,
              },
            {
              key: 'action',
              render: (text, record) => (
                <span>
                  <a>编辑 {record.name}</a>
                </span>
              ),
            }
          ];
        return (
            <div>
               <div className='viewNav'>
                <h4 style={{ marginBottom: 16 }}>课程类型:</h4>
                <div>
                    {
                       subdata?subdata.data.map(item=>(
                        <CheckableTag  key={item.subject_id}
                        style={{marginBottom: '8px'}}
                        >{item.subject_text}</CheckableTag >
                       )):null
                    }
                </div>
                <div className='type'>
                <InputGroup compact >
                    <h4>考试类型</h4>
                    <Select defaultValue="请选择">
                        {
                        data?data.data.map(item=>(
                            <Option value={item.exam_name} 
                            key={item.exam_id}>{item.exam_name}</Option>
                        )):null
                        }
                    </Select>
                    <h4>题目类型</h4>
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
                    <Table columns={columns} dataSource={AllData?AllData.data:null} />
                </div>
            </div>
        );
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