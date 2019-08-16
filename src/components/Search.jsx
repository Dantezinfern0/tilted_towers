import React, { Component } from 'react'
import Scout from './Scout.js'

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      playerName: 'Ninja',
      soloData: 'p2.br.m0.weekly',
      duoData: 'p10.br.m0.weekly',
      squadsData: 'p9.br.m0.weekly',
      dataType: ''
    }
  }
  // this function is supposed to update the state with user input
  setValue = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
    console.log(this.state.stats, this.state.playerName)
  }
  // I think I need a function to handle the radio buttons onSubmit here
  // psuedo-code:
  // setRadio(){if (statChoice1 === true)  setState({dataType: this.state.soloData})}
  radioState = e => {
    if (e.target.checked === true) {
      this.setState({
        dataType: e.target.name,
      })
    } 
    }
  
  render() {
    return (
      <div>
        <form
          className="form-layout"
          name="userChoice"
          // onSubmit={this.setState({ dataType: 'radio button that is true' })}
        >
          <div className=" title-header">
            <h1>Enter Player Name</h1>
          
            <input
              name="playerName"
              onChange={e => this.setValue}
              type="text"
              alt="name"
            />
          </div>
          <div>
            <input

              type="radio"
              id="statChoice1"
              name="Solo"
              value={this.state.soloData}
              // checked={true}
            />
            <label for="statChoice1">Solo</label>
            <input

              type="radio"
              id="statChoice2"
              name="Duo"
              value={this.state.duoData}
              // checked={true}
            />
            <label for="statChoice2">Duo</label>
            <input

              type="radio"
              id="statChoice3"
              name="Squad"
              value={this.state.squadsData}
              // checked={true}
            />
            <label for="statChoice3">Squad</label>
          </div>
          <button onClick={() => this.setState({ loading: false })}>
            submit
          </button>
        </form>
        {/* I will need to include the color scheme and unique classes below */}
        {!this.state.loading && <Scout dataType={this.state.dataType} />}
      </div>
    )
  }
}

export default Search
