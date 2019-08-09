import React, { Component } from 'react'
import Scout from './Scout.js'
const _Scout = window.Scout

class Search extends Component {
  state = {
    loading: true,
    playerName: 'Ninja  ',
    soloData: 'p2.br.m0.weekly',
    duoData: 'p10.br.m0.weekly',
    squadsData: 'p9.br.m0.weekly',
    dataType: '',
    stats: ''
  }
  // this function is supposed to update the state with user input
  setValue = e => {
    this.setState({
      [e.target.name]: e.target.value, 
    })
    console.log(this.state.stats, this.state.playerName)
  }  
  render() {
    return (
      <div>
        <form className="form-layout" name="userChoice" onSubmit={this.setState({dataType:'radio button that is true'})}>
          <input name="playerName" onChange={e => this.setValue} type="text" alt="name" />
          <div>
            <input
              type="radio"
              id="statChoice1"
              name="stats"
              value={this.state.soloData}
              checked={true}
            />
            <label for="statChoice1">Solo</label>
            <input
              type="radio"
              id="statChoice2"
              name="stats"
              value={this.state.duoData}
              checked={true}
            />
            <label for="statChoice2">Duo</label>
            <input
              type="radio"
              id="statChoice3"
              name="stats"
              value={this.state.squadsData}
              checked={true}
            />
            <label for="statChoice3">Squad</label>
          </div>
          <button onClick={this.setState({loading: false})}>submit</button>
        </form>
        {!this.state.loading && <Scout dataType={this.state.dataType} />}
      </div>
    )
  }
}

export default Search
