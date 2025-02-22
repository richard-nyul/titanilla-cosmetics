import { useState } from 'react';
import './styles.scss';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
  };

  return (
    <div className="contact-container">
      <div className="contact-info">
        <h2>Contact Information</h2>
        <p>
          <strong>📞 Mobile:</strong> +36 30 123 4567
        </p>
        <p>
          <strong>📧 Email:</strong> example@email.com
        </p>
        <p>
          <strong>📍 Location:</strong> Budapest, Hungary
        </p>
      </div>

      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Név"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Üzenet"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
