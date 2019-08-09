import React, { Component } from 'react'
import Scout from './Scout.js'


class Duo extends Component {
  constructor(props) {
    super(props)
  this.state = {
    classGradient: 'gradient-effect-orange',
    classColorLight: 'orange-color-light',
    classColor: 'orange-color',
    classColorDark: 'orange-color-dark'
  }
}
  render() {
    return (
      <div>
      <Scout
          name="Duo"
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

export default Duo
