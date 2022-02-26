import { NavLink } from 'react-router-dom';
import s from './FooterMenuFlat.module.scss';

function FooterMenuFlat() {

  const footerMenuFlat = {
    title: 'Квартиры',
    flats: [
      {
        id: '1',
        title: 'Квартиры в Минске',
        link: '/'
      },
      {
        id: '2',
        title: 'Квартиры в Гомеле',
        link: '/'
      },
      {
        id: '3',
        title: 'Квартиры в Бресте',
        link: '/'
      },
      {
        id: '4',
        title: 'Квартиры в Витебске',
        link: '/'
      },
      {
        id: '5',
        title: 'Квартиры в Гродно',
        link: '/'
      },
      {
        id: '6',
        title: 'Квартиры в Могилеве',
        link: '/'
      },
    ]
  }
  let flatsList = footerMenuFlat.flats.map(fl => 
        <li className={s.link} key={fl.id}>
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