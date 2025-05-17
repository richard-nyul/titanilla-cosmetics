import './styles.scss';
import { services } from '../../constants/constants';

const Services = () => {
  return (
    <div className="services-container">
      {services.map((service) => (
        <div className="service-container">
          <div className="name">
            <h3>{service.name}</h3>
            <button>További információk</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;
