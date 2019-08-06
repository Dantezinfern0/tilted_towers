import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class NavBar extends Component {
  render() {
    return (
      <div>
        <header className="nav-bar">
          <section>
            <h2>Fortnite</h2>
          </section>
          <section>
            <Link to="/solo">
              <button>Solo</button>
            </Link>
            <Link to="/duo">
              <button>Duo</button>
            </Link>
            <Link to="/squads">
              <button>Squads</button>
            </Link>
          </section>
        </header>
      </div>
    )
  }
}

export default NavBar
