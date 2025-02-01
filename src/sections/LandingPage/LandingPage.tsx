import BackgroundLogo from './BackgroundLogo/BackgroundLogo';
import Reviews from './Reviews/Reviews';
import './styles.css';

const LandingPage = () => {
  return (
    <main className="landing-page-container">
      <BackgroundLogo />
      <Reviews />
    </main>
  );
};

export default LandingPage;
