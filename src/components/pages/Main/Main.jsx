import {useState} from 'react'
import s from './Main.module.scss'
import Container from '../../Container/Container'
import Select from 'react-select'
import Svg from '../../Svgs/Svg'
import Filter from './Filter/Filter'

function Main() {


  return (
    <div className={s.main}>
      <Container>
        <div className={s.start}>
            <h1 className={s.h1}>Sdaem.by - у нас живут <span>ваши объявления</span></h1>
            <Filter/>
        </div>
      </Container>
    </div> 
  )
}

export default Main