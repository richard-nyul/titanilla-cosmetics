import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';
import logo from '@assets/images/logo.png';
import HeaderNav from '../HeaderNav/HeaderNav';
import HeaderMobileNav from '../HeaderMobileNav/HeaderMobileNav';

const Header = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (windowWidth > 900) {
    return (
      <header className="header">
        <div className="logo-container">
          <NavLink className="mobile-header-nav-elem" to="/">
            <img src={logo} alt="Logo" className="logo" />
          </NavLink>
        </div>
        <div className="navigation-container">
          <HeaderNav />
        </div>
      </header>
    );
  } else {
    return (
      <header className="header">
        <div className="mobile-navigation-container">
          <HeaderMobileNav />
        </div>
        <div className="logo-container">
          <NavLink className="mobile-header-nav-elem" to="/">
            <img src={logo} alt="Logo" className="logo" />
          </NavLink>
        </div>
      </header>
    );
  }
};

export default Header;
