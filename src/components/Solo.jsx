import React, { Component } from 'react'
import Scout from './Scout.js'

class Solo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      classGradient: 'gradient-effect-blue',
      classColorLight: 'blue-color-light',
      classColor: 'blue-color',
      classColorDark: 'blue-color-dark',
      dataType: 'p2.br.m0.weekly'
    }
  }
  render() {
    return (
      <div>
        <Scout
          name="Solo"
          dataType={this.state.dataType}
          classGradient={this.state.classGradient}
          classColor={this.state.classColor}
          classColorLight={this.state.classColorLight}
          classColorDark={this.state.classColorDark}
        />
      </div>
    )
  }
}

export default Solo