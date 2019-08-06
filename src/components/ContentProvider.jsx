import React, { Component } from 'react';
const _Scout = window.Scout
// import Scout from '../scout'

class ContentProvider extends Component {
  state = {
    soloData: [],
    duoData: [],
    squadData: [],
  }
  // Solo API call
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
              soloData: data
            })
          })
      })
  }
 // Duo API call
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
          .get(fortnite.id, playerId, 'p9.br.m0.weekly')
          .then(data => {
            console.log('Ajax call Done', data)
            this.setState({
              duoData: data
            })
          })
      })
  }
 // squads API call
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
          .get(fortnite.id, playerId, 'p10.br.m0.weekly')
          .then(data => {
            console.log('Ajax call Done', data)
            this.setState({
              squadData: data
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

export default ContentProvider;