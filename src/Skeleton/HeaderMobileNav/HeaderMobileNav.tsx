import { useEffect, useRef, useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import './styles.scss';
import { handleScroll } from '../../utils/handleScroll';

function HeaderMobileNav() {
  const sidenavRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const closeNav = useCallback(() => {
    if (sidenavRef.current) {
      sidenavRef.current.classList.remove('show-sidenav');
    }

    if (overlayRef.current) {
      const overlay = overlayRef.current;

      overlay.style.transition = 'background-color 200ms ease';
      overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.0)';

      setTimeout(() => {
        overlay.style.display = 'none';
      }, 200);
    }
  }, []);

  function openNav() {
    setTimeout(() => {
      if (sidenavRef.current) {
        sidenavRef.current.classList.toggle('show-sidenav');
      }
    }, 0);
    if (overlayRef.current) {
      overlayRef.current.style.display = 'block';
      overlayRef.current.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
      overlayRef.current.style.transition = 'background-color 200ms ease';
      void overlayRef.current.offsetWidth;
      overlayRef.current.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
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
      <div id="overlay" ref={overlayRef} aria-hidden="true">
        <nav ref={sidenavRef} className="sidenav" aria-label="Fő navigáció">
          <button
            type="button"
            className="mobile-nav-button"
            onClick={closeNav}
            aria-label="Navigáció bezárása"
          >
            &times;
          </button>

          <ul className="mobile-header-nav-container">
            <li>
              <NavLink
                onClick={(e) => {
                  handleScroll(e, 'home');
                  closeNav();
                }}
                className="mobile-header-nav-elem"
                to="/"
              >
                Kezdőlap
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={(e) => {
                  handleScroll(e, 'services');
                  closeNav();
                }}
                className="mobile-header-nav-elem"
                to="/services"
              >
                Szolgáltatások
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={(e) => {
                  handleScroll(e, 'pricing');
                  closeNav();
                }}
                className="mobile-header-nav-elem"
                to="/pricing"
              >
                Árlista
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={(e) => {
                  handleScroll(e, 'contact');
                  closeNav();
                }}
                className="mobile-header-nav-elem"
                to="/contact"
              >
                Kapcsolat
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={(e) => {
                  handleScroll(e, 'booking');
                  closeNav();
                }}
                className="mobile-header-nav-elem mobile-booking"
                to="/booking"
              >
                Időpontfoglalás
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>

      <div>
        <button
          ref={buttonRef}
          className="mobile-nav-button"
          type="button"
          onClick={openNav}
          aria-label="Mobil navigáció megnyitása"
        >
          &#9776;
        </button>
      </div>
    </div>
  );
}

export default HeaderMobileNav;
