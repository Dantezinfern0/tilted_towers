import React, { Component } from 'react'
// import DisplayComponent from './DisplayComponent'
import Scout from './Scout.js'
// const _Scout = window.Scout

class Solo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      classGradient: 'gradient-effect-blue',
      classColorLight: 'blue-color-light',
      classColor: 'blue-color',
      classColorDark: 'blue-color-dark',
      dataType: 'p2.br.m0.weekly'
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
  //         .get(fortnite.id, playerId, 'p2.br.m0.weekly')
  //         .then(data => {
  //           console.log('Ajax call Done', data)
  //           this.setState({
  //             titleS: data.segments[0].metadata[0].displayValue.split(' ', 1),
  //             killsS: data.stats[0].displayValue,
  //             matchesS: data.stats[2].displayValue,
  //             winsS: data.stats[5].displayValue,
  //             top12S: data.stats[8].displayValue,
  //             killDeathRatioS: data.stats[11].displayValue,
  //             winRateS: Math.round(data.stats[12].value * 100),
  //             loading: false
  //           })
  //         })
  //     })
  // }
  // comment to commit
  render() {
    return (
      <div>
        {/* <DisplayComponent
          title={this.state.titleS}
          kills={this.state.killsS}
          matches={this.state.matchesS}
          wins={this.state.winsS}
          top={this.state.top12S}
          killDeathRatio={this.state.killDeathRatioS}
          winRate={this.state.winRateS}
          loading={this.state.loading}
          classGradient={this.state.classGradient}
          classColor={this.state.classColor}
          classColorLight={this.state.classColorLight}
          classColorDark={this.state.classColorDark}
        /> */}
        <Scout
          name="Solo"
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

export default Solo
