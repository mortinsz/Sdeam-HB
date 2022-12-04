import FooterLogo from './FooterLogo/FooterLogo'
import FooterMenu from './FooterMenu/FooterMenu'
import FooterSocials from './FooterSocials/FooterSocials'
import s from './Footer.module.scss'

function Footer() {
  return (
    <div className={s.main}>
        <div className="container">
            <div className={s.main__inner}>
                <FooterLogo/>
                <div className={s.column}>
                    <FooterMenu/>
                    <FooterSocials/>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Footer