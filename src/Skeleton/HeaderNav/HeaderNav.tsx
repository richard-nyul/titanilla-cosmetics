import { NavLink } from 'react-router-dom';
import './styles.scss';
import useGlow from '../../hooks/useGlow';

const HeaderNav = () => {
  const bookingRef = useGlow<HTMLAnchorElement>();

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    sectionId: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="header-nav-container">
      <NavLink
        className="header-nav-elem basic"
        to="/"
        onClick={(e) => handleScroll(e, 'home')}
      >
        Kezdőlap
      </NavLink>
      <NavLink
        className="header-nav-elem basic"
        to="/#services"
        onClick={(e) => handleScroll(e, 'services')}
      >
        Szolgáltatások
      </NavLink>
      <NavLink
        className="header-nav-elem basic"
        to="/#pricing"
        onClick={(e) => handleScroll(e, 'pricing')}
      >
        Árlista
      </NavLink>
      <NavLink
        className="header-nav-elem basic"
        to="/#contact"
        onClick={(e) => handleScroll(e, 'contact')}
      >
        Kapcsolat
      </NavLink>
      <NavLink
        ref={bookingRef}
        className="header-nav-elem action"
        to="/booking"
      >
        Időpontfoglalás
      </NavLink>
    </div>
  );
};

export default HeaderNav;
