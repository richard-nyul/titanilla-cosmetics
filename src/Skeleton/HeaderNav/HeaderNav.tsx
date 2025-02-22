import { NavLink } from 'react-router-dom';
import './styles.scss';
import useGlow from '../../hooks/useGlow';

const HeaderNav = () => {
  const bookingRef = useGlow<HTMLAnchorElement>();

  return (
    <div className="header-nav-container">
      <NavLink className="header-nav-elem basic" to="/">
        Kezdőlap
      </NavLink>
      <NavLink className="header-nav-elem basic" to="/services">
        Szolgáltatások
      </NavLink>
      <NavLink className="header-nav-elem basic" to="/pricing">
        Árlista
      </NavLink>
      <NavLink className="header-nav-elem basic" to="/contact">
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
