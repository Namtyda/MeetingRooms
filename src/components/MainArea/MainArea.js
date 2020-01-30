import React  from 'react';
import styles from './MainArea.module.css'
import { TimeRow } from '../TimeRow/TimeRow'
import { connect } from 'react-redux'

function MainArea(props) {
  console.log(props.state.objForm, 'eetet')

  return (
    <div className={styles.mainarea}>
      <div className={styles.toprectangle}>
        <TimeRow id={1} onClick={(e) => console.log(e.currentTarget.dataset.id)}/>
        <TimeRow id={2}/>
        <TimeRow id={3}/>
        <TimeRow id={4}/>
      </div>
      <div className={styles.bottomrectangle}>
        <TimeRow id={5}/>
        <TimeRow id={6}/>
        <TimeRow id={7}/>
        <TimeRow id={8}/>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  state: state.formsReducer
})


export default connect(mapStateToProps, null)(MainArea)




