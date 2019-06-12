import React, { Component } from 'react'
import axios from 'axios'
import Editor from 'for-editor'

class QuestionAdd extends Component {
  constructor() {
    super()
    this.state = {
      value: ''
    }
  }

  componentDidMount(){
    axios.post('/exam/getQuestionsType',{
       
        success:(res)=>{
            console.log(res.data)
        }
    })
  }

  
  handleChange(value) {
    this.setState({
      value
    })
  }

  render() {
    const { value } = this.state
    return (
      <Editor value={value} onChange={this.handleChange.bind(this)}/>
    )
  }
}

export default QuestionAdd
