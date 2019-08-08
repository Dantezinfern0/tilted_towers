import React, { Component } from 'react'
// import Scout from '../scout'
const _Scout = window.Scout

class Duo extends Component {
  state = {
    loading: true,
    duoData: [],
    titleD: '',
    killDeathRatioD: '',
    matchesD: '',
    winsD: '',
    top6D: '',
    winRateD: 0
  }
  componentDidMount = async () => {
    await _Scout.configure({
      clientId: process.env.REACT_APP_CLIENT_ID,
      clientSecret: process.env.REACT_APP_CLIENT_SECRET,
      scope: 'public.read'
    })

    var titles = await _Scout.titles.list()
    var fortnite = titles.find(t => t.slug === 'fortnite')

    _Scout.players
      .search('Ninja', 'epic', 'pc', fortnite.id, true, true)
      .then(data => {
        var playerId = data.results[0].player.playerId

        _Scout.players
          .get(fortnite.id, playerId, 'p10.br.m0.weekly')
          .then(data => {
            console.log('Ajax call Done', data)
            this.setState({
              duoData: data,
              titleD: data.segments[0].metadata[0].displayValue.split(' ', 1),
              killsD: data.stats[0].displayValue,
              matchesD: data.stats[2].displayValue,
              winsD: data.stats[5].displayValue,
              top6D: data.stats[7].displayValue,
              killDeathRatioD: data.stats[11].displayValue,
              winRateD: Math.round(data.stats[12].value * 100),
              loading: false
            })
          })
      })
  }

  render() {
    return (
      <div>
        <h1 className="title-header">Duo Page</h1>
        <div className="entire-stat-box">
          <header className="header-flex orange-color-dark">
            <div className="header-box-one orange-color-light">
              <h2>{this.state.titleD}</h2>
            </div>
            <div className="gradient-effect-orange">
              <p className="gradient-color-orange"></p>
            </div>
            <div className="header-box-three">
              <h2>Matches </h2>
              <h2 className="margin-left-one">{this.state.matchesD}</h2>
            </div>
            <div className="header-box-three">
              <h2>Kills </h2>
              <h2 className="margin-left-one">{this.state.killsD}</h2>
            </div>
          </header>
          <section className="sub-header-flex orange-color">
            <div className="sub-header-box-one">
              <h1 className="bold-font-weight">{this.state.killDeathRatioD}</h1>
              <p>K/D Ratio</p>
            </div>
            <div className="sub-header-box-two">
              <h1 className="bold-font-weight">{this.state.winsD}</h1>
              <p>Wins</p>
            </div>
          </section>
          <section className="flex-box-three">
            <div>
              <div className="padding-left-right">
                <div className="flex-between">
                  <h3 className="margin-box">wins</h3>
                  <p className="top-margin">{this.state.winsD}</p>
                </div>
              </div>
              <hr/>
              <div>
                <div className="flex-between">
                  <h3>Win Rate</h3>
                  <p className="top-margin">{this.state.winRateD}%</p>
                </div>
              </div>
              <hr/>
              <div>
                <div className="flex-between">
                  <h3>Matches</h3>
                  <p className="top-margin">{this.state.matchesD}</p>
                </div>
              </div>
              <hr/>
            </div>
            <div>
              <div className="margin-box">
                <div className="flex-between">
                  <h3>Top6</h3>
                  <p className="top-margin">={this.state.top6D}</p>
                </div>
              </div>
              <hr/>
              <div>
                <div className="flex-between">
                  <h3>K/D Ratio</h3>
                  <p className="top-margin">{this.state.killDeathRatioD}</p>
                </div>
              </div>
              <hr/>
              <div>
                <div className="flex-between">
                  <h3>Kills</h3>
                  <p className="top-margin">{this.state.killsD}</p>
                </div>
              </div>
              <hr/>
            </div>
          </section>
        </div>
      </div>
    )
  }
}

export default Duo
