import './styles.scss';
import Header from '../Skeleton/Header/Header';
import Footer from '../Skeleton/Footer/Footer';
import BackgroundLogo from '../sections/LandingPage/BackgroundLogo/BackgroundLogo';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import ServiceDetails from '../sections/ServiceDetails/ServiceDetails';

const Layout = () => {
  return (
    <div className="layout-container">
      <Header />
      <BackgroundLogo />
      <div className="content-container">
        <Routes>
          <Route path="*" element={<HomePage />} />
          <Route path="/services/:slug" element={<ServiceDetails />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
