import React, { Component } from 'react'
// import Scout from '../scout'
const _Scout = window.Scout

class Solo extends Component {
  state = {
    loading: true,
    soloData: [],
    titleS: '',
    killDeathRatioS: '',
    matchesS: '',
    winsS: '',
    top12S: '',
    winRateS: 0
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
          .get(fortnite.id, playerId, 'p2.br.m0.weekly')
          .then(data => {
            console.log('Ajax call Done', data)
            this.setState({
              soloData: data,
              titleS: data.segments[0].metadata[0].displayValue.split(' ', 1),
              killsS: data.stats[0].displayValue,
              matchesS: data.stats[2].displayValue,
              winsS: data.stats[5].displayValue,
              top12S: data.stats[8].displayValue,
              killDeathRatioS: data.stats[11].displayValue,
              winRateS: Math.round(data.stats[12].value * 100),
              loading: false
            })
          })
      })
  }

  render() {
    return (
      <div>
        <h1 className="title-header">Solo Page</h1>
        <header>
          <div>
            <h2>Solo</h2>
          </div>
          <div>
            <p>split color thing</p>
          </div>
          <div>
            <p>Matches 234</p>
          </div>
          <div>
            <p>Kills 94823</p>
          </div>
        </header>
        <section>
          <div>
            <h1>7.24</h1>
            <p>K/D Ratio</p>
          </div>
          <div>
            <h1>62</h1>
            <p>Wins</p>
          </div>
        </section>
        <section>
          <div>
            <div>
              <div>
                <h3>wins</h3>
                <p>62</p>
              </div>
              <div>status bar</div>
              <div>
                <p>rank #234239754</p>
              </div>
            </div>
            <div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div></div>
        </section>
      </div>
    )
  }
}

export default Solo
