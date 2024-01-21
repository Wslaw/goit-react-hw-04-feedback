import React from 'react';
import styles from './feedbackForm.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={styles.action}>
      {options.map(option => (
        <button
          onClick={() => onLeaveFeedback(option)}
          key={option}
          type="button"
          className={styles.btn}
        >
          {option}
        </button>
      ))}
    </div>
  );
};


export default FeedbackOptions;
