import { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleX = type => {
    this.setState(prevState => {
      return {
        [type]: prevState[type] + 1,
      };
    });
  };
  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div>
        <p>Please leave feedback</p>
        <button onClick={() => this.handleX('good')}>Good</button>
        <button onClick={() => this.handleX('neutral')}>Neutral</button>
        <button onClick={() => this.handleX('bad')}>Bad</button>
        <Statistics good={good} neutral={neutral} bad={bad} />
      </div>
    );
  }
}
