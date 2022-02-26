import LightPerpleBtn from '../Buttons/LightPerpleBtn/LightPerpleBtn'
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
                <Date date={props.date} class={s.geyDate}/>
                <LightPerpleBtn text={props.text}/>
            </div>
        </div>
    </div>
  )
}

export default NewsCard