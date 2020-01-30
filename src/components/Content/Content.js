import React from 'react';
import styles from './Content.module.css'
import { MainArea } from '../MainArea/MainArea'

export function Content() {


  return (
    <div className={styles.content}>
      <aside className={styles.aside}>
        <div className={styles.topcontainer}>
          <p className={styles.textfloor}>7 этаж</p>
          <div>
            <p className={styles.roomsname}>Ржавый Фред</p>
            <p className={styles.roomscapacity}>3-6 человек</p>
          </div>
          <div>
            <p className={styles.roomsname}>Прачечная</p>
            <p className={styles.roomscapacity}>до 10 человек</p>
          </div>
          <div>
            <p className={styles.roomsname}>Желтый дом</p>
            <p className={styles.roomscapacity}>до 10 человек</p>
          </div>
          <div>
            <p className={styles.roomsname}>Оранжевый тюльпан</p>
            <p className={styles.roomscapacity}>до 10 человек</p>
          </div>
        </div>
        <div className={styles.bottomconteiner}>
          <p className={styles.textfloor}>6 этаж</p>
          <div>
            <p className={styles.roomsname}>Джокер</p>
            <p className={styles.roomscapacity}>3-6 человек</p>
          </div>
          <div>
            <p className={styles.roomsname}>Мариванна</p>
            <p className={styles.roomscapacity}>3-6 человек</p>
          </div>
          <div>
            <p className={styles.roomsname}>Тонкий Боб</p>
            <p className={styles.roomscapacity}> 3-6 человек</p>
          </div>
          <div>
            <p className={styles.roomsname}>Черная вдова</p>
            <p className={styles.roomscapacity}>3-6 человек</p>
          </div>
        </div>
      </aside>
      <MainArea />
    </div>
  );
}