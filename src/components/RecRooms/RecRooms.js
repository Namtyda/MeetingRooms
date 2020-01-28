import React, { useState } from 'react';
import './RecRooms.css'

const initialState = [
  { name: 'Голем', floor: '4 этаж', id: 1 },
  { name: 'Поле непаханное', floor: '4 этаж', id: 2 },
  { name: 'Темная башня', floor: '4 этаж', id: 3 },
  { name: 'Темная башня', floor: '4 этаж', id: 4 },
];

export function RecRooms({ start, end, onRoomsIdChange }) {
  const [listItem, setListItem] = useState(initialState);
  const [isActive, setIsActive] = useState('');

  function addItem(listItem) {

    return listItem.map(({ name, floor, id }) => {
      return (
        <div key={id} className={'rooms__item ' + (isActive && 'rooms__isActive')} onMouseDown={() => selectItem(id)}>
          <div>
            <span className='rooms__time'>{start} &mdash; {end}</span>
            <span className='rooms__name'>{name} &sdot; {floor}</span>
          </div>
          <button className={'rooms__close ' + (isActive && 'rooms__button_isActive')} onClick={closeSelect} />
        </div>
      )
    });
  }

  function selectItem(itemId) {
    setListItem((prev) => {
      return prev.filter(({ id }) => id === itemId)
    });
    setIsActive('Active');
    onRoomsIdChange(itemId)
  }

  function closeSelect() {
    setListItem([...initialState]);
    setIsActive('');
  }

  return (
    <div>
      <span className='input__title'>Рекомендованные переговорки</span>
      <div className='rooms__list'>
        {addItem(listItem)}
      </div>
    </div>
  )
}