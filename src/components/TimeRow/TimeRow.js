import React, { useState} from 'react';
import styles from './TimeRow.module.css'
import { addCell } from '../../redux/actions/actions'
import { connect } from 'react-redux';

function TimeRow({ start, end, roomId, idRow, addCell, state }) {
  const [rowCellList, setrowCellList] = useState({});
  const timeStartMeeting = (((parseInt(start) - 8) * 60) / 900 * 100).toFixed(1);

  const timeDuration = (start, end) => {
    const minStart = start.split(':').map(Number).reduce((acc, item, i) => acc * 60 + item);
    const minEnd = end.split(':').map(Number).reduce((acc, item) => acc * 60 + item);
    return ((minEnd - minStart) / 900 * 100).toFixed(1)
  }

  const cell = <div className={styles.test} style={{ width: `${timeDuration}%`, left: `${timeStartMeeting}%` }}></div>

 
  return (
    <>
      <div data-id={idRow} className={styles.timerow}>
        {state.idRow}
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  state: state.timeRowReducer
});


const mapDispatchToProps = (dispatch) => {
  return {
    addCell: (roomId, cell) => dispatch(addCell(roomId, cell))
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(TimeRow)
// Отдельно хранить список переговорок
// Отдельно хранить список событий, и в каждом событии хранить ссылку на переговорку
// В стейте храним переговорки, людей, события и дальше внутри компонентов когда вытаскиваем с редакса там уже фильтруем