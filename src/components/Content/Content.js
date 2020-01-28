import React from 'react';
import styles from './Content.module.css'

export function Content() {
  return (
    <div className={styles.content}>
      <aside className={styles.aside}>
        <div className={styles.topcontainer}>
          <p className={styles.textfloor}>7 этаж</p>
        </div>
        <div className={styles.bottomconteiner}>
          <p className={styles.textfloor}>6 этаж</p>

        </div>
      </aside>
      <div className={styles.mainarea}>

      </div>
    </div>
  );
}