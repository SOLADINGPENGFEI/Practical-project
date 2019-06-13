import React, { Component } from 'react'
import Editor from 'for-editor'
import styles from './view.scss'

class QuestionView extends Component {
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
    return (
      <div>
        <h2>查看试题</h2>
      </div>
    )
  }
}

export default QuestionView
