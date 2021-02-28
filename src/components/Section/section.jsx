import React from "react";
import PropTypes from "prop-types";

import styles from './Section.module.scss';

const Section = ({ title, children }) => (
  <div className= {styles.section}>
    <h2 className={styles.title}>{title}</h2>
    {children}
  </div>
);

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
