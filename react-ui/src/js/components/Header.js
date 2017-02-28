import React from 'react'
import NavItem from './NavItem.js'
import {Link} from 'react-router'

const Header = () => {
  return (
    <div>
      <nav className="nav">
        <div className="nav-left">
          <Link className="nav-item" to="/">
            <img src="/images/hongnh-logo.png" alt="Page logo" />
          </Link>
        </div>

        <div className="nav-center">
          <a className="nav-item" href="https://github.com/hongnguyenhuu96" target="_blank">
            <span className="icon">
              <i className="fa fa-github"></i>
            </span>
          </a>
          <a className="nav-item" href="https://facebook.com/hongnh96" target="_blank">
            <span className="icon">
              <i className="fa fa-facebook"></i>
            </span>
          </a>
        </div>

        <span className="nav-toggle" onClick={clickToToggle}>
          <span></span>
          <span></span>
          <span></span>
        </span>

        <div className="nav-right nav-menu">
          <NavItem to="/" onlyActiveOnIndex>Home</NavItem>
          <NavItem to='/homeworks'>Home Work</NavItem>
        </div>
      </nav>
    </div>
  );

  function clickToToggle(){
    document.querySelector('.nav-toggle').classList.toggle('is-active');
    document.querySelector('.nav-menu').classList.toggle('is-active');
  }
}

export default Header