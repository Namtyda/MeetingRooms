import React from 'react';
import './Button.css'

export function Button(props) {
  const { className, text, style, type, onClick} = props
  return (
    <button onClick={onClick} type={type} className={'button ' + className} style={style}>{text}</button>
  )
}