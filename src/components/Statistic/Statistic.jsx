import React from "react";
import PropTypes from "prop-types";
import Notification from "../Notification/Notification";

const Statistic = ({ good, neutral, bad, total, positivePercentage }) => (
  <>
    {total ? (
      <ul>
        <li>Good:{good}</li>
        <li>Neutral:{neutral}</li>
        <li>Bad:{bad}</li>
        <li>Total:{total}</li>
        <li>Positive Feedback:{positivePercentage}%</li>
      </ul>
    ) : (
      <Notification message="No feedback given" />
    )}
  </>
);

Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistic;
