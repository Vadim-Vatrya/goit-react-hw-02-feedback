import React, { Component } from "react";
import PropTypes from "prop-types";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";

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

  handleFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };

  render() {
    // const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    return (
      <FeedbackOptions
        options={options}
        onLeaveFeedback={this.handleFeedback}
      />
    );
  }
}

export default App;
