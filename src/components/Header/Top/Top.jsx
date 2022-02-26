import React from 'react'
import { NavLink } from 'react-router-dom'
import Svg from '../../Svgs/Svg'
import s from './Top.module.scss'

function Top() {

    const headerTop = {
        nav: [
            {
                id: 1,
                name: 'Главная',
                link: '/main',
                svg: '',
                classNameSvg: false
            },
            {
                id: 2,
                name: 'Новости',
                link: '/news',
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


    let navTop = headerTop.nav.map( ht => 
        <li className={s.link} key={ht.id}>
            <NavLink to={ht.link} className={s.menulink} >
                <div className={`${ht.classNameSvg && s.linksvg}`} >
                    <Svg type={ht.svg}/>
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