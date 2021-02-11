import React from 'react'
import { IconContext } from 'react-icons'
import { GiHamburgerMenu } from 'react-icons/gi'
import './DrawerToggle.scss'

const DrawerToggle = (props) => {
  return (
    <div className="DrawerToggle" onClick={props.clicked}>
        <IconContext.Provider value={{ className: "sn-icon" }}>
          <GiHamburgerMenu />
        </IconContext.Provider>
      </div>
  )
}

export default DrawerToggle
