import React from 'react';
import styles from './Calendar.module.css'

export function Calendar() {
  return (
    <div className={styles.calendar}>
        <button className={styles.button__left}></button>
        <p className={styles.text}>14 дек &bull; Сегодня</p>
        <button className={styles.button__right}></button>
    </div>
  );
}
