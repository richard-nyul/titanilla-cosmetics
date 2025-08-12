import Introducer from '../sections/Introducer/Introducer';
import LandingPage from '../sections/LandingPage/LandingPage';
import Services from '../sections/Services/Services';
import Pricelist from '../sections/LandingPage/PriceList/Pricelist';
import Contact from '../sections/Contact/Contact';

const HomePage = () => {
  return (
    <>
      <section id="home">
        <Introducer />
        <LandingPage />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="pricing">
        <Pricelist />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
};

export default HomePage;
