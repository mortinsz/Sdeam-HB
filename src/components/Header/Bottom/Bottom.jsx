import { NavLink } from 'react-router-dom'
import Button from '../../Button/Button';
import Svg from '../../Svgs/Svg';
import s from './Bottom.module.scss';

function Bottom(props) {

  const headerBottom = {
    logo: '../assets/images/logo.png',
    nav: [
      {
        name: 'Квартиры на сутки',
        link: '/',
        svg: 'map',
        classNameSvg: true
      },
      {
        name: 'Коттеджи и усадьбы',
        link: "/",
        svg: '',
        classNameSvg: false
      },
      {
        name: 'Коттеджи и усадьбы',
        link: "/",
        svg: '',
        classNameSvg: false
      },
      {
        name: 'Бани и Сауны',
        link: "/",
        svg: '',
        classNameSvg: false
      },
      {
        name: 'Авто напрокат',
        link: "/",
        svg: '',
        classNameSvg: false
      }
    ],
    buttom: '+ Разместить объявление'
  }
  let navBottom = headerBottom.nav.map( hb => 
     <li className={s.link}>
        <NavLink to={hb.link} className={s.menulink}>
            <div className={s.linktext}>{hb.name}</div>
            <div className={`${hb.classNameSvg && s.linksvg}`}>
                <Svg id={hb.svg} />
            </div>
        </NavLink>
      </li>)
  return (
  <div className={s.main}>
    <div className="container">
      <div className={s.main_inner}>
        <NavLink to="/">
          <img src={headerBottom.logo} alt="logo" />
        </NavLink>
        <ul className={s.list}>
          {navBottom}
        </ul>
        <Button title={headerBottom.buttom}/>
      </div>
    </div>
  </div>

  )
}

export default Bottom