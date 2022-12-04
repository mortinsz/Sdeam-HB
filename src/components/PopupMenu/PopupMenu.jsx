import React from 'react'
import s from './PopupMenu.module.scss'
import { NavLink } from 'react-router-dom'
import Svg from '../Svgs/Svg'


function PopupMenu(props) {
  const headerTop = {
    nav: [
        {
            id: 1,
            name: 'Главная',
            link: '/',
            svg: '',
            classNameSvg: false
        },
        {
            id: 2,
            name: 'Новости',
            link: '/',
            svg: '',
            classNameSvg: false
        },
        {
            id: 3,
            name: 'Размещение и тарифы',
            link: '/rate',
            svg: '',
            classNameSvg: false,
        },
        {
            id: 4,
            name: 'Объявления на карте',
            link: '/map',
            svg: 'map',
            classNameSvg: true
        },
        {
            id: 5,
            name: 'Контакты',
            link: '/contacts',
            svg: '',
            classNameSvg: false
        }
    ]
    
    

}
const headerBottom = {
  logo: '../assets/images/logo.png',
  nav: [
    {
      id: '1',
      name: 'Квартиры на сутки',
      link: '/',
      svg: 'map',
      classNameSvg: true
    },
    {
      id: '2',
      name: 'Коттеджи и усадьбы',
      link: "/",
      svg: '',
      classNameSvg: false
    },
    {
      id: '3',
      name: 'Бани и Сауны',
      link: "/",
      svg: '',
      classNameSvg: false
    },
    {
      id: '4',
      name: 'Авто напрокат',
      link: "/",
      svg: '',
      classNameSvg: false
    }
  ],
  buttom: '+ Разместить объявление'
}
const closeNav = () => {
  props.popopen = false
}
let navTop = headerTop.nav.map( ht => 
  <li className={s.link} key={ht.id}>
      <NavLink to={ht.link} className={s.menulink} onClick={closeNav}>
          <div className={`${ht.classNameSvg && s.linksvg}`} >
              <Svg type={ht.svg}/>
          </div>
          <div className={s.linktext}>{ht.name}</div>
      </NavLink>
  </li>
   )
   let navBottom = headerBottom.nav.map( hb => 
    <li className={s.linkBold} key={hb.id}>
       <NavLink to={hb.link} className={s.menulink} onClick={closeNav}>
           <div className={s.linktext}>{hb.name}</div>
           <div className={`${hb.classNameSvg && s.linksvg}`}>
               <Svg type={hb.svg} key={hb.id} svgClass={s.svg}/>
           </div>
       </NavLink>
     </li>)
  return (
    <div className={props.popopen ? s.open : s.close}>
      <ul className={s.list}>
        {navTop}
        <div className={s.line}></div>
        {navBottom}
      </ul>
    </div>
  )
}

export default PopupMenu