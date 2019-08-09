import React, { Component } from 'react'

class Search extends Component {
  state = {
    loading: true,
    playerName: '',
    soloData: 'p2.br.m0.weekly',
    duoData: 'p10.br.m0.weekly',
    squadsData: 'p9.br.m0.weekly',
    searchData: [],
    titleSearch: '',
    killDeathRatioSearch: '',
    matchesSearch: '',
    winsSearch: '',
    top12Search: '',
    winRateSearch: 0,
    stats: ''
  }
  setValue = e => {
    setState({
      [e.target.name]: e.target.value, 
    })
    console.log(this.state.stats, this.state.playerName)
  }
  fetchData = async e => {
    e.preventDefault
    await _Scout.configure({
      clientId: process.env.REACT_APP_CLIENT_ID,
      clientSecret: process.env.REACT_APP_CLIENT_SECRET,
      scope: 'public.read'
    })

    var titles = await _Scout.titles.list()
    var fortnite = titles.find(t => t.slug === 'fortnite')

    _Scout.players
      .search(`${this.state.playerName}`, 'epic', 'pc', fortnite.id, true, true)
      .then(data => {
        var playerId = data.results[0].player.playerId

        _Scout.players
          .get(fortnite.id, playerId, `${this.state.stats}`)
          .then(data => {
            console.log('Ajax call Done', data)
            this.setState({
              searchData: data,
              titleSearch: data.segments[0].metadata[0].displayValue.split(
                ' ',
                1
              ),
              killsSearch: data.stats[0].displayValue,
              matchesSearch: data.stats[2].displayValue,
              winsSearch: data.stats[5].displayValue,
              top12Search: data.stats[8].displayValue,
              killDeathRatioSearch: data.stats[11].displayValue,
              winRateSearch: Math.round(data.stats[12].value * 100),
              loading: false
            })
          })
      })
  }
  render() {
    return (
      <div>
        <form name="userChoice" onSubmit={e => this.setValue}>
          <input name="playerName" onChange={e => this.setValue} type="text" alt="name" />
          <div>
            <input
              type="radio"
              id="statChoice1"
              name="stats"
              value={this.state.soloData}
            />
            <label for="contactChoice1">Email</label>
            <input
              type="radio"
              id="statChoice2"
              name="stats"
              value={this.state.duoData}
            />
            <label for="contactChoice1">Email</label>
            <input
              type="radio"
              id="statChoice3"
              name="stats"
              value={this.state.squadsData}
            />
            <label for="contactChoice1">Email</label>
          </div>
          <button onClick={e => this.fetchData}>submit</button>
        </form>
      </div>
    )
  }
}

export default Search
