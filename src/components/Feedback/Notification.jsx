import React from "react";
import styles from './feedbackForm.module.css'


const Notification = ({message}) => {
    return <p className={styles.text}>{message}</p>;
};

export default Notification;