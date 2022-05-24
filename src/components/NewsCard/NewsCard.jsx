import Button from '../Button/Button'
import { NavLink } from 'react-router-dom'
import Date from '../Date/Date'
import s from './NewsCard.module.scss'

function NewsCard(props) {
  return (
    <div className={s.main}>
        <img src={props.scrImg} alt={props.alt} className={s.imgCard}/>
        <div className={s.text}>
            <div className={s.title}>{props.title}</div>
            <div className={s.description}>{props.description}</div>
            <div className={s.more}>
                <Date date={props.date} nameClass={s.geyDate}/>
                <NavLink to={props.linkTo}><Button title='Читать' classname={`${s.button}`}/></NavLink>
            </div>
        </div>
    </div>
  )
}

export default NewsCard