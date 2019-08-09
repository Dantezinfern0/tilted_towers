import React, { Component } from 'react'
// import Scout from '../scout'
const _Scout = window.Scout

class Solo extends Component {
  state = {
    loading: true,
    soloData: [],
    titleS: '',
    killDeathRatioS: '',
    matchesS: '',
    winsS: '',
    top12S: '',
    winRateS: 0
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
          .get(fortnite.id, playerId, 'p2.br.m0.weekly')
          .then(data => {
            console.log('Ajax call Done', data)
            this.setState({
              soloData: data,
              titleS: data.segments[0].metadata[0].displayValue.split(' ', 1),
              killsS: data.stats[0].displayValue,
              matchesS: data.stats[2].displayValue,
              winsS: data.stats[5].displayValue,
              top12S: data.stats[8].displayValue,
              killDeathRatioS: data.stats[11].displayValue,
              winRateS: Math.round(data.stats[12].value * 100),
              loading: false
            })
          })
      })
  }
  // comment to commit
  render() {
    return (
      <div>
        {/* <h1 className="title-header">Solo Page</h1> */}
        <div className="entire-stat-box thin-gray-border">
          <header className="header-flex blue-color-dark">
            <div className="header-box-one blue-color-light">
              <h2 className="spacing">{this.state.titleS}</h2>
            </div>
            <div className="gradient-effect-blue">
              <p className="gradient-color-blue"></p>
            </div>
            <div className="header-box-three spacing">
              <h2>Matches </h2>
              <h2 className="margin-left-one">{this.state.matchesS}</h2>
            </div>
            <div className="header-box-three">
              <h2>Kills </h2>
              <h2 className="margin-left-one">{this.state.killsS}</h2>
            </div>
          </header>
          <section className="sub-header-flex blue-color">
            <div className="sub-header-box-one">
              <h1 className="bold-font-weight">{this.state.killDeathRatioS}</h1>
              <p>K/D Ratio</p>
            </div>
            <div className="sub-header-box-two">
              <h1 className="bold-font-weight">{this.state.winsS}</h1>
              <p>Wins</p>
            </div>
          </section>
          <section className="flex-box-three">
            <div className="spacing">
              <div className="padding-left-right">
                <div className="flex-between">
                  <h3 className="margin-box">wins</h3>
                  <p className="top-margin">{this.state.winsS}</p>
                </div>
              </div>
              <hr/>
              <div>
                <div className="flex-between">
                  <h3>Win Rate</h3>
                  <p className="top-margin">{this.state.winRateS}%</p>
                </div>
              </div>
              <hr/>
              <div>
                <div className="flex-between">
                  <h3>Matches</h3>
                  <p className="top-margin">{this.state.matchesS}</p>
                </div>
              </div>
              <hr/>
            </div>
            <div>
              <div className="margin-box">
                <div className="flex-between">
                  <h3>Top12</h3>
                  <p>{this.state.top12S}</p>
                </div>
              </div>
              <hr/>
              <div>
                <div className="flex-between">
                  <h3>K/D Ratio</h3>
                  <p className="top-margin">{this.state.killDeathRatioS}</p>
                </div>
              </div>
              <hr/>
              <div>
                <div className="flex-between">
                  <h3>Kills</h3>
                  <p className="top-margin">{this.state.killsS}</p>
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

export default Solo
