import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NavBar extends Component {
  render() {
    return (
      <div className="fixed-position">
        <div className="nav-bar">
          <section>
            <Link to="/">
              <h2 className="pad-it">Fortnite</h2>
            </Link>
          </section>
          <section>
            <Link to="/solo">
              <button className="pad-it">Solo</button>
            </Link>
            <Link to="/duo">
              <button className="pad-it">Duo</button>
            </Link>
            <Link to="/squads">
              <button className="pad-it">Squads</button>
            </Link>
          </section>
        </div>
      </div>
    )
  }
}

export default NavBar
