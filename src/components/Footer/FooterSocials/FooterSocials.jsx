import { NavLink } from 'react-router-dom'
import Svg from '../../Svgs/Svg'
import s from './FooterSocials.module.scss'
import Socials from '../../Socials/Socials'

function FooterSocials() {

  const footerSocials = {
    pay: [
      {
        id: '1',
        img: '/assets/images/visa.png',
        alt: 'visa',
        link: '/'
      },
      {
        id: '2',
        img: '/assets/images/webpay.png',
        alt: 'webpay',
        link: '/'
      },
      {
        id: '3',
        img: '/assets/images/verified.png',
        alt: 'verified',
        link: '/'
      },
      {
        id: '4',
        img: '/assets/images/mastercard.png',
        alt: 'mastercard',
        link: '/'
      },
      {
        id: '5',
        img: '/assets/images/securecode.png',
        alt: 'securecode',
        link: '/'
      },
      {
        id: '6',
        img: '/assets/images/belkart.png',
        alt: 'belkart',
        link: '/'
      },
    ]
  }
  
  const soialsmedias = [
    {
      id: '1',
      type: 'inst',
      link: '/'
    },
    {
      id: '2',
      type: 'vk',
      link: '/'
    },
    {
      id: '3',
      type: 'facebook',
      link: '/'
    },
  ]

  let payWays = footerSocials.pay.map(pw => 
    <NavLink className={s.linkPay} to={pw.link} key={pw.id}>
      <img src={pw.img} alt={pw.alt} />
    </NavLink>
    )
  return (
    <div className={s.main}>
      <div className={s.socials}>
        <div className={s.title}>Мы в соцсетях</div>
        <div className={s.icons}>
          <Socials soialsmedias={soialsmedias}/>
        </div>
      </div>
      <div className={s.pay}>
        {payWays}
      </div>
    </div>
  )
}

export default FooterSocials