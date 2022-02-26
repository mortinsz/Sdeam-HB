import Svg from '../Svgs/Svg'
import s from './Search.module.scss'
import {useState} from 'react'
function Search(props) {

  return (
    <div className={s.main}>
        <input className={s.searchInput} placeholder={props.title} />
        <button className={s.button}>
            <Svg type='search'/> 
        </button>
    </div>
  )
}

export default Search