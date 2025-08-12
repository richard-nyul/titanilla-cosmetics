import './styles.scss';
import { useParams, Link } from 'react-router-dom';
import { services } from '../../constants/constants';

const ServiceDetails = () => {
  const { name } = useParams<{ name: string }>();
  const decodedName = decodeURIComponent(name || '');
  const service = services.find((s) => s.name === decodedName);

  if (!service) {
    return (
      <div className="service-detail-container">
        <h2>Szolgáltatás nem található</h2>
        <Link to="/services">Vissza a szolgáltatásokhoz</Link>
      </div>
    );
  }

  return (
    <div className="service-detail-container">
      <div className="service-detail-content-container">
        <div className="service-detail-text">
          <h1>{service.name}</h1>
          <p>{service.details}</p>
          <p>{service.treatment}</p>

          <h3>Előnyök</h3>
          <ul>
            {service.pros.map((pro, i) => (
              <li key={i}>{pro}</li>
            ))}
          </ul>

          <h3>Ellenjavallatok</h3>
          <ul>
            {service.cons.map((con, i) => (
              <li key={i}>{con}</li>
            ))}
          </ul>

          <h3>Eredmény</h3>
          <p>{service.result}</p>
        </div>
        {/* <img
        src={`/images/services/${service.image}`}
        alt={service.name}
        className="service-image"
        /> */}
        <img
          loading="lazy"
          src={'/images/services/botorx.webp'}
          alt={service.name}
        />
      </div>
      <Link to="/services" className="back-link">
        Vissza
      </Link>
    </div>
  );
};

export default ServiceDetails;
