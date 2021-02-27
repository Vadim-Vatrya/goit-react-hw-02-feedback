import React, { Component } from "react";
import PropTypes from "prop-types";

import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Statistic from "./components/Statistic/Statistic";

class App extends Component {
  static defaultProps = {
    initialGood: 0,
    initialNeutral: 0,
    initialBad: 0,
  };

  static propTypes = {
    initialGood: PropTypes.number,
    initialNeutral: PropTypes.number,
    initialBad: PropTypes.number,
  };

  state = {
    good: this.props.initialGood,
    neutral: this.props.initialNeutral,
    bad: this.props.initialBad,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };

  handleFeedback = (event) => {
    const name = event.target.textContent;
    this.setState((prevState) => ({ [name]: prevState[name] + 1 }));
  };

  countPositiveFeedback = () => {
    const { good, neutral, bad } = this.state;
    const percentPositiveFeedback = Math.round(
      (good / (good + neutral + bad)) * 100 || 0
    );
    return percentPositiveFeedback;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const countTotalFeedback = this.countTotalFeedback;
    const countPositiveFeedback = this.countPositiveFeedback;
    const options = Object.keys(this.state);
    return (
      <div>
        <FeedbackOptions
          options={options}
          onLeaveFeedback={this.handleFeedback}
        />
        <Statistic
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedback()}
        />
      </div>
    );
  }
}

export default App;
