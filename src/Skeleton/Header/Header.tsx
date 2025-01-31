// import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';
import logo from '@assets/images/logo.png';
import HeaderNav from '../HeaderNav/HeaderNav';

const Header = () => {
  //   const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  //   useEffect(() => {
  //     const handleResize = () => setWindowWidth(window.innerWidth);
  //     window.addEventListener('resize', handleResize);
  //     return () => window.removeEventListener('resize', handleResize);
  //   }, []);

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
};

export default Header;
