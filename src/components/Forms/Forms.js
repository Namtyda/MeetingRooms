import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom'
import { Input } from '../Input/Input'
import { Suggest } from '../Suggest/Suggest'
import { Button } from '../Button/Button'
import { RecRooms } from '../RecRooms/RecRooms'
import './Forms.css'

const initialState = {
  title: '',
  date: '',
  start: '00:00',
  end: '00:00',
  personsIds: [],
  roomId: null
};

export function Forms() {
  const [formValues, setFormValues] = useState(initialState);
  const setFormValue = useCallback((name, value) => setFormValues((prev) => ({ ...prev, [name]: value })), []);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formValues);
  }

  function handleReset(e) {
    e.preventDefault();
    setFormValues(initialState);
  }

  const setSelectedPersonsIds = useCallback((value) => setFormValue('personsIds', value), [setFormValue]);
  const setSelectedRooms = useCallback((value) => setFormValue('roomId', value), [setFormValue]);
  
  return (
    <form className='forms' onSubmit={handleSubmit} onReset={handleReset}>
      <div className='forms__header'>
        <h3 className='forms__title'>Новая встреча</h3>
        <Link to='/'><button className='forms__close' /></Link>
      </div>
      <div className='container'>
        <div className='forms__wrapper'>
          <div className='forms__left'>
            <Input className='forms__theme' title='Тема' name='title' value={formValues.title} type='text' onChange={handleChange} placeholder='О чем будете говорить?' />
            <Suggest onPersonsIdsChange={setSelectedPersonsIds} />
          </div>
          <div className='forms__right'>
            <Input className='forms__date' title='Дата' name='date' value={formValues.date} type='date' onChange={handleChange} width={238} />
            <Input className='forms__start' title='Начало' name='start' value={formValues.start} type='text' onChange={handleChange} width={72} />
            &minus;
          <Input className='forms__end' title='Конец' name='end' type='text' value={formValues.end} onChange={handleChange} width={72} />
            <RecRooms start={formValues.start} end={formValues.end} onRoomsIdChange={setSelectedRooms} />
          </div>
        </div>
        <footer className='forms__footer'>
          <Link to='/'><Button className='button__secondary forms__button' text='Отмена' /></Link>
          <Button className='button__primary' text='Создать встречу' />
        </footer>
      </div>
    </form>
  );
}
