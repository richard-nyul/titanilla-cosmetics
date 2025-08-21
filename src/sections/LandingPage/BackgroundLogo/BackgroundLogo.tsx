import './styles.scss';
import { useRef, useState, useEffect } from 'react';

const BackgroundLogo = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [bgLoaded, setBgLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (visible) {
      const img = new Image();
      img.src = 'images/background.webp';
      img.onload = () => setBgLoaded(true);
    }
  }, [visible]);

  return (
    <div
      ref={ref}
      className={`background-logo-container ${visible ? 'visible' : ''}`}
      style={{
        backgroundImage: `url(${bgLoaded ? 'images/background.webp' : 'images/background-lowres.webp'})`,
      }}
    >
      <div className="logo-container">
        <h1>PT</h1>
        <h2>Pakulár Titanilla</h2>
        <div className="title-container">
          <div className="left-line" />
          <h3>Kozmetikus</h3>
          <div className="right-line" />
        </div>
      </div>
    </div>
  );
};

export default BackgroundLogo;
