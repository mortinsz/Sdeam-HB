import s from './Date.module.scss'

function Date(props) {
  return (
    <div className={`${s.main +' '+ props.nameClass}`}>
        {props.date}
    </div>
  )
}

export default Date