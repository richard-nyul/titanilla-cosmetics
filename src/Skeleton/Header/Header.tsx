import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './styles.scss';
import logo from '@assets/images/logo.webp';
import logoLow from '@assets/images/logo-lowres.webp';
import HeaderNav from '../HeaderNav/HeaderNav';
import HeaderMobileNav from '../HeaderMobileNav/HeaderMobileNav';
import { LazyLoadImage } from 'react-lazy-load-image-component';

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
            <img loading="lazy" src={logo} alt="Logo" className="logo" />
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
        <div className="logo-container">
          <NavLink className="mobile-header-nav-elem" to="/">
            <LazyLoadImage
              loading="lazy"
              src={logo}
              alt="Logo"
              className="logo"
              placeholderSrc={logoLow}
              effect="blur"
              height="91px"
            />
          </NavLink>
        </div>
        <div className="mobile-navigation-container">
          <HeaderMobileNav />
        </div>
      </header>
    );
  }
};

export default Header;
