import React from 'react';
import styles from './MainArea.module.css'
import TimeRow from '../TimeRow/TimeRow'
import { connect } from 'react-redux';

function MainArea(props) {
  const { start, end, roomId } = props
  return (
    <div className={styles.mainarea}>
      <div className={styles.toprectangle}>
        <TimeRow idRow={1} start={start} end={end} roomId={roomId} />
        <TimeRow idRow={2} start={start} end={end} roomId={roomId} />
        <TimeRow idRow={3} start={start} end={end} roomId={roomId} />
        <TimeRow idRow={4} start={start} end={end} roomId={roomId} />
      </div>
      <div className={styles.bottomrectangle}>
        <TimeRow idRow={5} start={start} end={end} roomId={roomId} />
        <TimeRow idRow={6} start={start} end={end} roomId={roomId} />
        <TimeRow idRow={7} start={start} end={end} roomId={roomId} />
        <TimeRow idRow={8} start={start} end={end} roomId={roomId} />
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  title: state.formsReducer.title,
  date: state.formsReducer.date,
  start: state.formsReducer.start,
  end: state.formsReducer.end,
  personsId: state.formsReducer.personsId,
  roomId: state.formsReducer.roomId
});

export default connect(mapStateToProps)(MainArea)