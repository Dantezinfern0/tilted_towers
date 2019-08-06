import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Solo from './components/Solo.jsx'
import Duo from './components/Duo.jsx'
import Squads from './components/Squads.jsx'
import Home from './components/Home.jsx'
import NavBar from './components/NavBar.jsx'
import './App.css'
require('dotenv').config({
  path: '../.env'
})
// import logo from './logo.svg'
// import Scout from './scout'

class App extends Component {
  render() {
    return (
      <>
        <Router>
        <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/solo" component={Solo} />
            <Route exact path="/duo" component={Duo} />
            <Route exact path="/squads" component={Squads} />
          </Switch>
        </Router>
      </>
    )
  }
}

export default App
