import React, { Component } from 'react';
import Display from './Display';

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      swing: ['strike', 'ball', 'foul', 'hit'],
      fouls: 0,
      strikes: 0,
      balls: 0,
      status: ''
    };
  }
  swing = () => {
    let swingType = this.state.swing[
      Math.floor(Math.random() * this.state.swing.length)
    ];
    const { fouls, strikes, balls } = this.state;
    if (swingType === 'strike') {
      if (strikes <= 1) {
        this.setState(prevState => {
          return { strikes: prevState.strikes + 1, status: swingType };
        });
      }
      if (strikes === 2) {
        this.setState({ fouls: 0, strikes: 0, balls: 0, status: 'out' });
      }
    }
    if (swingType === 'ball') {
      if (balls <= 3) {
        this.setState(prevState => {
          return { balls: prevState.balls + 1, status: swingType };
        });
      }
      if (balls === 3) {
        this.setState({ fouls: 0, strikes: 0, balls: 0, status: 'walk' });
      }
    }
    if (swingType === 'foul') {
      if (fouls >= 2 && strikes === 2) {
        this.setState(prevState => {
          return { fouls: prevState.fouls + 1, status: swingType };
        });
      } else {
        this.setState(prevState => {
          return {
            fouls: prevState.fouls + 1,
            strikes: prevState.strikes + 1,
            status: swingType
          };
        });
      }
    }
    if (swingType === 'hit') {
      this.setState({ fouls: 0, strikes: 0, balls: 0, status: swingType });
    }
  };
  render() {
    const { fouls, strikes, balls } = this.state;
    return (
      <div>
        <Display fouls={fouls} strikes={strikes} balls={balls} />
        <h3>Hello from Dashboard</h3>
        <h2 data-testid="hit-status">{this.state.status}</h2>
        <button onClick={this.swing}>Swing</button>
      </div>
    );
  }
}
