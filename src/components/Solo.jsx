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
        <h1 className="title-header">Solo Page</h1>
        <div className="entire-stat-box">
          <header className="header-flex blue-color-dark">
            <div className="header-box-one blue-color-light">
              <h2>Solo</h2>
            </div>
            <div className="gradient-effect">
              <p>split color</p>
            </div>
            <div className="header-box-three">
              <h2>Matches{' '}</h2>
              <h2>{' '} 234</h2>
            </div>
            <div className="header-box-three">
              <h2>Kills </h2>
              <h2>94823</h2>
            </div>
          </header>
          <section className="sub-header-flex blue-color">
            <div className="sub-header-box-one">
              <h1>7.24</h1>
              <p>K/D Ratio</p>
            </div>
            <div className="sub-header-box-two">
              <h1>62</h1>
              <p>Wins</p>
            </div>
          </section>
          <section className="flex-box-three">
            <div>
              <div className="padding-left-right">
                <div className="flex-between">
                  <h3 className="margin-box">wins</h3>
                  <p className="top-margin">62</p>
                </div>
              </div>
              <hr/>
              <div>
                <div className="flex-between">
                  <h3>Win Rate</h3>
                  <p className="top-margin">25%</p>
                </div>
              </div>
              <hr/>
              <div>
                <div className="flex-between">
                  <h3>Matches</h3>
                  <p className="top-margin">250</p>
                </div>
              </div>
              <hr/>
            </div>
            <div>
              <div className="margin-box">
                <div className="flex-between">
                  <h3>Top10</h3>
                  <p className="top-margin">100</p>
                </div>
              </div>
              <hr/>
              <div>
                <div className="flex-between">
                  <h3>K/D Ratio</h3>
                  <p className="top-margin">7.24</p>
                </div>
              </div>
              <hr/>
              <div>
                <div className="flex-between">
                  <h3>Kills</h3>
                  <p className="top-margin">1,364</p>
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
