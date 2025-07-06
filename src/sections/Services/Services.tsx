import './styles.scss';
import { services } from '../../constants/constants';

const Services = () => {
  return (
    <div className="services-container">
      <h1 className="title">Szolgáltatások</h1>
      {services.map((service) => (
        <div className="service-container" key={service.name}>
          <div className="information-container">
            <div className="details-container">
              <h3>{service.name}</h3>
              <p>{service.details}</p>
              <p>{service.treatment}</p>
            </div>
            <div className="link">
              <a href="#">További információk</a>
            </div>
          </div>
          <img
            loading="lazy"
            src={'/images/services/botorx.webp'}
            alt={service.name}
          />
        </div>
      ))}
    </div>
  );
};

export default Services;
