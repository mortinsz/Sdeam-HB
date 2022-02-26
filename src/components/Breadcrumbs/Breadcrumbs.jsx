import s from './Breadcrumbs.module.scss'

function Breadcrumbs(props) {
  return (
    <ul className={s.list}>
      {props.breadcrumbs}
    </ul>
  )
}

export default Breadcrumbs