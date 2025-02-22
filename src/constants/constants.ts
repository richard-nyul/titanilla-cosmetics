type PriceItem = {
  title: string;
  price: number;
  description?: string;
};

type PriceList = {
  [key: string]: PriceItem[];
};

export const priceList: PriceList = {
  'Bielenda arckezelések': [
    {
      title: 'Waterfalls of Gold – Kolloid Arany',
      price: 12000,
      description:
        'Ránctalanító, regeneráló, hidratáló és nyugtató hatású arckezelés.',
    },
    {
      title: 'Feast for the Skin - Kaviár',
      price: 12000,
      description: 'Tápláló és hidratáló hatású arckezelés kaviárral.',
    },
    {
      title: 'Aqua Porin',
      price: 13000,
      description:
        'Intenzív kettős hatású mélyhidratáló hatású arckezelés dehidratált, oxigénhiányos bőrre.',
    },
  ],
  'KRX Aesthetics arckezelések': [
    {
      title: 'Bioherb 50 Peeling',
      price: 15000,
      description: 'Természetes, savak nélküli bőrmegújító arckezelés.',
    },
    {
      title: 'Carboxy Terápia',
      price: 15000,
      description:
        'Non-invazív szén-dioxidos arckezelés magas hatóanyag tartalommal és extra növényi kivonatokkal.',
    },
    {
      title: 'Thread-Fill kollagénszálas kezelés',
      price: 13000,
      description: 'Felszívódó kollagénszálas arckezelés a feszesebb bőrért.',
    },
  ],
  'Egyéb arckezelések': [
    {
      title: 'Relaxáló arcmasszázs',
      price: 6000,
      description: 'Nyugtató és stresszoldó hatású arc- és nyakmasszázs.',
    },
    {
      title: 'Tisztító kezelés',
      price: 10000,
      description:
        'Mélytisztító arckezelés pattanásos, zsíros vagy problémás bőrre.',
    },
    {
      title: 'Tini kezelés (18 éves kor alatt)',
      price: 8500,
      description:
        'Fiatal bőr számára kifejlesztett tisztító és regeneráló arckezelés.',
    },
  ],
  'Festések, szemöldök styling': [
    {
      title: 'Szemöldök szedés csipesszel',
      price: 1700,
    },
    {
      title: 'Szemöldök szedés, festés',
      price: 2700,
    },
    {
      title: 'Henna szemöldök szedés, festés',
      price: 3700,
    },
    {
      title: 'Hibrid szemöldök szedés, festés',
      price: 3700,
    },
    {
      title: 'Szemöldök laminálás',
      price: 6700,
    },
    {
      title: 'Szemöldök szedés, festés, laminálás',
      price: 9700,
    },
    {
      title: 'Szempilla festés',
      price: 2700,
    },
  ],
  Wax: [
    {
      title: 'Bajusz',
      price: 2000,
    },
    {
      title: 'Hónalj',
      price: 2500,
    },
    {
      title: 'Kar könyékig',
      price: 2800,
    },
    {
      title: 'Teljes kar',
      price: 3800,
    },
    {
      title: 'Láb térdig',
      price: 3700,
    },
    {
      title: 'Teljes láb',
      price: 5800,
    },
  ],
};

export const priceListValidityMessage =
  'Az árlista 2024. 08. 01-étől érvényes.';
export const priceListLegalNote = 'Az árváltozás jogát fenntartom.';
