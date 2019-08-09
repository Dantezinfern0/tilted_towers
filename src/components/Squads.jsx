import React, { Component } from 'react'
import Scout from './Scout.js'
// import DisplayComponent from './DisplayComponent'
// import Scout from '../scout'
// const _Scout = window.Scout

class Squads extends Component {
  constructor(props) {
    super(props)
  this.state = {
    // loading: true,
    // titleQ: 'Squad',
    // killDeathRatioQ: '42',
    // matchesQ: '42',
    // winsQ: '42',
    // top3Q: '42',
    // winRateQ: 0,
    classGradient: 'gradient-effect-purple',
    classColorLight: 'purple-color-light',
    classColor: 'purple-color',
    classColorDark: 'purple-color-dark'
  }
}
  // I really really want to refactor this code
  // the only thing that is changing is the 'segment'
  // componentDidMount = async () => {
  //   await _Scout.configure({
  //     clientId: process.env.REACT_APP_CLIENT_ID,
  //     clientSecret: process.env.REACT_APP_CLIENT_SECRET,
  //     scope: 'public.read'
  //   })

  //   var titles = await _Scout.titles.list()
  //   var fortnite = titles.find(t => t.slug === 'fortnite')

  //   _Scout.players
  //     .search('Ninja', 'epic', 'pc', fortnite.id, true, true)
  //     .then(data => {
  //       var playerId = data.results[0].player.playerId

  //       _Scout.players
  //         .get(fortnite.id, playerId, 'p9.br.m0.weekly')
  //         .then(data => {
  //           console.log('Ajax call Done', data)
  //           this.setState({
  //             titleQ: data.segments[0].metadata[0].displayValue.split(' ', 1),
  //             killsQ: data.stats[0].displayValue,
  //             matchesQ: data.stats[2].displayValue,
  //             winsQ: data.stats[5].displayValue,
  //             top3Q: data.stats[6].displayValue,
  //             killDeathRatioQ: data.stats[11].displayValue,
  //             winRateQ: Math.round(data.stats[12].value * 100),
  //             loading: false
  //           })
  //         })
  //     })
  // }

  render() {
    return (
      <div>
      {/* <DisplayComponent
        title={this.state.titleQ}
        kills={this.state.killsQ}
        matches={this.state.matchesQ}
        wins={this.state.winsQ}
        top={this.state.top3Q}
        killDeathRatio={this.state.killDeathRatioQ}
        winRate={this.state.winRateQ}
        loading={this.state.loading}
        classGradient={this.state.classGradient}
        classColor={this.state.classColor}
        classColorLight={this.state.classColorLight}
        classColorDark={this.state.classColorDark}
      /> */}
      <Scout
          name="Squads"
          dataType={this.state.dataType}
          classGradient={this.state.classGradient}
          classColor={this.state.classColor}
          classColorLight={this.state.classColorLight}
          classColorDark={this.state.classColorDark}
        />
    </div>
    )
  }
}

export default Squads
