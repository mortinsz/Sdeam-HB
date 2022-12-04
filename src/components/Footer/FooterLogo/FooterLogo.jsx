import React from 'react'
import s from './FooterLogo.module.scss'


function FooterLogo() {


  const footerLogo = {
    logoTitle: 'СДАЁМ БАЙ',
    logoImg: '../assets/images/logo.png',
    companyInfo: {
      name: 'ИП Шушкевич Андрей Викторович',
      whom: 'УНП 192602485 Минским горисполкомом',
      date: '10.02.2016',
      address: '220068, РБ, г. Минск, ул. Осипенко, 21, кв.23',
      phone: '+375 29 621 48 33',
      email: 'sdaem@sdaem.by',
      time: 'Режим работы: 08:00-22:00'
    }
  } 
  return (
    <div className={s.main}>
      <div className={s.logo}>
        <img src={footerLogo.logoImg} alt="logo"/>
        <div className={s.logoTitle}>{footerLogo.logoTitle}</div>
      </div>
      <div className={s.companyInfo}>
        <p className={s.p}>{footerLogo.companyInfo.name}</p>
        <p className={s.p}>{footerLogo.companyInfo.whom}</p>
        <p className={s.p}>{footerLogo.companyInfo.date}</p>
        <p className={s.p}>{footerLogo.companyInfo.address}</p>
        <p className={s.p}>{footerLogo.companyInfo.phone},{footerLogo.companyInfo.email}</p>
        <p className={s.p}>{footerLogo.companyInfo.time}</p>
      </div>
    </div>
  )
}

export default FooterLogo