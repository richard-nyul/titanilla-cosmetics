import './styles.scss';
import Header from '../Skeleton/Header/Header';
import Footer from '../Skeleton/Footer/Footer';
import LandingPage from '../sections/LandingPage/LandingPage';
import Pricelist from '../sections/LandingPage/PriceList/Pricelist';

const Layout = () => {
  // const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  // const PLACE_ID = import.meta.env.VITE_PLACE_ID;

  return (
    <div className="layout-container">
      <Header />
      <div className="content-container">
        <LandingPage />
        <Pricelist />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
