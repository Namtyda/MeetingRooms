import React from 'react';

export function SuggestList({ persons, onSelectPerson }) {
  return (
    <div className='suggest__dropdown'>
      {persons.map(({ name, floor, avatar, id }) => (
        <span key={id} className='suggest__item' data-id={id} onMouseDown={onSelectPerson}>
          <span className='suggest__name'>{name}</span>
          <span className='suggest__floor'>&sdot; {floor}</span>
          <img className='suggest__avatar' src={avatar} alt='avatar' />
        </span>
      ))}
    </div>
  );
}