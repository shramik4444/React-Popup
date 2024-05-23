import {Link} from 'react-router-dom'
import Popup from 'reactjs-popup'
import React from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import { IoMdClose } from 'react-icons/io';

import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="blog-container">
      <ul className="nav-menu">
        <Link className="nav-link" to="/">
          <img
            src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
            alt="website logo"
            className="imgstyle"
          />
        </Link>
        <Link className="nav-link" to="/about"></Link>
        <Link className="nav-link" to="/popupItem">
          <div>
            <Popup
              modal
              nested
              trigger={
                <button data-testid="hamburgerIconButton">
                  <GiHamburgerMenu />
                </button>
              }
            >
              <div>
                <p>React is a popular and widely used programming language</p>
              </div>
                   {close => (
       <>
        <button>
        <IoMdClose />
      </button>
       </>
     )}
            </Popup>
          </div>
        </Link>
      </ul>
    </div>
  </nav>
)

export default Header
