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
  Arckezelések: [
    {
      title: 'Koreai Peel & Fill arckezelés',
      price: 20000,
      description:
        'Innovatív, savmentes koreai bőrmegújító kezelés, amely támogatja a bőr megújítását, regenerációját és hidratáltságát.',
    },
    {
      title: 'Aqua Balance arckezelés',
      price: 14000,
      description:
        'Intenzív hidratáló kezelés, amely feltölti a bőr nedvességtartalmát és helyreállítja annak természetes egyensúlyát.',
    },
    {
      title: 'Radiance arckezelés',
      price: 15500,
      description:
        'Tápláló, regeneráló kezelés, amely javítja a bőr minőségét és fokozza annak természetes ragyogását.',
    },
    {
      title: 'Bioherb 50 Peeling',
      price: 18000,
      description:
        'Természetes, savak nélküli bőrmegújító arckezelés, amely az egységesebb bőrkép kialakulását segíti.',
    },
    {
      title: 'Thread-Fill kollagénszálas kezelés',
      price: 16000,
      description: 'Felszívódó kollagénszálas arckezelés a feszesebb bőrért.',
    },
    {
      title: 'Mikrotűs mezoterápia',
      price: 19500,
      description:
        'Hatékony bőrmegújító kezelés, amely serkenti a kollagéntermelést és javítja a bőr szerkezetét.',
    },
    {
      title: 'Relaxáló arcmasszázs',
      price: 7000,
      description:
        'Oldja a feszültséget, serkenti a keringést és friss, kipihent arcbőrt eredményez.',
    },
    {
      title: 'Inflacure kezelés',
      price: 18000,
      description:
        'Gyulladt, érzékeny és problémás bőrre, akár rosaceás bőrre is ajánlott nyugtató kezelés, amely segít helyreállítani a bőr egyensúlyát.',
    },
    {
      title: 'Inflacure + tisztító kezelés',
      price: 22000,
      description:
        'Komplex kezelés tisztítással és gyulladáscsökkentő hatóanyagokkal a tisztább és nyugodtabb bőrért.',
    },
    {
      title: 'Tisztító kezelés',
      price: 11000,
      description:
        'Kézi arctisztítás, amely eltávolítja a szennyeződéseket és a mitesszereket, friss és tiszta bőrképet eredményez.',
    },
    {
      title: 'Nagy tisztító kezelés',
      price: 15500,
      description:
        'Kézi tisztítással, relaxáló masszázzsal és gépi hatóanyagbevitellel kombinált komplex kezelés a tisztább és egészségesebb bőrért.',
    },
  ],
  'Festések, szemöldök styling': [
    {
      title: 'Szemöldök szedés csipesszel',
      price: 2000,
    },
    {
      title: 'Szemöldök szedés, festés',
      price: 3500,
    },
    {
      title: 'Hibrid szemöldök szedés, festés',
      price: 4000,
    },
    {
      title: 'Szemöldök laminálás',
      price: 8000,
    },
    {
      title: 'Szemöldök szedés, festés, laminálás',
      price: 11000,
    },
    {
      title: 'Szempilla festés',
      price: 3000,
    },
    {
      title: 'Szempilla lifting',
      price: 9500,
    },
  ],
  Wax: [
    {
      title: 'Bajusz',
      price: 2500,
    },
    {
      title: 'Hónalj',
      price: 3000,
    },
    {
      title: 'Kar könyékig',
      price: 3500,
    },
    {
      title: 'Teljes kar',
      price: 4500,
    },
    {
      title: 'Láb térdig',
      price: 4500,
    },
    {
      title: 'Teljes láb',
      price: 7000,
    },
  ],
};

export const services: Services[] = [
  {
    name: 'Koreai Peel & Fill',
    slug: 'koreai-peel-and-fill',
    image: 'koreai_peel_and_fill.webp',

    details:
      'A Peel & Fill egy innovatív, 5. generációs, exoszómás bőrmegújító kezelés, amely a kíméletes sejtmegújítást és az intenzív hidratálást ötvözi. Savmentes technológiájának köszönhetően a hagyományos hámlasztó kezelésekkel szemben a bőr természetes védőrétegének megőrzésére és regenerációjának támogatására helyezi a hangsúlyt.',

    treatment:
      'A kezelés során ultrahangos hatóanyagbevitellel segítjük a speciális bőrmegújító és hidratáló összetevők felszívódását, majd LED-fényterápiával támogatjuk a bőr természetes regenerációs folyamatait. A két technológia együttes alkalmazása hozzájárul a bőr hidratáltságának, textúrájának és általános megjelenésének javításához. Az eljárás kíméletes, fájdalommentes, nem jár látható hámlással vagy felépülési idővel.',

    pros: [
      'Kíméletes bőr- és sejtmegújítás',
      'Intenzív hidratálás és bőrfeltöltés',
      'A bőr természetes védőrétegének regenerálásának támogatása',
      'Üdébb, ragyogóbb és frissebb bőrkép',
      'A bőr textúrájának és megjelenésének javítása',
      'Fájdalommentes kezelés, hámlás és felépülési idő nélkül',
      'Nem szárítja a bőrt',
      'Érzékeny, rosaceára hajlamos bőrön is alkalmazható',
      'Az év bármely szakában végezhető',
    ],
    cons: [
      'Orvosi retinoidkezelés alatt, illetve annak befejezését követő legalább 6 hónapban',
      'Retinoltartalmú otthoni készítmények használata a kezelés előtti és utáni 7 napban',
      'Aktív, fellángolásban lévő autoimmun bőrbetegségek',
      'Botoxkezelést vagy arcfeltöltést követő 4 hétben',
      'Műtéti beavatkozás után a teljes gyógyulásig',
      'Közepes vagy mély kémiai hámlasztást követő legalább 1 hónapban',
      'Egyéb hámlasztó és bőrmegújító kezelések után, az előírt várakozási idő leteltéig',
    ],
    result:
      'Az első változások már közvetlenül a kezelés után láthatók: a bőr frissebbnek, hidratáltabbnak és ragyogóbbnak tűnhet. A teljes eredmény várhatóan 8–10 nap alatt bontakozik ki, miközben a bőr megújulási folyamatai tovább zajlanak.',
  },
  {
    name: 'KRX Inflacure',
    slug: 'krx-inflacure',
    image: 'krx_inflacure.webp',
    details:
      'A KRX Inflacure egy professzionális regeneráló kezelés, amelyet kifejezetten rosaceára hajlamos, gyulladt, irritált és sérült bőrbarrierű bőr ápolására fejlesztettek ki. Különleges hatóanyag-kombinációja, többek között karbamid, természetes klorofill, nyugtató növényi kivonatok és biomimetikus peptidek segítik a bőrpír mérséklését, az irritáció enyhítését és a bőr természetes védőrétegének helyreállítását.',
    treatment:
      'A kezelés során ultrahangos hatóanyagbevitellel támogatjuk a nyugtató és regeneráló összetevők felszívódását, majd LED-fényterápiával segítjük a bőr természetes regenerációs folyamatait. A komplex ápolás célja a gyulladásra és irritációra hajlamos bőr megnyugtatása, intenzív hidratálása, valamint a kellemetlen feszülő, égő érzés enyhítése.',
    pros: [
      'Bőrpír és irritáció mérséklésének támogatása',
      'Nyugtató ápolás rosaceára hajlamos és pirosodó bőrre',
      'A sérült bőrbarrier regenerációjának támogatása',
      'Intenzív hidratálás és a bőr komfortérzetének javítása',
      'A feszülő, égő kellemetlen érzés enyhítése',
      'Biomimetikus peptidekkel támogatott bőrregeneráció',
    ],
    cons: [
      'Aktív, fertőző bőrbetegségek és herpesz az érintett területen',
      'Láz és akut fertőzéses megbetegedések',
      'Pacemaker vagy egyéb beültetett elektronikus eszköz ultrahangos kezelés esetén',
      'Terhesség esetén a gépi kezelés nem alkalmazható',
      'Fényérzékenység vagy fényérzékenységet okozó gyógyszerek szedése',
    ],

    result:
      'A kezelés segít megnyugtatni az irritált bőrt, mérsékelni a bőrpírt és enyhíteni a kellemetlen feszülő érzést. Intenzív hidratálást biztosít, javítja a bőr komfortérzetét, és támogatja a sérült bőrbarrier regenerációját. Rendszeres alkalmazása hozzájárul a kiegyensúlyozottabb, egészségesebb és ápoltabb bőrkép kialakulásához.',
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

export const priceListValidityMessage = 'Az árlista 2026. 11. 01-től érvényes.';
export const priceListLegalNote = 'Az árváltozás jogát fenntartom.';
export const mobileNumber = '+36 70 779 2509';
export const numberforCall = '+36707792509';
