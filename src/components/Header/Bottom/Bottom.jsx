import { NavLink } from 'react-router-dom'
import Button from '../../Button/Button';
import Svg from '../../Svgs/Svg';
import s from './Bottom.module.scss';

function Bottom(props) {

  const headerBottom = {
    logo: '../assets/images/logo.png',
    nav: [
      {
        id: '1',
        name: 'Квартиры на сутки',
        link: '/KvtoDay',
        svg: 'map',
        classNameSvg: true
      },
      {
        id: '2',
        name: 'Коттеджи и усадьбы',
        link: "/Houses",
        svg: '',
        classNameSvg: false
      },
      {
        id: '3',
        name: 'Бани и Сауны',
        link: "/Saunas",
        svg: '',
        classNameSvg: false
      },
      {
        id: '4',
        name: 'Авто напрокат',
        link: "/Cars",
        svg: '',
        classNameSvg: false
      }
    ],
    buttom: '+ Разместить объявление'
  }
  let navBottom = headerBottom.nav.map( hb => 
     <li className={s.linkBold} key={hb.id}>
        <NavLink to={hb.link} className={s.menulink}>
            <div className={s.linktext}>{hb.name}</div>
            <div className={`${hb.classNameSvg && s.linksvg}`}>
                <Svg type={hb.svg} key={hb.id} svgClass={s.svg}/>
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
        <Button title={headerBottom.buttom} classname={`${s.button}`}/>
      </div>
    </div>
  </div>

  )
}

export default Bottom