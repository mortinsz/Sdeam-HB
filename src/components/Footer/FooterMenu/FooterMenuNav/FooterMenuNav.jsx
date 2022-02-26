import { NavLink } from 'react-router-dom'
import s from './FooterMenuNav.module.scss'

function FooterMenuNav() {


  const footerMenuNav = [
    {
      id: '1',
      name: 'Коттеджи и усадьбы',
      link: '/'
    },
    {
      id: '2',
      name: 'Бани и сауны',
      link: '/'
    },
    {
      id: '3',
      name: 'Авто на прокат',
      link: '/'
    }
  ]
  let footerMenuNavLink = footerMenuNav.map(fmn => 
  <li className={s.link} key={fmn.id}>
    <NavLink className={s.navlink} to={fmn.link}>{fmn.name}</NavLink>
  </li>)
  return (
      <ul className={s.list}>
        {footerMenuNavLink}
      </ul>
  )
}

export default FooterMenuNav