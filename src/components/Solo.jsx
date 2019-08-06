import React, { Component } from 'react'
// import Scout from '../scout'
const _Scout = window.Scout

class Solo extends Component {
  state = {
    soloData: []
  }
  componentWillMount = async () => {
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
              soloData: data
            })
          })
      })
  }

  render() {
  
    return (
      <div>
        <h1>Solo Page</h1>
      </div>
    )
  }
}

export default Solo
