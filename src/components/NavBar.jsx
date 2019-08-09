import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NavBar extends Component {
  render() {
    return (
      <div>
        <div className="nav-bar">
          <Link to="/">
            <h2 className="pad-it">Fortnite</h2>
          </Link>
          <Link to="/solo">
            <button className="pad-it">Solo</button>
          </Link>
          <Link to="/duo">
            <button className="pad-it">Duo</button>
          </Link>
          <Link to="/squads">
            <button className="pad-it">Squads</button>
          </Link>
          <Link to="/search/:playerName">
            <button className="pad-it">Search</button>
          </Link>
        </div>
      </div>
    )
  }
}

export default NavBar
