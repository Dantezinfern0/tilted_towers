import React, { Component } from 'react'
const _Scout = window.Scout

class Scout extends Component {
  // initializing state
  state = {
    stats: {}
  }
  // Creating a bucket to put the data from the API call
  container = []
  // This code waits for the bucket to fill, then puts the data into state so that we can 
  // pass the data to a component via props
  if(container) {
    this.setState({
      stats: container
    })
    console.log(this.state.stats)
  }

  static async init() {
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
            console.log(data.stats)
            // saving the data to a location to access it later
            this.container = data.stats
          })
      })
  }
// added render to the class to create a react component
  render() {
    return (
      <>
        <h1>Stats</h1>
        <div>
          
        </div>
      </>
    )
  }
}

export default Scout
