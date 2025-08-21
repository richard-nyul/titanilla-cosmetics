import './styles.scss';
import portrait from '@assets/images/portrait.png';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Introducer = () => {
  return (
    <div className="introducer-container">
      <div className="introducer-message">
        <h2>Miért válassz engem?</h2>
        <p>
          A legmodernebb technológiákat és hatóanyagokat alkalmazom annak
          érdekében, hogy bőröd feszesebb, simább és üdébb lehessen. Hiszek
          abban, hogy a bőr megfelelő ápolásával éveket nyerhetünk vissza, és
          természetes szépségünket hosszan megőrizhetjük. Ha szeretnéd bőröd
          fiatalos ragyogását visszaszerezni és meg is tartani, jó szívvel
          ajánlom figyelmedbe széles körű szépségszolgáltatásaim.
        </p>
      </div>
      <LazyLoadImage
        className="portrait"
        alt="Pakulár Titanilla"
        src={portrait}
        effect="blur"
        width="300px"
        style={{ objectFit: 'cover' }}
      />
    </div>
  );
};

export default Introducer;
