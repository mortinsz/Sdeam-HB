import React from 'react'
import s from './Button.module.scss'

function Button(props) {
  return (
    <button className={s.main}>
         {props.title}
    </button>
  )
}

export default Button