import Svg from '../Svgs/Svg'
import s from './Search.module.scss'
import {useState} from 'react'
function Search(props) {


  const [inputValue, setInputValue] = useState('')

  let onChangeInput = (e) => {
    setInputValue(e.target.value)
    console.log(inputValue)
  }
  return (
    <div className={s.main}>
        <input className={s.searchInput} onChange={onChangeInput} placeholder={props.title} value={inputValue}/>
        <button className={s.button}>
            <Svg type='search'/> 
        </button>
    </div>
  )
}

export default Search