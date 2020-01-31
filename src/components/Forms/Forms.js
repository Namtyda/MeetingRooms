import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { Input } from '../Input/Input'
import Suggest from '../Suggest/Suggest'
import { Button } from '../Button/Button'
import RecRooms from '../RecRooms/RecRooms'
import { connect } from 'react-redux'
import { onSubmit } from '../../redux/actions/actions'
import './Forms.css'

// const initialState = {
//   title: '',
//   date: '',
//   start: '00:00',
//   end: '00:00',
// };

function Forms(props) {
  const [formValues, setFormValues] = useState(props.state);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    props.onSubmit(formValues)
  }

  // function handleReset(e) {
  //   e.preventDefault();
  //   props.onSubmit(initialState);
  // }


  return (
    <form onSubmit={handleSubmit} className='forms'>
      <div className='forms__header'>
        <h3 className='forms__title'>Новая встреча</h3>
        <Link to='/'><button className='forms__close' /></Link>
      </div>
      <div className='container'>
        <div className='forms__wrapper'>
          <div className='forms__left'>
            <Input className='forms__theme' title='Тема' name='title' value={formValues.title} type='text' onChange={handleChange} placeholder='О чем будете говорить?' />
            <Suggest />
          </div>
          <div className='forms__right'>
            <Input className='forms__date' title='Дата' name='date' value={formValues.date} type='date' onChange={handleChange} width={238} />
            <Input className='forms__start' title='Начало' name='start' value={formValues.start} type='text' onChange={handleChange} width={72} />
            &minus;
          <Input className='forms__end' title='Конец' name='end' type='text' value={formValues.end} onChange={handleChange} width={72} />
            <RecRooms start={formValues.start} end={formValues.end} />
          </div>
        </div>
        <footer className='forms__footer'>
          <Link to='/'><Button className='button__secondary forms__button' text='Отмена' /></Link>
          <Link to='/'><Button className='button__primary' text='Создать встречу' onClick={handleSubmit} /></Link>
        </footer>
      </div>
    </form>
  );
}
const mapStateToProps = (state) => ({
  state: state.formsReducer,
});

const mapDispatcToProps = (dispatch) => {
  return {
    onSubmit: (objForm) => dispatch(onSubmit(objForm))
  }
}

export default connect(mapStateToProps, mapDispatcToProps)(Forms)