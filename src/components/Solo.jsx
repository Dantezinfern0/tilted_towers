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
      soloType: 'p2.br.m0.weekly'
    }
  }
  render() {
    return (
      <div className="component-padding">
        <Scout
          name="Solo"
          topName="Top 12"
          dataType={this.state.soloType}
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