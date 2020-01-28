import React from 'react';
import { Header } from '../Header/Header'
import { TimeLine } from '../TimeLine/TimeLine'
import { Content } from '../Content/Content'
// import styles from './Home.module.css'


export function Home(props) {
  return (
    <div>
      <Header buttons={true} style={{ marginBottom : 0 }} />
      <TimeLine />
      <Content />
    </div>
  );
}