import './styles.scss';
import facebook from '@assets/images/facebook.svg';
import instagram from '@assets/images/instagram.svg';
import phone from '@assets/images/phone.svg';
import tiktok from '@assets/images/tiktok.svg';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="icon-container">
        <a href="https://facebook.com">
          <img loading="lazy" src={facebook} alt="facebook" className="icon" />
        </a>
        <a href="https://instagram.com">
          <img
            loading="lazy"
            src={instagram}
            alt="instagram"
            className="icon"
          />
        </a>
        <a href="https://tiktok.com">
          <img loading="lazy" src={tiktok} alt="tiktok" className="icon" />
        </a>
        <a className="phone-num" href={`tel:${+3612345678}`}>
          <img loading="lazy" src={phone} alt="phone" />
        </a>
      </div>
      <p className="footer-text">
        Minden jog fenntartva! {new Date().getFullYear()} © Titanilla
        Kozmetikus
      </p>
    </footer>
  );
};

export default Footer;
