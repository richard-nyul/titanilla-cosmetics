import { useState } from 'react';
import './styles.scss';
import useGlow from '../../hooks/useGlow';
import { mobileNumber } from '../../constants/constants';
import location from '@assets/images/location.svg';
import phone from '@assets/images/phone.svg';
import email from '@assets/images/email.svg';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const buttonRef = useGlow<HTMLButtonElement>();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        'service_7d95auh',
        'template_lrow8mj',
        formData,
        'YbPoRk3zGmx-2w9v5'
      )
      .then(
        () => {
          alert('Üzenet elküldve!');
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          alert('Hiba történt az üzenet küldése közben.');
          console.error(error);
        }
      );
  };

  return (
    <div className="contact-container">
      <h2 className="title">Kapcsolat</h2>
      <div className="contact-body">
        <div className="contact-info">
          <a className="contact-link" href={`tel:${mobileNumber}`}>
            <img loading="lazy" src={phone} alt="phone" className="icon" />
            <p>{mobileNumber}</p>
          </a>
          <a
            className="contact-link"
            href="mailto:info@titanillakozmetikus.com"
          >
            <img loading="lazy" src={email} alt="email" className="icon" />
            <p>info@titanillakozmetikus.com</p>
          </a>
          <a
            className="contact-link"
            href="https://www.google.com/maps/place/Titanilla+kozmetikus/@47.387074,19.2303997,17z/data=!3m1!4b1!4m6!3m5!1s0x4741eb277ae6228d:0x8b281cc402beeff5!8m2!3d47.3870704!4d19.2329746!16s%2Fg%2F11wxl3fjnj?entry=ttu&g_ep=EgoyMDI1MDIxOS4xIKXMDSoASAFQAw%3D%3D"
          >
            <img
              loading="lazy"
              src={location}
              alt="location"
              className="icon"
            />
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
            />
            <button ref={buttonRef} className="action" type="submit">
              Küldés
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
