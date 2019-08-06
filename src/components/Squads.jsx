import React, { Component } from 'react'
// import Scout from '../scout'
const _Scout = window.Scout

class Squads extends Component {
  stats = {
    loading: true,
    squadData: [],
    titleQ: '',
    killDeathRatioQ: '',
    matchesQ: '',
    winsQ: '',
    top3Q: '',
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
              killDeathRatioQ: data.stats[11].displayValue,
              winsQ: data.stats[5].displayValue,
              top3Q: data.stats[6].displayValue,
              winRateQ: Math.round(data.stats[12].value * 100),
              loading: false
            })
          })
      })
  }

  render() {
    return (
      <div>
        <h1 className="title-header">Squad Page</h1>
      </div>
    )
  }
}

export default Squads
