import React from 'react'
import Svg from '../Svgs/Svg'
import s from './Button.module.scss'

function Button(props) {
  return (
    <button className={`${s.main} + ${props.classname}`}>
        <Svg type={props.type}/>
         {props.title}
    </button>
  )
}

export default Button