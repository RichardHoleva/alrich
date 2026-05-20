import FamilyCottage from '/ALRICH/images/side_photo.png'
import FamilyHouse from '/ALRICH/images/back.png'
import interior from '/ALRICH/images/interier.png'
import Vila from '/ALRICH/images/ModernVila.png'
import OpenKitchen from '/ALRICH/images/OpenKitchen.png'
import Minimalistic from '/ALRICH/images/Minimalistic.png'
import publicImg from '/ALRICH/images/public.png'
import heroImg from '/ALRICH/images/Main_hero_image.png'
import AngelImg from '/ALRICH/images/Angel_photo.png'
import BackImg from '/ALRICH/images/Back_photos.png'
import FrontImg from '/ALRICH/images/Front_photo.png'
import sideImg from '/ALRICH/images/sideFH.png'
import frontImg from '/ALRICH/images/front_angel.png'
import livingroomImg from '/ALRICH/images/interie_living_room.png'
import insideWar from '/ALRICH/images/insidewarehouse.png'
import sideWar from '/ALRICH/images/sidewarehosue.png'
import backWar from '/ALRICH/images/backwarehouse.png'
import backvila from '/ALRICH/images/backvila.png'
import frontvila from '/ALRICH/images/frontvila.png'
import sidevila from '/ALRICH/images/sidevila.png'
import GuestsImg from '/ALRICH/images/guests.png'
import LivingImg from '/ALRICH/images/Living.png'
import KitchenImg from '/ALRICH/images/Kitchen.png'


export const PROJECTS = [
  {
    id: 1,
    number: '01',
    category: 'Residential',
    year: '2023',
    title: 'Family Cottage',
    location: 'Horná Stubňa, SK',
    area: '180 m²',
    client: 'Private',
    image: FamilyCottage,
    heroImage: FamilyCottage,
    gallery: [
      { image: FrontImg, caption: 'FRONT FACADE',    caption_sk: 'PREDNÁ FASÁDA' },
      { image: BackImg,       caption: 'SIDE VIEW',     caption_sk: 'POHĽAD NA ZÁHRADU' },
      { image: AngelImg,      caption: 'BACK VIEW', caption_sk: 'INTERIÉROVÝ DETAIL' },
    ],
    aboutHeadingPre: 'A quiet retreat built to blend with the ',
    aboutHeadingEm: 'highlands',
    aboutHeadingPre_sk: 'Pokojný úkryt stvorený splynúť s ',
    aboutHeadingEm_sk: 'vrchovinami',
    aboutBody: [
      'This family cottage was designed for a couple seeking a peaceful retreat in the Slovak highlands. The brief was simple — a warm, practical space that would grow with the family over time.',
      'We developed the full architectural concept from site analysis through to permit documentation, working closely with the clients at every stage. Material choices, window placements and the relationship between the house and its garden were resolved in dialogue rather than handed down.',
      'The result is a quiet, well-proportioned home that feels connected to its surroundings without drawing attention to itself — built to live in, not to be photographed.',
    ],
    aboutBody_sk: [
      'Táto rodinná chata bola navrhnutá pre pár hľadajúci pokojný úkryt v slovenských vrchovinách. Brief bol jednoduchý — teplý, praktický priestor, ktorý bude s rodinou rásť v čase.',
      'Vypracovali sme kompletný architektonický koncept od analýzy pozemku až po projekt pre stavebné povolenie, v úzkej spolupráci s klientmi v každom kroku. Výber materiálov, osadenie okien a vzťah domu k záhrade sa formoval v dialógu, nie príkazmi.',
      'Výsledkom je tichý, dobre proporcionovaný dom napojený na okolie bez toho, aby na seba pútal pozornosť — postavený na bývanie, nie na fotografovanie.',
    ],
    quote: {
      text: 'They listened more than they drew. The cottage we ended up with feels like it has always been there.',
      author: 'Mária Nováková',
      initials: 'MN',
      project: 'Family Cottage · Horná Stubňa',
    },
    quote_sk: {
      text: 'Počúvali viac, ako kreslili. Chata, ktorú sme nakoniec dostali, pôsobí, akoby tu vždy bola.',
      project: 'Rodinná chata · Horná Stubňa',
    },
  },
  {
    id: 2,
    number: '02',
    category: 'Residential',
    year: '2024',
    title: 'Family House',
    location: 'Bratislava, SK',
    area: '240 m²',
    client: 'Private',
    image: FamilyHouse,
    heroImage: FamilyHouse,
    gallery: [
      { image: frontImg, caption: 'REAR FACADE · GARDEN SIDE', caption_sk: 'ZADNÁ FASÁDA · ZÁHRADNÁ STRANA' },
      { image: sideImg,     caption: 'SIDE ELEVATION · SUNSET',   caption_sk: 'BOČNÁ FASÁDA · ZÁPAD SLNKA' },
      { image: livingroomImg,    caption: 'LIVING ROOM',            caption_sk: 'TERASA ZA SÚMRAKU' },
    ],
    aboutHeadingPre: 'A quiet family home ',
    aboutHeadingEm: 'near the city',
    aboutHeadingPre_sk: 'Tichý rodinný dom ',
    aboutHeadingEm_sk: 'v blízkosti mesta',
    aboutBody: [
      'This family house was designed for a young couple looking to build their first home on the outskirts of Bratislava. The brief was simple — a warm, practical space that would grow with them.',
      'We developed the full architectural concept from site analysis through to permit documentation, working closely with the clients at every stage. Material choices, window placements and the relationship between the house and its garden were resolved in dialogue rather than handed down.',
      'The result is a quiet, well-proportioned home that feels connected to its surroundings without drawing attention to itself — built to live in, not to be photographed.',
    ],
    aboutBody_sk: [
      'Tento rodinný dom bol navrhnutý pre mladý pár, ktorý si chcel postaviť prvý dom na okraji Bratislavy. Brief bol jednoduchý — teplý, praktický priestor, ktorý s nimi porastie.',
      'Vypracovali sme kompletný architektonický koncept od analýzy pozemku až po projekt pre stavebné povolenie, v úzkej spolupráci s klientmi v každom kroku. Výber materiálov, osadenie okien a vzťah domu k záhrade sa formoval v dialógu, nie príkazmi.',
      'Výsledkom je tichý, dobre proporcionovaný dom napojený na okolie — postavený na bývanie, nie na fotografovanie.',
    ],
    quote: {
      text: 'They listened more than they drew. The house we ended up with feels like ours — not a portfolio piece.',
      author: 'Jančo Gadžo',
      initials: 'JG',
      project: 'Family House · Bratislava',
    },
    quote_sk: {
      text: 'Počúvali viac, ako kreslili. Dom, ktorý sme nakoniec dostali, cítiť ako náš — nie kus portfólia.',
      project: 'Rodinný dom · Bratislava',
    },
  },
  
  {
    id: 3,
    number: '03',
    category: 'Residential',
    year: '2024',
    title: 'Modern Villa',
    location: 'Nitra, SK',
    area: '320 m²',
    client: 'Private',
    image: Vila,
    heroImage: Vila,
    gallery: [
      { image: frontvila,    caption: 'FRONT ELEVATION', caption_sk: 'PREDNÁ FASÁDA' },
      { image: sidevila,     caption: 'BACK VIEW',   caption_sk: 'ZÁHRADNÁ FASÁDA' },
      { image: backvila,     caption: 'SIDE VIEW',    caption_sk: 'ZADNÝ POHĽAD' },
    ],
    aboutHeadingPre: 'A generous family villa with a ',
    aboutHeadingEm: 'restrained character',
    aboutHeadingPre_sk: 'Veľkorysá rodinná vila s ',
    aboutHeadingEm_sk: 'povzdržaným charakterom',
    aboutBody: [
      'The Modern Villa in Nitra was commissioned by a family of four who wanted a generous home without ostentation. The site, a flat plot on the edge of a new residential district, gave us the freedom to orient the house toward a private garden.',
      'The plan organises living spaces on the ground floor around a central courtyard that brings light deep into the building. Bedrooms above are kept separate from the social areas below.',
      'External materials are limited to white render and dark timber — a palette that ages well and sits quietly in the landscape.',
    ],
    aboutBody_sk: [
      'Modernú vilu v Nitre si objednala rodina so štyrmi členmi, ktorá chcela veľkorysý domov bez okázalosti. Pozemok — rovný, na okraji novej rezidenčnej štvrte — nám dal slobodu orientovať dom k súkromnej záhrade.',
      'Dispozícia organizuje obytné priestory na prízemí okolo centrálneho atria, ktoré privádza svetlo hlboko do budovy. Spálne na poschodí sú oddelené od spoločenských priestorov dole.',
      'Vonkajšie materiály sú obmedzené na bielu omietku a tmavé drevo — paleta, ktorá dobre starne a ticho zapadá do krajiny.',
    ],
    quote: {
      text: 'It is large enough for the whole family and quiet enough for each of us. That balance is hard to achieve.',
      author: 'Tomáš Blaho',
      initials: 'TB',
      project: 'Modern Villa · Nitra',
    },
    quote_sk: {
      text: 'Je dosť veľká pre celú rodinu a dosť tichá pre každého z nás. Táto rovnováha sa ťažko dosahuje.',
      project: 'Moderná vila · Nitra',
    },
  },
  {
    id: 4,
    number: '04',
    category: 'Interior',
    year: '2019',
    title: 'Open Interior',
    location: 'Trnava, SK',
    area: '65 m²',
    client: 'Private',
    image: OpenKitchen,
    heroImage: OpenKitchen,
    gallery: [
      { image: KitchenImg,  caption: 'KITCHEN ',  caption_sk: 'KUCHYNSKÝ OSTROV' },
      { image: LivingImg,     caption: 'LIVING ROOM',     caption_sk: 'JEDÁLENSKÁ ZÓNA' },
      { image: GuestsImg, caption: 'BOOKROOM',caption_sk: 'DETAIL · STOLÁRSTVO' },
    ],
    aboutHeadingPre: 'One continuous space for ',
    aboutHeadingEm: 'cooking, eating and talking',
    aboutHeadingPre_sk: 'Jeden súvislý priestor na ',
    aboutHeadingEm_sk: 'varenie, jedenie a rozhovory',
    aboutBody: [
      'The brief was to combine a cramped kitchen and separate dining room into a single generous space. A structural wall came out, and the two rooms became one.',
      'The kitchen island does double duty as a worktop and dining table, keeping the plan tight without feeling compromised. All joinery is in smoked oak with matte black hardware.',
      'Natural light comes from a new rooflight over the cooking area — the most used spot in the house now has the best light.',
    ],
    aboutBody_sk: [
      'Zámerom bolo spojiť stiesnenu kuchyňu a oddelenú jedáleň do jedného veľkorysého priestoru. Zbúrala sa nosná stena a z dvoch izieb sa stala jedna.',
      'Kuchynský ostrov slúži dvojito — ako pracovná plocha aj jedálenský stôl, čím je dispozícia kompaktná bez pocitu obmedzenia. Všetko stolárstvo je v údenom dube s matným čiernym kovaním.',
      'Prirodzené svetlo prichádza cez nové strešné okno nad zónou varenia — najviac využívané miesto v dome má teraz najlepšie svetlo.',
    ],
    quote: {
      text: 'We used to avoid cooking. Now the kitchen is where we spend most of our evenings.',
      author: 'Zuzana Horáková',
      initials: 'ZH',
      project: 'Open Kitchen · Trnava',
    },
    quote_sk: {
      text: 'Vareniu sme sa predtým vyhýbali. Teraz je kuchyňa miestom, kde trávime väčšinu večerov.',
      project: 'Otvorená kuchyňa · Trnava',
    },
  },
    {
    id: 6,
    number: '06',
    category: 'Public',
    year: '2023',
    title: 'Commercial Warehouse',
    location: 'Žilina, SK',
    area: '1 200 m²',
    client: 'Commercial',
    image: publicImg,
    heroImage: publicImg,
    gallery: [
      { image: sideWar,     caption: 'SIDE VIEW', caption_sk: 'VÝCHODNÁ FASÁDA' },
      { image: insideWar,   caption: 'INSIDE WAREHOUSE',  caption_sk: 'HLAVNÝ VSTUP' },
      { image: backWar,     caption: 'BACK VIEW',   caption_sk: 'SITUÁCIA' },
    ],
    aboutHeadingPre: 'A working building that ',
    aboutHeadingEm: 'takes its setting seriously',
    aboutHeadingPre_sk: 'Pracovná budova, ktorá ',
    aboutHeadingEm_sk: 'berie vážne svoje okolie',
    aboutBody: [
      'The brief called for a straightforward industrial building: robust, efficient and cheap to run. The site sits on the edge of Žilina beside older factory buildings and a treeline.',
      'We organised the plan around a central logistics spine with offices at the front and loading at the rear. Facade material is corrugated corten steel — it weathers to match the older buildings nearby.',
      'The result is a warehouse that does not pretend to be something else but handles itself with a certain quiet dignity.',
    ],
    aboutBody_sk: [
      'Požadoval priamočiaru priemyselnú budovu: robustnú, efektívnu a lacnú na prevádzku. Pozemok leží na okraji Žiliny vedľa starších priemyselných budov a línie stromov.',
      'Dispozíciu sme organizovali okolo centrálnej logistickej osi s kanceláriami vpredu a nakládkou vzadu. Fasádny materiál je zvlnená cor-ten oceľ — pri oxidácii ladí so staršími budovami v okolí.',
      'Výsledkom je sklad, ktorý sa nestváral ničím iným, no nesie sa s určitou tichosťou a dôstojnosťou.',
    ],
    quote: {
      text: 'Our staff actually like coming to work. The building feels considered, which is not something we expected from a warehouse.',
      author: 'Radovan Kupec',
      initials: 'RK',
      project: 'Commercial Warehouse · Žilina',
    },
    quote_sk: {
      text: 'Naši zamestnanci chodia do práce skutočne radi. Budova pôsobí premyslene, čo sme od skladu nečakali.',
      project: 'Komerčný sklad · Žilina',
    },
  },
  {
    id: 'minimalistic',
    number: '06',
    category: 'Interior',
    year: '2025',
    title: 'Minimalistic Interior',
    location: 'Bratislava, SK',
    area: '95 m²',
    client: 'Private',
    image: Minimalistic,
    heroImage: Minimalistic,
    gallery: [
      { image: Minimalistic, caption: 'LIVING AREA',    caption_sk: 'OBÝVACIA ZÓNA' },
      { image: OpenKitchen,  caption: 'KITCHEN DETAIL', caption_sk: 'KUCHYNSKÝ DETAIL' },
      { image: interior,     caption: 'BEDROOM WING',   caption_sk: 'SPÁLŇOVÉ KRÍDLO' },
    ],
    aboutHeadingPre: 'A spare apartment with ',
    aboutHeadingEm: 'nothing unnecessary',
    aboutHeadingPre_sk: 'Strohý byt ',
    aboutHeadingEm_sk: 'bez zbytočností',
    aboutBody: [
      'The client brief was refreshingly clear: remove everything that does not need to be there. The apartment already had good proportions; it needed editing, not decorating.',
      'We replaced six different floor finishes with one. Built-in storage replaced freestanding furniture. Colour was reduced to white, concrete and warm wood.',
      'The result is an apartment that photographs as minimal but lives as generous — because the space is doing the work.',
    ],
    aboutBody_sk: [
      'Klienta bol osviežujúco jasný: odstrániť všetko, čo tam byť nemusí. Byt mal už dobré proporcie; potreboval úpravu, nie dekoráciu.',
      'Šesť rôznych podlahových úprav sme nahradili jednou. Vstavaná úložná plocha nahradila voľne stojací nábytok. Farby sa zúžili na bielu, betón a teplé drevo.',
      'Výsledkom je byt, ktorý fotí minimalisticky, no žije veľkoryso — pretože priestor robí prácu.',
    ],
    quote: {
      text: 'For the first time in years the apartment feels like ours, not a collection of decisions we regret.',
      author: 'Martin Šimko',
      initials: 'MŠ',
      project: 'Minimalistic Interior · Bratislava',
    },
    quote_sk: {
      text: 'Prvýkrát za roky cítiť byt ako náš vlastný, nie zbierku rozhodnutí, ktoré ľutujeme.',
      project: 'Minimalistický interiér · Bratislava',
    },
  },
  
]
