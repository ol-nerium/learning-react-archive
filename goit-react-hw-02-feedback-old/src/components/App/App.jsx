import React, { Component } from "react";
import PropTypes from "prop-types";

import Statistics from "../Statistics";
import FeedbackOptions from "../FeedbackOptions";
import Section from "../Section";
import Notification from "../Notification";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = (value) => {
    this.setState((prevState) => {
      return { [value]: prevState[value] + 1 };
    });
  };

  countTotalFeedback() {
    return Object.values(this.state).reduce((acc, value) => acc + value, 0);
  }

  countPositiveFeedbackPercentage() {
    return this.state.good === 0
      ? 0
      : Number.parseInt((this.state.good / this.countTotalFeedback()) * 100);
  }

  render() {
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    const options = Object.keys(this.state);
    const statistics = Object.entries(this.state);

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          {Boolean(total) && (
            <Statistics
              statistics={statistics}
              total={total}
              positivePercentage={positivePercentage}
            />
          )}
          {!total && <Notification message="There is no feedback" />}
        </Section>
      </>
    );
  }
}

export default App;

Section.propTypes = { title: PropTypes.string };

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
};

Statistics.propTypes = {
  statistics: PropTypes.arrayOf(PropTypes.array),
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

Notification.propTypes = {
  message: PropTypes.string,
};
