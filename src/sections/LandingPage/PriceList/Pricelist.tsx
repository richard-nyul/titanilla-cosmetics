import './styles.scss';
import {
  priceList,
  priceListLegalNote,
  priceListValidityMessage,
} from '../../../constants/constants';

const Pricelist = () => {
  return (
    <div className="pricelist-container">
      <h1 className="title">Árlista</h1>
      <div className="pricelist">
        {Object.entries(priceList).map(([category, services], idx) => (
          <div className="category" key={idx}>
            <h2 className="category-title">{category}</h2>
            {services.map((service, index) => (
              <div className="service-container" key={index}>
                <div className="service-name-price-container">
                  <h3 className="service-name">{service.title}</h3>
                  <p className="service-price secondary-text">
                    {service.price} Ft
                  </p>
                </div>
                {service.description && (
                  <p className="service-description">{service.description}</p>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="price-list-message">
        <p className="secondary-text">{priceListValidityMessage}</p>
        <p className="secondary-text">{priceListLegalNote}</p>
      </div>
    </div>
  );
};

export default Pricelist;
