import s from './PerpleBtn.module.scss'

function PerpleBtn(props) {
  return (
    <button className={s.main}>
         {props.title}
    </button>
  )
}

export default PerpleBtn