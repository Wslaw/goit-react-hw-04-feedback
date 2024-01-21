import React from 'react';
import styles from './feedbackForm.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className={styles.result}>
      <p className={styles.text}>Good: {good}</p>
      <p className={styles.text}>Neutral: {neutral}</p>
      <p className={styles.text}>Bad: {bad}</p>
      <p className={styles.text}>Total: {total}</p>
      <p className={styles.text}>
        Positive feedback percentage: {positivePercentage}%
      </p>
    </div>
  );
};

export default Statistics;
