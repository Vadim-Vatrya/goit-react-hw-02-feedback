import React from "react";
import PropTypes from "prop-types";
import shortid from "shortid";

import styles from './FeedbackOptions.module.scss'

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div>
    {options.map((key) => (
      <button
        key={shortid()}
        className={styles.button}
        name={key}
        onClick={onLeaveFeedback}
      >
        {key}
      </button>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
