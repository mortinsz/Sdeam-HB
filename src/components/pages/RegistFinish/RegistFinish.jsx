import s from './RegistFinish.module.scss'
import {NavLink} from 'react-router-dom'


function RegistFinish() {

  return (
    <div className={s.main}>
        <div className={s.block}>
            <h1 className={s.title}>Подтвердите регистрацию</h1>
            <div className={s.subtitle}>Письмо для подтверждения аккаунта отправлено почту. Перейдите по ссылке, указанной в письме. Если письма нет, то проверьте спам.</div>
            <NavLink className={s.tohome} to='/'>Понятно</NavLink>
        </div>
    </div>
  )
}

export default RegistFinish