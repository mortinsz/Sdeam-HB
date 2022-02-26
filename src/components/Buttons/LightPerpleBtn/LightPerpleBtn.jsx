import s from './LightPerpleBtn.module.scss'

function LightPerpleBtn(props) {
  return (
    <button className={s.main}>
        {props.text}
    </button>
  )
}

export default LightPerpleBtn