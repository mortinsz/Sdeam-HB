import React from 'react'
import { NavLink } from 'react-router-dom'
import Svg from '../../Svgs/Svg'
import s from './Top.module.scss'

function Top() {

    const headerTop = {
        nav: [
            {
                name: 'Главная',
                link: '/Main',
                svg: '',
                classNameSvg: false
            },
            {
                name: 'Новости',
                link: '/News',
                svg: '',
                classNameSvg: false
            },
            {
                name: 'Размещение и тарифы',
                link: '/Rate',
                svg: 'map',
                classNameSvg: true
            },
            {
                name: 'Объявления на карте',
                link: '/Main',
                svg: '',
                classNameSvg: false
            },
            {
                name: 'Главная',
                link: '/Main',
                svg: '',
                classNameSvg: false
            }
        ]
        
        

    }


    let navTop = headerTop.nav.map( ht => 
        <li className={s.link}>
            <NavLink to={ht.link} className={s.menulink}>
                <div className={`${ht.classNameSvg && s.linksvg}`}>
                    <Svg id={ht.svg} />
                </div>
                <div className={s.linktext}>{ht.name}</div>
            </NavLink>
        </li>
         )
  return (
    <div className={s.main}>
        <div className="container">
            <div className={s.main_inner}>
                <ul className={s.nav}>
                    {navTop}
                </ul>
                <div className={s.user}>
                    <div className={s.bookmark}>
                        <NavLink to="/"className={s.bookmark_title}>Закладки</NavLink>
                        <NavLink to='/'className={s.bookmark_svg}>
                            <img src="../assets/images/heart.png" alt="Закладки" />
                        </NavLink>
                    </div> 
                    <NavLink to='/' className={s.regist}>Вход и регистрация</NavLink>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Top