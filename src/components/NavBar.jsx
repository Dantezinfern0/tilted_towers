import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NavBar extends Component {
  render() {
    return (
      <div className="padding-bottom">
        <div className="nav-bar">
          <Link to="/">
            <h2 className="">Fortnite</h2>
          </Link>
          <Link to="/solo">
            <button className="">Solo</button>
          </Link>
          <Link to="/duo">
            <button className="">Duo</button>
          </Link>
          <Link to="/squads">
            <button className="">Squads</button>
          </Link>
          <Link to="/search">
            <button className="">Search</button>
          </Link>
        </div>
      </div>
    )
  }
}

export default NavBar
