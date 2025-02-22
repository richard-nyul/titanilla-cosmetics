import './styles.scss';
import { priceList } from '../../../constants/priceList';

const Pricelist = () => {
  return (
    <div className="pricelist-container">
      <h1 className="pricelist-title">Árlista</h1>
      <div className="pricelist">
        {Object.entries(priceList).map(([category, services], idx) => (
          <div className="category" key={idx}>
            <h2 className="category-title">{category}</h2>
            {Array.isArray(services) ? (
              services.map((service, index) => (
                <div className="service-container" key={index}>
                  <h3 className="service-name">{service.title}</h3>
                  <p className="service-price">{service.price} Ft</p>
                  {service.description && (
                    <p className="service-description">{service.description}</p>
                  )}
                </div>
              ))
            ) : (
              <div className="contact-info">
                {Object.entries(services).map(([key, value], index) => (
                  <p key={index} className="contact-detail">
                    <strong>{key}:</strong> {value}
                  </p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricelist;
