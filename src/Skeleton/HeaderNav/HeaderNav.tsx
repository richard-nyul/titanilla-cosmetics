import { NavLink } from 'react-router-dom';
import './styles.scss';
import useGlow from '../../hooks/useGlow';
import { useHandleScroll } from '../../hooks/useHandleScroll';
import React, { useState } from 'react';
import BookingDialog from '../../components/BookingDialog/BookingDialog';

const HeaderNav = () => {
  const bookingRef = useGlow<HTMLAnchorElement>();
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const { handleScroll } = useHandleScroll();

  return (
    <>
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
          Kiemelt szolgáltatások
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

        <button
          ref={bookingRef as React.RefObject<HTMLButtonElement>}
          className="header-nav-elem action"
          onClick={() => setIsBookingOpen(true)}
          type="button"
        >
          Időpontfoglalás
        </button>
      </div>

      <BookingDialog
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </>
  );
};

export default HeaderNav;
