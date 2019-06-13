import React, { Component } from 'react'
import Editor from 'for-editor'
import styles from './type.scss'

class QuestionType extends Component {
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
      <div className={styles.content}>
        <h2>试题分类</h2>
      </div>
    )
  }
}

export default QuestionType
