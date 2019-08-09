import React, { Component } from 'react'
import Scout from './Scout.js'


class Squads extends Component {
  constructor(props) {
    super(props)
  this.state = {
    classGradient: 'gradient-effect-purple',
    classColorLight: 'purple-color-light',
    classColor: 'purple-color',
    classColorDark: 'purple-color-dark'
  }
}
  render() {
    return (
      <div>
      <Scout
          name="Squads"
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

export default Squads
