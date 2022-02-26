import s from './Date.module.scss'

function Date(props) {
  return (
    <div className={`${s.main +' '+ props.class}`}>
        {props.date}
    </div>
  )
}

export default Date