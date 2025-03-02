import './styles.scss';
import Header from '../Skeleton/Header/Header';
import Footer from '../Skeleton/Footer/Footer';
import LandingPage from '../sections/LandingPage/LandingPage';
import Pricelist from '../sections/LandingPage/PriceList/Pricelist';
import Contact from '../sections/Contact/Contact';
import BackgroundLogo from '../sections/LandingPage/BackgroundLogo/BackgroundLogo';
import Introducer from '../sections/Introducer/Introducer';
import Services from '../sections/Services/Services';

const Layout = () => {
  return (
    <div className="layout-container">
      <Header />
      <BackgroundLogo />
      <div className="content-container">
        <div id="home">
          <Introducer />
          <LandingPage />
        </div>
        <div id="pricing">
          <Pricelist />
        </div>
        <div id="contact">
          <Contact />
        </div>
        <div id="services">
          <Services />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
