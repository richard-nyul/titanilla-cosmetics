import { useState } from 'react';
import './styles.scss';
import useGlow from '../../hooks/useGlow';
import { mobileNumber } from '../../constants/constants';
import location from '@assets/images/location.svg';
import phone from '@assets/images/phone.svg';
import email from '@assets/images/email.svg';

const Contact = () => {
  const buttonRef = useGlow<HTMLButtonElement>();
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
      <h2 className="title">Kapcsolat</h2>
      <div className="contact-body">
        <div className="contact-info">
          <a className="contact-link" href={`tel:${mobileNumber}`}>
            <img src={phone} alt="phone" className="icon" />
            <p>{mobileNumber}</p>
          </a>
          <a
            className="contact-link"
            href="mailto:info@titanillakozmetikus.com"
          >
            <img src={email} alt="email" className="icon" />
            <p>info@titanillakozmetikus.com</p>
          </a>
          <a
            className="contact-link"
            href="https://www.google.com/maps/place/Titanilla+kozmetikus/@47.387074,19.2303997,17z/data=!3m1!4b1!4m6!3m5!1s0x4741eb277ae6228d:0x8b281cc402beeff5!8m2!3d47.3870704!4d19.2329746!16s%2Fg%2F11wxl3fjnj?entry=ttu&g_ep=EgoyMDI1MDIxOS4xIKXMDSoASAFQAw%3D%3D"
          >
            <img src={location} alt="location" className="icon" />
            <p>Gyál, Deák Ferenc u. 82, 2360</p>
          </a>
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
            <button ref={buttonRef} className="action" type="submit">
              Küldés
            </button>
          </form>
        </div>
      </div>
      <div className="iframe-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2701.2746424537386!2d19.230399677114672!3d47.38707400311004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741eb277ae6228d%3A0x8b281cc402beeff5!2sTitanilla%20kozmetikus!5e0!3m2!1sen!2shu!4v1740243837113!5m2!1sen!2shu"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
