import { Component } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

const options = ['good', 'bad', 'neutral'];

export class App extends Component {
  state = {
    good: 0,
    bad: 0,
    neutral: 0,
  };

  onHandleClick = btnName => {
    this.setState(prevState => ({ [btnName]: prevState[btnName] + 1 }));
  };

  countTotalFeedback = () => {
    return options.reduce((acc, option) => acc + this.state[option], 0);
  };

  countPositiveFeedbackPercentage = sum => {
    const { good, bad, neutral } = this.state;
    if (bad + neutral + good === 0) return null;
    if (bad + neutral === 0) return '100%';
    // return ((this.state['good'] / sum) * 100).toFixed(2) + '%';
    return Math.floor((this.state['good'] / sum) * 10000) / 100 + '%';
  };

  render() {
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage(total);
    const { good, bad, neutral } = this.state;

    return (
      <>
        <div className="controls">
          <Section title="Please Leave FeedBack">
            <FeedbackOptions
              options={options}
              onLeaveFeedback={this.onHandleClick}
            />
          </Section>
        </div>
        <Section title="Statistics">
          {positivePercentage ? (
            <Statistics
              options={options}
              good={good}
              bad={bad}
              neutral={neutral}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}
