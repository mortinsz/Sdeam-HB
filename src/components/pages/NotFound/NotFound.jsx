import Button from '../../Button/Button'
import Container from '../../Container/Container'
import Svg from '../../Svgs/Svg'
import s from './NotFound.module.scss'
import {NavLink} from 'react-router-dom'

function NotFound() {
  return (
    <div className={s.main}>
        <Container>
            <div className={s.inner}>
                <Svg type='dots' className={s.yellowSvg}/>
                <div className={s.text}>
                    <div className={s.info}>
                        <div className={s.title}>Ошибка 404</div>
                        <div className={s.description}>Возможно, у вас опечатка в адресе страницы, или её просто не существует</div>
                        <NavLink to='/' className={s.button} type='home'><Svg type='home'/> Вернуться на главную</NavLink>
                    </div>
                    <div className={s.number}>
                        <h2 className={s.errorNum}>404</h2>
                        <Svg type='dots' className={s.whiteSvg}/>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default NotFound