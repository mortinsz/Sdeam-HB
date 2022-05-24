import s from './Container.module.scss'
function Container(props) {
  return (
    <div className={s.main}>
      {props.children}
    </div>
  )
}

export default Container