import React from 'react';
import './Button.css'

export function Button(props) {
  const { className, text, style } = props
  return (
    <button className={'button ' + className} style={style}>{text}</button>
  )
}