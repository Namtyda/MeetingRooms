import React from 'react';
import './Header.css'
import { Button } from '../Button/Button'
import { Link } from 'react-router-dom'

export function Header(props) {
  const style = {
    marginRight: 24, marginTop: 18, marginBottom: 18, whiteSpace: 'nowrap'
  }
  const buttons = props.buttons ? <Link to='/newmeeting'><Button text='Создать встречу' className='button__primary' style={style} /></Link> : null
  return (
    <header style={props.style} className='header root root__header'>
      <div className='header__logo'></div>
      {buttons}
    </header>
  )
}