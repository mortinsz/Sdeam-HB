import { NavLink } from 'react-router-dom'
import s from './FooterMenuInfo.module.scss'

function FooterMenuInfo() {

  const footerMenuInfo = [
    {
      id: '1',
      name: 'Новости',
      link: '/'
    },
    {
      id: '2',
      name: 'Размещение и тарифы',
      link: '/'
    },
    {
      id: '3',
      name: 'Объявления на карте',
      link: '/'
    },
    {
      id: '4',
      name: 'Контакты',
      link: '/'
    },
  ]
  let footerInfo = footerMenuInfo.map(fmi => 
    <li className={s.link} key={fmi.id}>
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