import React from 'react';
import './Input.css'

export function Input(props) {
  const { title, type, placeholder, value, onChange, name, width = 420, className= '', onFocus, onBlur} = props;
  return (
    <label className={'input ' + className}>
      <span className='input__title'>{title}</span>
      <input name={name} type={type} className='input__field' onFocus={onFocus} onChange={onChange} onBlur={onBlur} value={value} placeholder={placeholder} style={{width: width}}/>
    </label>
  );
}