import React, { useRef } from 'react';
import styles from './MainArea.module.css'

export function MainArea() {

  const myRef = useRef()
  console.log(myRef.current, 'ref')

  return (
    <div className={styles.mainarea}>
      <div className={styles.toprectangle}>
        <div className={styles.rooms__row}>
          <div className={styles.test}></div>
        </div>
        <div className={styles.rooms__row}>Test2</div>
        <div className={styles.rooms__row}>Test3</div>
        <div className={styles.rooms__row}>Test4</div>
      </div>
      <div className={styles.bottomrectangle}>
        <div className={styles.rooms__row}>Test1</div>
        <div className={styles.rooms__row}>Test2</div>
        <div className={styles.rooms__row}>Test3</div>
        <div className={styles.rooms__row}>Test4</div>
      </div>
    </div>
  )
}