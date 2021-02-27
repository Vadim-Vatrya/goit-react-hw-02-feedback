// import React, { Component } from "react";
// import PropTypes from "prop-types";

// import FeedbackOptions from "./components/FeedbackOptions";
// import Statistic from "./components/Statistic";
// import Section from "./components/Section";

// class App extends Component {
//   static defaultProps = {
//     initialGood: 0,
//     initialNeutral: 0,
//     initialBad: 0,
//   };

//   static propTypes = {
//     initialGood: PropTypes.number,
//     initialNeutral: PropTypes.number,
//     initialBad: PropTypes.number,
//   };

//   state = {
//     good: this.props.initialGood,
//     neutral: this.props.initialNeutral,
//     bad: this.props.initialBad,
//   };

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     const total = good + neutral + bad;
//     return total;
//   };

//   handleFeedback = (event) => {
//     const name = event.target.textContent;
//     this.setState((prevState) => ({ [name]: prevState[name] + 1 }));
//   };

//   countPositiveFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     const percentPositiveFeedback = Math.round(
//       (good / (good + neutral + bad)) * 100 || 0
//     );
//     return percentPositiveFeedback;
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     const countTotalFeedback = this.countTotalFeedback;
//     const countPositiveFeedback = this.countPositiveFeedback;
//     const options = Object.keys(this.state);
//     return (
//       <div>
//         <Section title={"Please leave feedback"}>
//           <FeedbackOptions
//             options={options}
//             onLeaveFeedback={this.handleFeedback}
//           />
//         </Section>

//         <Section title={"Statistics"}>
//           <Statistic
//             good={good}
//             neutral={neutral}
//             bad={bad}
//             total={countTotalFeedback()}
//             positivePercentage={countPositiveFeedback()}
//           />
//         </Section>
//       </div>
//     );
//   }
// }

// export default App;

import React, { useState } from 'react';

import FeedbackOptions from './components/FeedbackOptions';
import Statistic from './components/Statistic';
import Section from './components/Section';

function App() {
  // const [state, setState] = useState({
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // });

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  // const options = Object.keys(state);

  const countTotalFeedback = () => {
    // const { good, neutral, bad } = state;
    const total = good + neutral + bad;
    return total;
  };

  const handleFeedback = event => {
    const name = event.target.textContent;
    switch (name) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
        break;
    }
  };

  const countPositiveFeedback = () => {
    // const { good, neutral, bad } = state;
    const percentPositiveFeedback = Math.round(
      (good / (good + neutral + bad)) * 100 || 0,
    );
    return percentPositiveFeedback;
  };

  return (
    <div>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleFeedback}
        />
      </Section>

      <Section title={'Statistics'}>
        <Statistic
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedback()}
        />
      </Section>
    </div>
  );
}

export default App;
