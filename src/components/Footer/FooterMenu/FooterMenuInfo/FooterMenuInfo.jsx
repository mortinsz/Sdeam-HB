import { NavLink } from 'react-router-dom'
import s from './FooterMenuInfo.module.scss'

function FooterMenuInfo() {

  const footerMenuInfo = [
    {
      name: 'Новости',
      link: '/'
    },
    {
      name: 'Размещение и тарифы',
      link: '/'
    },
    {
      name: 'Объявления на карте',
      link: '/'
    },
    {
      name: 'Контакты',
      link: '/'
    },
  ]
  let footerInfo = footerMenuInfo.map(fmi => 
    <li className={s.link}>
      <NavLink to={fmi.link} className={s.navlink}>{fmi.name}</NavLink>
    </li>
    )
  return (
    <ul className={s.list}>
      {footerInfo}
    </ul>
  )
}

export default FooterMenuInfo