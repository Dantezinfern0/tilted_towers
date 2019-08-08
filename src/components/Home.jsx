import React, { Component } from 'react'
import Solo from './Solo.jsx'
import Duo from './Duo.jsx'
import Squads from './Squads.jsx'

class Home extends Component {
  render() {
    return (
      <div>
        <h1 className="title-header">Home Page</h1>
        <div>
          <Solo />
          <Duo />
          <Squads />
        </div>
      </div>
    )
  }
}

export default Home
