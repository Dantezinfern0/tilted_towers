import React, { Component } from 'react'
import DisplayComponent from './DisplayComponent'
// import Scout from '../scout'
const _Scout = window.Scout

class Duo extends Component {
  state = {
    loading: true,
    titleD: '',
    killDeathRatioD: '',
    matchesD: '',
    winsD: '',
    top6D: '',
    winRateD: 0,
    classGradient: 'gradient-effect-orange',
    classColorLight: 'orange-color-light',
    classColor: 'orange-color',
    classColorDark: 'orange-color-dark'
  }
  // I really really want to refactor this code
  // the only thing that is changing is the 'segment'
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
        <DisplayComponent
        title={this.state.titleD}
        kills={this.state.killsD}
        matches={this.state.matchesD}
        wins={this.state.winsD}
        top={this.state.top6D}
        killDeathRatio={this.state.killDeathRatioD}
        winRate={this.state.winRateD}
        loading={this.state.loading}
        classGradient={this.state.classGradient}
        classColor={this.state.classColor}
        classColorLight={this.state.classColorLight}
        classColorDark={this.state.classColorDark}
      />
      </div>
    )
  }
}

export default Duo
