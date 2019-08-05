import React, { Component } from 'react';

class Duo extends Component {
  componentDidMount = async () => {
    await _Scout.configure({
      clientId: 'af2ef8ea-a458-434e-8c00-26fb8f938eb1',
      clientSecret:
        '10dcae04dca819ab4dd0505fa6dc8b923242bd61230c612a1eaf3377987a4a59',
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
            console.log('Ajax call Done')
            this.setState({
              stats: data
            })
            // saving the data to a local storage to access it later
            // sessionStorage.setItem('stats', JSON.stringify(data))
            // console.log('fetched',data)
          })
      })
  }

  render() {
    return (
      <div>
        <h1>Duo Page</h1>
      </div>
    );
  }
}

export default Duo;