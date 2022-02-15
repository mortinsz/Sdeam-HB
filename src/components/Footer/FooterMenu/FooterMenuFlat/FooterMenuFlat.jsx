import { NavLink } from 'react-router-dom';
import s from './FooterMenuFlat.module.scss';

function FooterMenuFlat() {

  const footerMenuFlat = {
    title: 'Квартиры',
    flats: [
      {
        title: 'Квартиры в Минске',
        link: '/'
      },
      {
        title: 'Квартиры в Гомеле',
        link: '/'
      },
      {
        title: 'Квартиры в Бресте',
        link: '/'
      },
      {
        title: 'Квартиры в Витебске',
        link: '/'
      },
      {
        title: 'Квартиры в Гродно',
        link: '/'
      },
      {
        title: 'Квартиры в Могилеве',
        link: '/'
      },
    ]
  }
  let flatsList = footerMenuFlat.flats.map(fl => 
        <li className={s.link}>
          <NavLink to={fl.link} className={s.navlink}>{fl.title}</NavLink>
        </li>
    )
  return (
    <div className={s.main}>
      <div className={s.title}>{footerMenuFlat.title}</div>
      <ul className={s.list}>
        {flatsList}
      </ul>
    </div>
  )
}

export default FooterMenuFlat