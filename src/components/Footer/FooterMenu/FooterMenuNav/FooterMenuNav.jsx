import { NavLink } from 'react-router-dom'
import s from './FooterMenuNav.module.scss'

function FooterMenuNav() {


  const footerMenuNav = [
    {
      name: 'Коттеджи и усадьбы',
      link: '/'
    },
    {
      name: 'Бани и сауны',
      link: '/'
    },
    {
      name: 'Авто на прокат',
      link: '/'
    }
  ]
  let footerMenuNavLink = footerMenuNav.map(fmn => 
  <li className={s.link}>
    <NavLink className={s.navlink} to={fmn.link}>{fmn.name}</NavLink>
  </li>)
  return (
      <ul className={s.list}>
        {footerMenuNavLink}
      </ul>
  )
}

export default FooterMenuNav