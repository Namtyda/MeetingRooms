import React, { useState, useEffect } from 'react';
import { Input } from '../Input/Input'
import { SuggestList } from './SuggestList'
import { connect } from 'react-redux'
import { inputChanged } from '../../redux/suggest-reducer'

import './Suggest.css'

const Suggest = (props) => {
  const { onPersonsIdsChange, state } = props;

  const [persons, setPersons] = useState(state.people);
  const [selectedPersons, setSelectedPersons] = useState([]);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    setPersons(prev => prev.filter(({ id }) => !selectedPersons.some((p) => id === p.id)));
  }, [selectedPersons]);

  useEffect(() => {
    onPersonsIdsChange(selectedPersons.map(({ id }) => id));
  }, [selectedPersons, onPersonsIdsChange]);



  // let search = (e) => {
  //   // const { value } = e.target;
  //   const newList = persons.filter((onePerson) => {
  //     return onePerson.name.toLowerCase().includes(state.searchPeople.toLowerCase())
  //   });
  //   setPersons(newList);
  // }

 

  // async function searchOld(e) {
  //   const { value } = e.target;
  //   const data = await fetchPersons(value);
  //   setPersons(data);
  // }

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

  let filterPeople = persons.filter((onePerson) => {
    return onePerson.name.toLowerCase().includes(state.searchPeople.toLowerCase())
  });
 
  return (
    <div>
      <Input title='Участники'
        name='date'
        type='text'
        placeholder='Например, Тор'
        value={state.searchPeople}
        onChange={state.inputChanged}
        onFocus={openDropDown}
        onBlur={closeDropDown}
      />
      {isFocused && persons.length > 0 && (
        <SuggestList persons={persons.slice(0, 10)} onSelectPerson={handleSelectPerson} />
      )}
      <div className="suggest__list">
        {prepareSuggestCard(selectedPersons)}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  state: state.suggestReducer
})

const mapDispatchToProps = (dispatch) => {
  return {
    inputChanged: (e) => {
      dispatch(inputChanged(e))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Suggest)
