import React from 'react';
import styles from './TimeLine.module.css';
import { Calendar } from '../Calendar/Calendar'

export function TimeLine() {
  const times = ['8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'];
  const div = times.map(item => <div className={styles.time} key={item}>{item}</div>)
  
  return (
    <div className={styles.timeline}>
      <Calendar />
      {div}
    </div>
  );
}