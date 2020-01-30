import React from 'react';
import styles from './TimeRow.module.css'

export function TimeRow() {

  return (
    <>
      <div className={styles.timerow}>

      <div className={styles.test}></div>
      <div style={{left: '31%', width: '3%'}} className={styles.test}></div>
      <div style={{left: '25%', width: '5%'}} className={styles.test}></div>
      <div style={{left: '73.2%', width: '5%'}} className={styles.test}></div>
      </div>
    </>
  );
}

// Отдельно хранить список переговорок
// Отдельно хранить список событий, и в каждом событии хранить ссылку на переговорку
// В стейте храним переговорки, людей, события и дальше внутри компонентов когда вытаскиваем с редакса там уже фильтруем