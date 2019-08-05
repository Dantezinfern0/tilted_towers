import React, { Component } from 'react'
const _Scout = window.Scout

class Scout extends Component {
  state = {
    stats: []
  }
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
          .get(fortnite.id, playerId, 'p2.br.m0.weekly')
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

  // pull out of session storage and parse back into an object for use
  // gameStats = JSON.parse(sessionStorage.getItem('stats'))
  // log = console.log('parsed', this.gameStats)
  // added _render_ on to the class to create a react component
  render() {
    {
      console.log('render')
    }
    return (
      <>
        <h1>Stats</h1>
        <h2>
          {/* {this.gameStats.metadata[0].key && this.gameStats.metadata[0].key} */}
        </h2>
      </>
    )
  }
}

export default Scout
