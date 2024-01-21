import React from 'react';
import styles from './feedbackForm.module.css';

const Section = ({ title, children }) => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </div>
  );
};

export default Section;
