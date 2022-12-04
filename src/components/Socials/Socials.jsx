import React from 'react'
import Svg from '../Svgs/Svg'
import { NavLink } from 'react-router-dom'
import s from './Socials.module.scss'

function Sosials(props) {

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

    let socialMediasLink = props.soialsmedias.map(sm => 
        <NavLink className={s.linkSocial + ' ' + props.classAdd} to={sm.link} key={sm.id}>
          <Svg id={sm.id} type={sm.type}/>
        </NavLink>
        )
  return (
    <div>
        {socialMediasLink}
    </div>
  )
}

export default Sosials