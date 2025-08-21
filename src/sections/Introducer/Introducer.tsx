import './styles.scss';
import portrait from '/images/portrait-300.webp';
import portraitLow from '/images/portrait-lowres.webp';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useRef, useState, useEffect } from 'react';

interface LazyTextProps {
  children: React.ReactNode;
  className?: string;
}

const LazyText = ({ children, className = '' }: LazyTextProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

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

  return (
    <div
      ref={ref}
      className={`lazy-text ${visible ? 'visible' : ''} ${className}`}
    >
      {children}
    </div>
  );
};

const Introducer = () => {
  return (
    <div className="introducer-container">
      <div className="introducer-message">
        <LazyText className="heading">
          <h2>Miért válassz engem?</h2>
        </LazyText>
        <LazyText className="paragraph">
          <p>
            A legmodernebb technológiákat és hatóanyagokat alkalmazom annak
            érdekében, hogy bőröd feszesebb, simább és üdébb lehessen. Hiszek
            abban, hogy a bőr megfelelő ápolásával éveket nyerhetünk vissza, és
            természetes szépségünket hosszan megőrizhetjük. Ha szeretnéd bőröd
            fiatalos ragyogását visszaszerezni és meg is tartani, jó szívvel
            ajánlom figyelmedbe széles körű szépségszolgáltatásaim.
          </p>
        </LazyText>
      </div>

      <LazyText className="portrait-wrapper">
        <LazyLoadImage
          className="portrait"
          alt="Pakulár Titanilla"
          src={portrait}
          placeholderSrc={portraitLow}
          effect="blur"
          width="300px"
          style={{ objectFit: 'cover' }}
        />
      </LazyText>
    </div>
  );
};

export default Introducer;
