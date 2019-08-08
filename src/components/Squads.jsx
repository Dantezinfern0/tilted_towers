import React, { Component } from 'react'
// import Scout from '../scout'
const _Scout = window.Scout

class Squads extends Component {
  state = {
    loading: true,
    squadData: [],
    titleQ: 'Squad',
    killDeathRatioQ: '42',
    matchesQ: '42',
    winsQ: '42',
    top3Q: '42',
    winRateQ: 0
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
          .get(fortnite.id, playerId, 'p9.br.m0.weekly')
          .then(data => {
            console.log('Ajax call Done', data)
            this.setState({
              squadData: data,
              titleQ: data.segments[0].metadata[0].displayValue.split(' ', 1),
              killsQ: data.stats[0].displayValue,
              matchesQ: data.stats[2].displayValue,
              winsQ: data.stats[5].displayValue,
              top3Q: data.stats[6].displayValue,
              killDeathRatioQ: data.stats[11].displayValue,
              winRateQ: Math.round(data.stats[12].value * 100),
              loading: false
            })
          })
      })
  }

  render() {
    return (
      <div>
      <h1 className="title-header">Squads Page</h1>
      <div className="entire-stat-box thin-gray-border">
        <header className="header-flex purple-color-dark">
          <div className="header-box-one purple-color-light">
            <h2>{this.state.titleQ}</h2>
          </div>
          <div className="gradient-effect-purple">
            <p className="gradient-color-purple"></p>
          </div>
          <div className="header-box-three">
            <h2>Matches </h2>
            <h2 className="margin-left-one">{this.state.matchesQ}</h2>
          </div>
          <div className="header-box-three">
            <h2>Kills </h2>
            <h2 className="margin-left-one">{this.state.killsQ}</h2>
          </div>
        </header>
        <section className="sub-header-flex purple-color">
          <div className="sub-header-box-one">
            <h1 className="bold-font-weight">{this.state.killDeathRatioQ}</h1>
            <p>K/D Ratio</p>
          </div>
          <div className="sub-header-box-two">
            <h1 className="bold-font-weight">{this.state.winsQ}</h1>
            <p>Wins</p>
          </div>
        </section>
        <section className="flex-box-three">
          <div>
            <div className="padding-left-right">
              <div className="flex-between">
                <h3 className="margin-box">wins</h3>
                <p className="top-margin">{this.state.winsQ}</p>
              </div>
            </div>
            <hr/>
            <div>
              <div className="flex-between">
                <h3>Win Rate</h3>
                <p className="top-margin">{this.state.winRateQ}%</p>
              </div>
            </div>
            <hr/>
            <div>
              <div className="flex-between">
                <h3>Matches</h3>
                <p className="top-margin">{this.state.matchesQ}</p>
              </div>
            </div>
            <hr/>
          </div>
          <div>
            <div className="margin-box">
              <div className="flex-between">
                <h3>Top3</h3>
                <p className="top-margin">={this.state.top3Q}</p>
              </div>
            </div>
            <hr/>
            <div>
              <div className="flex-between">
                <h3>K/D Ratio</h3>
                <p className="top-margin">{this.state.killDeathRatioQ}</p>
              </div>
            </div>
            <hr/>
            <div>
              <div className="flex-between">
                <h3>Kills</h3>
                <p className="top-margin">{this.state.killsQ}</p>
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

export default Squads
