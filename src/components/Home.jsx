import React, { Component } from 'react'
import Solo from './Solo.jsx'
import Duo from './Duo.jsx'
import Squads from './Squads.jsx'

class Home extends Component {
  render() {
    return (
      <div className="top-padding">
        <span className="home-page-flex">
          <Solo className=""/>
          <Duo className="" />
          <Squads className="" />
        </span>
      </div>
    )
  }
}

export default Home
