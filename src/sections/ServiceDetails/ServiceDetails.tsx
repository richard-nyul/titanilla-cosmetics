import './styles.scss';
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { services } from '../../constants/constants';
import { useNavigate } from 'react-router-dom';

const ServiceDetails = () => {
  const { slug } = useParams<{ slug: string }>();
  const activeIndex = services.findIndex((s) => s.slug === slug);
  const service = services.find((s) => s.slug === slug);
  const navigate = useNavigate();

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!service) {
    return (
      <div className="service-detail-container">
        <h2>Szolgáltatás nem található</h2>
        <Link to="/services">Vissza a szolgáltatásokhoz</Link>
      </div>
    );
  }

  const indicatorIndex = hoveredIndex !== null ? hoveredIndex : activeIndex;

  return (
    <div className="service-detail-container">
      <div className="service-detail-subcontainer">
        <ul className="tabs-nav" role="tablist">
          {services.map((s, i) => (
            <li
              onClick={() => navigate(`/services/${s.slug}`)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  navigate(`/services/${s.slug}`);
                }
              }}
              key={s.name}
              role="tab"
              tabIndex={s.slug === slug ? 0 : -1}
              aria-selected={s.slug === slug}
              className={`tab-item ${s.slug === slug ? 'active' : ''}`}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Link to={`/services/${s.slug}`}>{s.name}</Link>
            </li>
          ))}
          <li
            className="tab-line"
            style={{
              height: `${100 / services.length}%`,
              transform: `translateY(${indicatorIndex * 100}%)`,
            }}
          />
        </ul>

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

          <img
            loading="lazy"
            src={`/images/services/${service.image}`}
            alt={service.name}
          />
        </div>
      </div>
      <Link to="/" className="back-link">
        ← Vissza
      </Link>
    </div>
  );
};

export default ServiceDetails;
