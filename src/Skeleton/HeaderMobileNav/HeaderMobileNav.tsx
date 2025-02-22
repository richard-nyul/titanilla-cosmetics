import { useEffect, useRef, useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import './styles.scss';

function HeaderMobileNav() {
  const sidenavRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const closeNav = useCallback(() => {
    if (sidenavRef.current) {
      sidenavRef.current.classList.remove('show-sidenav');
    }
    setTimeout(() => {
      if (overlayRef.current) {
        overlayRef.current.style.display = 'none';
      }
    }, 200);
  }, []);

  function openNav() {
    setTimeout(() => {
      if (sidenavRef.current) {
        sidenavRef.current.classList.toggle('show-sidenav');
      }
    }, 0);
    if (overlayRef.current) {
      overlayRef.current.style.display = 'block';
    }
  }

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        sidenavRef.current &&
        !sidenavRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        closeNav();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [closeNav]);

  return (
    <div>
      <div id="overlay" ref={overlayRef}>
        <div ref={sidenavRef} className="sidenav">
          <button
            type="button"
            className="mobile-nav-button"
            onClick={closeNav}
          >
            &times;
          </button>
          <div className="mobile-header-nav-container">
            <NavLink
              onClick={closeNav}
              className="mobile-header-nav-elem"
              to="/"
            >
              Kezdőlap
            </NavLink>
            <NavLink
              onClick={closeNav}
              className="mobile-header-nav-elem"
              to="/services"
            >
              Szolgáltatások
            </NavLink>
            <NavLink
              onClick={closeNav}
              className="mobile-header-nav-elem"
              to="/pricing"
            >
              Árlista
            </NavLink>
            <NavLink
              onClick={closeNav}
              className="mobile-header-nav-elem"
              to="/contact"
            >
              Kapcsolat
            </NavLink>
            <NavLink
              onClick={closeNav}
              className="mobile-header-nav-elem mobile-booking"
              to="/booking"
            >
              Időpontfoglalás
            </NavLink>
          </div>
        </div>
      </div>
      <div>
        <button
          ref={buttonRef}
          className="mobile-nav-button"
          type="button"
          onClick={openNav}
        >
          &#9776;
        </button>
      </div>
    </div>
  );
}

export default HeaderMobileNav;
