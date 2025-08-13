import './styles.scss';
import { useRef, useEffect } from 'react';
import notinoQrCode from '/images/notino_qr_code.png';
import phone from '@assets/images/phone.svg';
import email from '@assets/images/email.svg';
import facebook from '@assets/images/facebook.svg';

interface BookingDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingDialog = ({ isOpen, onClose }: BookingDialogProps) => {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      if (!dialog.open) dialog.showModal();
      document.body.style.overflow = 'hidden';
    } else {
      if (dialog.open) dialog.close();
      document.body.style.overflow = '';
    }

    const handleCancel = (e: Event) => {
      e.preventDefault();
      onClose();
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (e.target === dialog) {
        onClose();
      }
    };

    dialog.addEventListener('cancel', handleCancel);
    dialog.addEventListener('click', handleClickOutside);

    return () => {
      dialog.removeEventListener('cancel', handleCancel);
      dialog.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <dialog ref={dialogRef} className="booking-dialog">
      <button
        aria-label="Close"
        className="close-button"
        onClick={onClose}
        type="button"
      >
        &times;
      </button>

      <h3>
        Foglalj a{' '}
        <a
          href="https://partner.notino.com/api/b2c/redirect/salons/detail?salonID=808944a8-32bb-4aac-9168-1f2783d32dd3"
          target="_blank"
          rel="noopener noreferrer"
          className="notino-link-text"
        >
          Notino alkalmazásban
        </a>
      </h3>
      <a
        href="https://partner.notino.com/api/b2c/redirect/salons/detail?salonID=808944a8-32bb-4aac-9168-1f2783d32dd3"
        target="_blank"
        rel="noopener noreferrer"
        className="notino-link"
      >
        <img
          src={notinoQrCode}
          alt="Notino QR code"
          className="qr-code"
          loading="lazy"
        />
      </a>

      <div className="divider-container">
        <span>vagy</span>
      </div>

      <div className="options-container">
        <div
          className="option"
          role="button"
          tabIndex={0}
          onClick={() => {
            window.location.href = 'tel:+3612345678';
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              window.location.href = 'tel:+3612345678';
            }
          }}
        >
          <img loading="lazy" src={phone} alt="phone" className="icon" />
          <span>Foglalj telefonon</span>
        </div>

        <div
          className="option"
          role="button"
          tabIndex={0}
          onClick={() => {
            window.location.href = 'mailto:info@titanillakozmetikus.hu';
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              window.location.href = 'mailto:info@titanillakozmetikus.hu';
            }
          }}
        >
          <img loading="lazy" src={email} alt="email" className="icon" />
          <span>Foglalj e-mail-en</span>
        </div>

        <div
          className="option"
          onClick={() => window.open('https://m.me/61551415283398', '_blank')}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ')
              window.open('https://m.me/61551415283398', '_blank');
          }}
        >
          <img loading="lazy" src={facebook} alt="facebook" className="icon" />
          <span>Foglalj Messenger-en</span>
        </div>
      </div>
    </dialog>
  );
};

export default BookingDialog;
