// API component
import React, { Component } from 'react'
import DisplayComponent from './DisplayComponent.jsx'
const _Scout = window.Scout

class Scout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      killDeathRatio: '',
      matches: '',
      wins: '',
      top: '',
      // top6:'',
      // top12: '',
      winRate: 0,
    }
  }

  async componentWillMount() {
    console.log(this.props.dataType, this.props.classColor)
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
          .get(fortnite.id, playerId, `${this.props.dataType}`)
          .then(data => {
            console.log('Ajax call Done', data)
            this.setState({
              title: data.segments[0].metadata[0].displayValue.split(' ', 1),
              kills: data.segments[0].stats[0].displayValue,
              matches: data.segments[0].stats[2].displayValue,
              wins: data.segments[0].stats[3].displayValue,
              top: data.segments[0].stats[4].displayValue,
              // top6: data.segments[0].stats[5].displayValue,
              // top12: data.segments[0].stats[6].displayValue,
              killDeathRatio: data.segments[0].stats[8].displayValue,
              winRate: Math.round(data.stats[12].value * 100),
              loading: false
            })
          })
      })
  }

  render() {
    return (
      <div>
        <DisplayComponent
          key={this.props.name}
          topName={this.props.topName}
          title={this.state.title}
          kills={this.state.kills}
          matches={this.state.matches}
          wins={this.state.wins}
          top={this.state.top}
          killDeathRatio={this.state.killDeathRatio}
          winRate={this.state.winRate}
          loading={this.state.loading}
          classGradient={this.props.classGradient}
          classColor={this.props.classColor}
          classColorLight={this.props.classColorLight}
          classColorDark={this.props.classColorDark}
        />
      </div>
    )
  }
}

export default Scout
