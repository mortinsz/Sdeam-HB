import React from 'react'
import FooterMenuNav from './FooterMenuNav/FooterMenuNav'
import FooterMenuFlat from './FooterMenuFlat/FooterMenuFlat'
import FooterMenuInfo from './FooterMenuInfo/FooterMenuInfo'
import s from './FooterMenu.module.scss'


function FooterMenu() {
  return (
    <div className={s.main}>
      <FooterMenuNav/>
      <FooterMenuFlat/>
      <FooterMenuInfo/>
    </div>
  )
}

export default FooterMenu