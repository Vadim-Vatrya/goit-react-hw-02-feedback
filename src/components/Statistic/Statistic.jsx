import React from "react";
import PropTypes from "prop-types";
import Notification from "../Notification";

import styles from './Statistic.module.scss'

const Statistic = ({ good, neutral, bad, total, positivePercentage }) => (
  <>
    {total ? (
      <ul>
        <li className={styles.item}>Good:{good}</li>
        <li className={styles.item}>Neutral:{neutral}</li>
        <li className={styles.item}>Bad:{bad}</li>
        <li className={styles.item}>Total:{total}</li>
        <li className={styles.item}>Positive Feedback:{positivePercentage}%</li>
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
