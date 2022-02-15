import { NavLink } from 'react-router-dom'
import Svg from '../../Svgs/Svg'
import s from './FooterSocials.module.scss'

function FooterSocials() {

  const footerSocials = {
    title: 'Мы в соцсетях',
    socialsmedias: [
      {
        id: 1,
        type: 'inst',
        link: '/'
      },
      {
        id: 2,
        type: 'vk',
        link: '/'
      },
      {
        id: 3,
        type: 'facebook',
        link: '/'
      },
    ],
    pay: [
      {
        img: './assets/images/visa.png',
        alt: 'visa',
        link: '/'
      },
      {
        img: './assets/images/webpay.png',
        alt: 'webpay',
        link: '/'
      },
      {
        img: './assets/images/verified.png',
        alt: 'verified',
        link: '/'
      },
      {
        img: './assets/images/mastercard.png',
        alt: 'mastercard',
        link: '/'
      },
      {
        img: './assets/images/securecode.png',
        alt: 'securecode',
        link: '/'
      },
      {
        img: './assets/images/belkart.png',
        alt: 'belkart',
        link: '/'
      },
    ]
  }
  let socialMedias = footerSocials.socialsmedias.map(sm => 
    <NavLink className={s.linkSocial} to={sm.link}>
      <Svg id={sm.id} type={sm.type}/>
    </NavLink>
    )
  let payWays = footerSocials.pay.map(pw => 
    <NavLink className={s.linkPay} to={pw.link}>
      <img src={pw.img} alt={pw.alt} />
    </NavLink>
    )
  return (
    <div className={s.main}>
      <div className={s.socials}>
        <div className={s.title}>{footerSocials.title}</div>
        <div className={s.icons}>
          {socialMedias}
        </div>
      </div>
      <div className={s.pay}>
        {payWays}
      </div>
    </div>
  )
}

export default FooterSocials