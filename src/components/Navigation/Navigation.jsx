import Breadcrumbs from '../Breadcrumbs/Breadcrumbs'
import s from './Navigation.module.scss'

function Navigation(props) {

  return (
    <div className={s.main}>
        <Breadcrumbs breadcrumbs={props.breadcrumbsNav}/>
         <h1 className={`${s.title +' '+ props.class}`}>{props.title}</h1>
    </div>
  )
}

export default Navigation