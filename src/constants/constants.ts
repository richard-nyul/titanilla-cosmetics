type PriceItem = {
  title: string;
  price: number;
  description?: string;
};

type PriceList = {
  [key: string]: PriceItem[];
};

type Services = {
  name: string;
  slug: string;
  image: string;
  details: string;
  treatment: string;
  pros: string[];
  cons: string[];
  result: string;
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

export const services: Services[] = [
  {
    name: 'Carboxy terápia',
    slug: 'carboxy-terapia',
    image: 'carboxy_therapy.webp',
    details:
      'A Carboxy Therapy egy innovatív, nem-invazív bőrfiatalító eljárás, amely szén-dioxid segítségével serkenti a bőr oxigénellátását és kollagéntermelését.',
    treatment:
      'A kezelés során a bőrbe juttatott CO₂ fokozza a vérkeringést, csökkenti a ráncokat, feszesíti a bőrt és javítja annak textúráját. Ideális választás fakó, fáradt bőrre, pigmentfoltok halványítására és a bőr rugalmasságának növelésére.',
    pros: [
      'Fakó, fáradt bőr élénkítése',
      'Ráncok és finom vonalak halványítása',
      'Pórusok összehúzása',
      'Hidratáció fokozása',
    ],
    cons: [
      'Nyílt sebek, aktív fertőzések a bőrön',
      'Súlyos akné, rosacea akut fázisban',
      'Terhesség és szoptatás',
      'Friss lézeres vagy hámlasztó kezelés utáni időszak',
    ],
    result:
      'A Carboxy kezelés már az első alkalommal látványos eredményt hoz, de kúraszerű alkalmazása segíti a bőr tartós megújulását és egészségesebb kinézetét.',
  },
  {
    name: 'Mikrotűs mezoterápia',
    slug: 'mikrotus-mezoterapia',
    image: 'meso_booster.webp',
    details:
      'A mikrotűs mezoterápia egy innovatív, frakcionált eljárás, amely hatékonyan serkenti a bőr regenerációs folyamatait, elősegíti a kollagéntermelést és fokozza a hatóanyagok felszívódását.',
    treatment:
      'A kezelés során apró mikrotűk segítségével sérülések keletkeznek a bőrön, amelyek beindítják a bőr öngyógyító mechanizmusait, ezáltal feszesebb, rugalmasabb és fiatalosabb bőrt eredményezve. \nA kezelést KRX Aesthetics szérumokkal végzem, amelyek magas koncentrációban tartalmaznak bőrazonos hatóanyagokat, vitaminokat és peptideket, hogy a legjobb eredményt érjük el bőrtípusodnak megfelelően.',
    pros: [
      'Ráncok, finom vonalak csökkentése',
      'Hegek halványítása',
      'Pigmentfoltok kezelése',
      'Pórusok méretének csökkentése',
      'Bőr feszesítése, tónusának javítása',
    ],
    cons: [
      'Terhesség, szoptatás',
      'Aktív bőrbetegségek (pl. ekcéma, psoriasis, herpesz)',
      'Nyílt sebek, friss hegek a kezelendő területen',
      'Autoimmun betegségek',
      'Vérhígító gyógyszerek szedése',
      'Keloid hajlam',
    ],
    result:
      'A kezelést követően enyhe bőrpír és duzzanat előfordulhat, amely 1-2 napon belül elmúlik. A legjobb eredmények érdekében kúraszerű alkalmazás javasolt, amelyet személyre szabottan állítok össze.',
  },
  {
    name: 'Thread-Fill kollagénszál kezelés',
    slug: 'thread-fill-kollagenszal-kezeles',
    image: 'thread_fill.webp',
    details:
      'A Thread-Fill kollagénszál kezelés egy fájdalommentes, nem invazív eljárás, amely serkenti a bőr saját kollagéntermelését és feszesítő hatást biztosít.',
    treatment:
      'A kezelés során biokompatibilis kollagénszálakat juttatok a bőr felszínére, amelyek fokozatosan felszívódva javítják a bőr rugalmasságát, csökkentik a ráncokat és kontúrosabbá teszik az arckontúrt.',
    pros: [
      'Bőrmegereszkedés csökkentése',
      'Ráncok és finom vonalak kezelése',
      'Arckontúr feszesítése',
      'A bőr tónusának és rugalmasságának javítása',
    ],
    cons: [
      'Aktív fertőzések, gyulladás a kezelendő területen',
      'Terhesség és szoptatás',
      'Autoimmun betegségek',
      'Keloid hajlam',
    ],
    result:
      'A kezelés azonnali feszesítő hatást biztosít, amely a következő hetekben tovább fokozódik a kollagéntermelés beindulásával.',
  },
  {
    name: 'Bioherb 50 mikrotűs peeling',
    slug: 'bioherb-50-mikrotus-peeling',
    image: 'bioherb_50.webp',
    details:
      'A Bioherb 50 mikrotűs peeling egy természetes növényi összetevőkön alapuló mélyhámlasztó kezelés, amely stimulálja a bőr regenerációs folyamatait anélkül, hogy mikrosérüléseket okozna.',
    treatment:
      'A kezelés során bioherb mikrotűs peeling elősegíti a bőr megújulását, csökkenti a pigmentfoltokat és finomítja a bőr textúráját.',
    pros: [
      'Pigmentfoltok halványítása',
      'Pattanások, aknés hegek kezelése',
      'Egyenetlen bőrfelszín és tág pórusok csökkentése',
      'Finom ráncok kezelése',
    ],
    cons: [
      'Nyílt sebek a kezelendő területen',
      'Friss lézeres vagy savas hámlasztás utáni időszak',
      'Autoimmun betegségek',
    ],
    result:
      'A kezelés után enyhe bőrpír, hámlás előfordulhat, amely néhány napon belül elmúlik, és a bőr simább, frissebb és egyenletesebb lesz. A tartós eredmény érdekében kúraszerű alkalmazás javasolt. Akár nyáron is alkalmazható.',
  },
];

export const priceListValidityMessage =
  'Az árlista 2024. 08. 01-étől érvényes.';
export const priceListLegalNote = 'Az árváltozás jogát fenntartom.';
export const mobileNumber = '+36 70 779 2509';
