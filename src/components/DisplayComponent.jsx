// This is the Display Model/Component for that stat box
import React, { Component } from 'react';

class DisplayComponent extends Component {
  render() {
    return (
        <div>
        <div className="entire-stat-box thin-gray-border">
          <header className={`header-flex ${this.props.classColorDark}`}>
            <div className={`header-box-one ${this.props.classColorLight}`}>
              <h2 className="spacing">{this.props.name}</h2>
            </div>
            <div className={`${this.props.classGradient}`}>
              <p className="gradient-color-orange"></p>
            </div>
            <div className="header-box-three spacing">
              <h2>Matches </h2>
              <h2 className="margin-left-one">{this.props.matches}</h2>
            </div>
            <div className="header-box-three">
              <h2>Kills </h2>
              <h2 className="margin-left-one">{this.props.kills}</h2>
            </div>
          </header>
          <section className={`sub-header-flex ${this.props.classColor}`}>
            <div className="sub-header-box-one">
              <h1 className="bold-font-weight">{this.props.killDeathRatio}</h1>
              <p>K/D Ratio</p>
            </div>
            <div className="sub-header-box-two">
              <h1 className="bold-font-weight">{this.props.wins}</h1>
              <p>Wins</p>
            </div>
          </section>
          <section className="flex-box-three">
            <div className="spacing">
              <div className="padding-left-right">
                <div className="flex-between">
                  <h3 className="margin-box">wins</h3>
                  <p className="top-margin">{this.props.wins}</p>
                </div>
              </div>
              <hr/>
              <div>
                <div className="flex-between">
                  <h3>Win Rate</h3>
                  <p className="top-margin">{this.props.winRate}%</p>
                </div>
              </div>
              <hr/>
              <div>
                <div className="flex-between">
                  <h3>Matches</h3>
                  <p className="top-margin">{this.props.matches}</p>
                </div>
              </div>
              <hr/>
            </div>
            <div className="spacing">
              <div className="margin-box">
                <div className="flex-between">
                  <h3>Top6</h3>
                  <p className="top-margin">={this.props.top}</p>
                </div>
              </div>
              <hr/>
              <div>
                <div className="flex-between">
                  <h3>K/D Ratio</h3>
                  <p className="top-margin">{this.props.killDeathRatio}</p>
                </div>
              </div>
              <hr/>
              <div>
                <div className="flex-between">
                  <h3>Kills</h3>
                  <p className="top-margin">{this.props.kills}</p>
                </div>
              </div>
              <hr/>
            </div>
          </section>
        </div>
      
      </div>
    );
  }
}

export default DisplayComponent;