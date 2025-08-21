import './styles.scss';
import { services } from '../../constants/constants';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div className="services-container">
      <h1 className="title">Kiemelt szolgáltatások</h1>
      {services.map((service) => (
        <div className="service-container" key={service.slug}>
          <div className="information-container">
            <div className="details-container">
              <h3>{service.name}</h3>
              <p>{service.details}</p>
              <p>{service.treatment}</p>
            </div>
            <div className="link">
              <Link to={`/services/${service.slug}`}>További információk</Link>
            </div>
          </div>
          <img
            loading="lazy"
            src={`/images/services/${service.image}`}
            alt={service.name}
          />
        </div>
      ))}
    </div>
  );
};

export default Services;
