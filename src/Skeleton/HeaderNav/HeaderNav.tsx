import { NavLink } from 'react-router-dom';
import './styles.css';
import { useEffect } from 'react';

const HeaderNav = () => {
  useEffect(() => {
    document.querySelectorAll('.booking').forEach((element) => {
      const booking = element as HTMLElement;
      booking.addEventListener('mousemove', (e: MouseEvent) => {
        const { left, top, width, height } = booking.getBoundingClientRect();
        const x = ((e.clientX - left) / width) * 100;
        const y = ((e.clientY - top) / height) * 100;

        booking.style.setProperty('--x', `${x}%`);
        booking.style.setProperty('--y', `${y}%`);
        booking.classList.add('glow');
      });

      booking.addEventListener('mouseleave', () => {
        booking.classList.remove('glow');
      });
    });
  }, []);

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
      <NavLink className="header-nav-elem booking" to="/booking">
        Időpontfoglalás
      </NavLink>
    </div>
  );
};

export default HeaderNav;
