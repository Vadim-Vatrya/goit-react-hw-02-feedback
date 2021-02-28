import React from "react";
import PropTypes from "prop-types";

import styles from './Notification.module.scss'

const Notification = ({ message }) => <p className={styles.notification}>{message}</p>;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
