import React, { useState, useEffect } from 'react';
import { Input } from '../Input/Input'
import { fetchPersons } from '../FakeAPI/FakeAPI'
import { SuggestList } from './SuggestList'
import './Suggest.css'

export function Suggest({ onPersonsIdsChange }) {
  const [persons, setPersons] = useState([]);
  const [selectedPersons, setSelectedPersons] = useState([]);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    setPersons(prev => prev.filter(({ id }) => !selectedPersons.some((p) => id === p.id)));
  }, [selectedPersons]);

  useEffect(() => {
    onPersonsIdsChange(selectedPersons.map(({ id }) => id));
  }, [selectedPersons, onPersonsIdsChange]);

  async function search(e) {
    const { value } = e.target;
    const data = await fetchPersons(value);
    setPersons(data);
  }

  function handleSelectPerson(event) {
    const { dataset } = event.currentTarget;
    const id = Number(dataset.id);
    const selected = persons.find(item => item.id === id);
    setSelectedPersons((prevState) => ([...prevState, selected]));
  }

  function deleteCard(id) {
    setSelectedPersons(prev => prev.filter(item => item.id !== id));
  }

  function prepareSuggestCard(item) {
    return item.map(({ name, avatar, id }) => {
      return (
        <div key={id} className='suggest__list-item'>
          <img className='suggest__avatar' src={avatar} alt='avatar' style={{ left: -2, top: -6 }} />
          <span className='suggest__list-name'>{name}</span>
          <button className='forms__close' onClick={() => deleteCard(id)} />
        </div>
      );
    });
  }

  function openDropDown(e) {
    setIsFocused(true);
  }

  function closeDropDown() {
    setIsFocused(false);
  }

  return (
    <div>
      <Input title='Участники' name='date' type='text' placeholder='Например, Тор' onChange={search} onFocus={openDropDown} onBlur={closeDropDown} />
      {isFocused && persons.length > 0 && (
        <SuggestList persons={persons} onSelectPerson={handleSelectPerson} />
      )}
      <div className="suggest__list">
        {prepareSuggestCard(selectedPersons)}
      </div>
    </div>
  )
}

