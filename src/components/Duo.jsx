import React, { Component } from 'react'
// import Scout from '../scout'
const _Scout = window.Scout

class Duo extends Component {
  state = {
    loading: true,
    duoData: [],
    titleD: ''
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
          .get(fortnite.id, playerId, 'p10.br.m0.weekly')
          .then(data => {
            console.log('Ajax call Done', data)
            this.setState({
              duoData: data,
              titleD: data.segments[0].metadata[0].displayValue.split(' ', 1),
              loading: false
            })
          })
      })
  }

  render() {
    return (
      <div>
        <h1 className="title-header">Duo Page</h1>
      </div>
    )
  }
}

export default Duo
