import React, { Component } from 'react';
const _Scout = window.Scout

class Scout extends Component {
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
          .get(fortnite.id, playerId, `${this.props.dataType}`)
          .then(data => {
            console.log('Ajax call Done', data)
            this.setState({
              title: data.segments[0].metadata[0].displayValue.split(' ', 1),
              kills: data.stats[0].displayValue,
              matches: data.stats[2].displayValue,
              wins: data.stats[5].displayValue,
              top: data.stats[6].displayValue,
              killDeathRatio: data.stats[11].displayValue,
              winRate: Math.round(data.stats[12].value * 100),
              loading: false
            })
          })
      })
  }

  render() {
    return (
      <div>
        
      </div>
    );
  }
}

export default Scout;