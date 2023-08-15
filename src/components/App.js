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
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total === 0 ? 0 : (good / total) * 100;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();
    return (
      <div>
        <p>Please leave feedback</p>
        <button onClick={() => this.handleX('good')}>Good</button>
        <button onClick={() => this.handleX('neutral')}>Neutral</button>
        <button onClick={() => this.handleX('bad')}>Bad</button>
        <Statistics good={good} neutral={neutral} bad={bad} />
        <p>Total feedback: {totalFeedback}</p>
        <p>Positive feedback: {positiveFeedbackPercentage.toFixed(2)}%</p>
      </div>
    );
  }
}
