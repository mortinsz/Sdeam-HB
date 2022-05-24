import s from './Navigation.module.scss'

function Navigation(props) {

  return (
    <div className={s.main}>
          <ul className={props.breadClass}>
            {props.breadcrumbsNav}
          </ul>
         <h1 className={`${s.title +' '+ props.nameClass}`}>{props.title}</h1>
    </div>
  )
}

export default Navigation