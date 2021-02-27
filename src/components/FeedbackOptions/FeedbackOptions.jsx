import React from "react";
import PropTypes from "prop-types";
import shortid from "shortid";

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div>
    {options.map((key) => (
      <button
        key={shortid()}
        // className={styles.btn}
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
