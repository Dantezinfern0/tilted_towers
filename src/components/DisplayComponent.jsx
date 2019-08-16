// This is the Display Model/Component for that stat box
import React, { Component } from 'react'

class DisplayComponent extends Component {
  render() {
    return (
      <div>
        <div className=" ">
          <header className={`header-flex ${this.props.classColorDark}`}>
            <div className={` ${this.props.classColorLight}`}>
              <h2 className="">{this.props.title}</h2>
            </div>
            <div className={`${this.props.classGradient}`}>
              <p className="" />
            </div>
            <div className="">
              <p className="">Matches </p>
              <h2 className="">{this.props.matches}</h2>
            </div>
            <div className="">
              <p className="">Kills </p>
              <h2 className="">{this.props.kills}</h2>
            </div>
          </header>
          <section className={` ${this.props.classColor}`}>
            <div>
              <h1 className="">{this.props.killDeathRatio}</h1>
              <p>K/D Ratio</p>
            </div>
            <div>
              <h1 className="">{this.props.wins}</h1>
              <p>Wins</p>
            </div>
          </section>
          <section className="">
            <div className="">
              <div className="">
                <div className="">
                  <h3>wins</h3>
                  <p>{this.props.wins}</p>
                </div>
              </div>
              <hr />
              <div>
                <div className="">
                  <h3>Win Rate</h3>
                  <p>{this.props.winRate}%</p>
                </div>
              </div>
              <hr />
              <div>
                <div className="">
                  <h3>Matches</h3>
                  <p>{this.props.matches}</p>
                </div>
              </div>
              <hr />
            </div>
            </section>
            <section>
            <div className="">
              <div>
                <div className="">
                  <h3>{this.props.topName}</h3>
                  <p>{this.props.top}</p>
                </div>
              </div>
              <hr />
              <div>
                <div className="">
                  <h3>K/D Ratio</h3>
                  <p className="">{this.props.killDeathRatio}</p>
                </div>
              </div>
              <hr />
              <div>
                <div className="">
                  <h3>Kills</h3>
                  <p className="">{this.props.kills}</p>
                </div>
              </div>
              <hr />
            </div>
          </section>
        </div>
      </div>
    )
  }
}

export default DisplayComponent
