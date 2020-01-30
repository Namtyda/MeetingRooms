import React, { useRef } from 'react';
import styles from './MainArea.module.css'
import { TimeRow } from '../TimeRow/TimeRow'

export function MainArea() {


  const myRef = useRef()
  console.log(myRef.current, 'ref')

  return (
    <div className={styles.mainarea}>
      <div className={styles.toprectangle}>
        <TimeRow />
        <TimeRow />
        <TimeRow />
        <TimeRow />
      </div>
      <div className={styles.bottomrectangle}>
        <TimeRow />
        <TimeRow />
        <TimeRow />
        <TimeRow />
      </div>
    </div>
  )
}