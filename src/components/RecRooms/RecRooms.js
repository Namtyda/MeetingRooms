import React, { useState } from 'react';
import './RecRooms.css'

const initialState = [
  { name: 'Ржавый Фред', floor: '7 этаж', id: 1 },
  { name: 'Прачечная', floor: '7 этаж', id: 2 },
  { name: 'Желтый дом', floor: '4 этаж', id: 3 },
  { name: 'Оранжевый Тюльпан', floor: '7 этаж', id: 4 },
  { name: 'Джокер', floor: '6 этаж', id: 5 },
  { name: 'Мариванна', floor: '6 этаж', id: 6 },
  { name: 'Тонкий Боб', floor: '6 этаж', id: 7 },
  { name: 'Чёрная вдова', floor: '6 этаж', id: 8 },
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