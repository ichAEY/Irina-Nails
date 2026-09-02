const bookingUrl = "https://dikidi.net/1665596?p=0.pi";
const mapUrl = "https://yandex.ru/maps/org/studiya_manikyura/17785178023?si=yhvg8r6q3hnvbqqetbaazr0ycr";
const reviewsUrl = "https://yandex.ru/maps/org/studiya_manikyura/17785178023/reviews/";

const gallery = [
  { src: "/assets/i1.webp", alt: "Работа Ирины, Irina Nails — 1" },
  { src: "/assets/i2.webp", alt: "Работа Ирины, Irina Nails — 2" },
  { src: "/assets/i3.webp", alt: "Работа Ирины, Irina Nails — 3" },
  { src: "/assets/i4.webp", alt: "Работа Ирины, Irina Nails — 4" },
  { src: "/assets/i5.webp", alt: "Работа Ирины, Irina Nails — 5" },
  { src: "/assets/i6.webp", alt: "Работа Ирины, Irina Nails — 6" },
];

export default {
  brand: { name: "Irina Nails", subtitle: "Nail studio", monogram: "I" },
  master: {
    name: "Ирина Пермякова",
    dative: "Ирине",
    genitive: "Ирины",
    monogram: "I",
    profession: "мастер ногтевого сервиса",
    heroTitle: "Ирина Пермякова — мастер ногтевого сервиса",
    heroCopy: "Маникюр, педикюр, укрепление и дизайн с онлайн-записью и прямой связью с мастером.",
    experienceYears: "",
    experienceAria: "Опыт мастера",
    aboutTitle: "Ирина Пермякова — мастер Irina Nails",
    aboutLead: "Я Ирина Пермякова — ведущий мастер маникюра.",
    aboutParagraphs: [
      "В прайсе — маникюр с покрытием и укреплением, наращивание, аппаратный педикюр и дизайн ногтей.",
      "Записаться можно онлайн через DIKIDI, а уточнить услугу — напрямую в Telegram, WhatsApp или по телефону.",
    ],
    skills: ["Маникюр и укрепление", "Педикюр", "Дизайн ногтей"],
  },
  location: {
    city: "Москва",
    metro: "м. Нагорная",
    cityMetro: "Москва · м. Нагорная",
    address: "Москва, Электролитный проезд, 1Б, этаж 1",
    mapCardAddress: "Электролитный проезд, 1Б",
    schedule: "ежедневно 10:00–21:00",
    scheduleCapitalized: "Ежедневно 10:00–21:00",
    latitude: 55.673067,
    longitude: 37.620680,
  },
  contacts: {
    phoneDisplay: "+7 960 190-32-53",
    phoneHref: "tel:+79601903253",
    personalTelegramUrl: "https://t.me/maniknagornaya",
    channelTelegramUrl: "",
  },
  extraContacts: {
    whatsappUrl: "https://wa.me/79601903253",
    vkUrl: "https://m.vk.ru/irina_mvnik",
  },
  links: {
    bookingUrl,
    bookingWidgetScriptUrl: "/noop.js",
    reviewsUrl,
    mapUrl,
    routeUrl: "https://yandex.ru/maps/?mode=routes&rtext=~55.673067%2C37.620680&rtt=auto",
    mobileMapEmbedUrl: "https://yandex.ru/map-widget/v1/?ll=37.620680%2C55.673067&mode=search&oid=17785178023&ol=biz&z=16",
    desktopMapEmbedUrl: "https://yandex.ru/map-widget/v1/?ll=37.620680%2C55.673067&z=16&l=map&pt=37.620680%2C55.673067%2Cpm2rdm",
    yandexMapHrefMatch: "yandex.ru/maps/org/studiya_manikyura",
  },
  reputation: { rating: "5,0", reviewCount: "96" },
  images: {
    portrait: "/assets/portrait.webp",
    about: "/assets/portrait.webp",
    favicon: "/favicon.svg",
    beforeAfter: gallery.slice(0, 2),
    gallery,
  },
  services: {
    manicure: [
      { name: "Маникюр женский / мужской без покрытия", price: "2 000 ₽", time: "1 ч", description: "Гигиенический маникюр без покрытия.", url: bookingUrl },
      { name: "Маникюр с однотонным покрытием + выравнивание базой", price: "от 3 500 ₽", time: "2 ч", description: "Маникюр, однотонное покрытие и выравнивание базой.", url: bookingUrl },
      { name: "Комплекс 1: маникюр + покрытие + укрепление", price: "4 000 ₽", time: "2 ч 30 мин", description: "Для короткой и средней длины: снятие покрытия, маникюр и укрепление ногтей.", url: bookingUrl },
      { name: "Комплекс 2: маникюр + покрытие + укрепление длинных ногтей", price: "от 5 000 ₽", time: "3 ч", description: "Снятие, маникюр и укрепление длинных ногтей полигелем или гелем.", url: bookingUrl },
      { name: "Снятие гель-лака + гигиенический маникюр", price: "2 400 ₽", time: "1 ч 30 мин", description: "Без последующего покрытия.", url: bookingUrl },
      { name: "Втирка на все ногти", price: "500 ₽", time: "20 мин", description: "Дополнительный дизайн.", url: bookingUrl },
      { name: "Кошачий глаз на все ногти", price: "200 ₽", time: "15 мин", description: "Дополнительный дизайн.", url: bookingUrl },
      { name: "Слайдер / наклейка", price: "100 ₽", time: "10 мин", description: "Стоимость за один ноготь.", url: bookingUrl },
      { name: "Стемпинг", price: "150 ₽", time: "10 мин", description: "Стоимость за один ноготь.", url: bookingUrl },
      { name: "Френч", price: "500 ₽", time: "30 мин", description: "Дополнительный дизайн.", url: bookingUrl },
    ],
    pedicure: [
      { name: "Педикюр Экспресс без покрытия", price: "2 500 ₽", time: "1 ч", description: "Экспресс-педикюр без покрытия.", url: bookingUrl },
      { name: "Педикюр Экспресс + гель-лак / плёнки", price: "3 700 ₽", time: "1 ч 40 мин", description: "Экспресс-педикюр с покрытием.", url: bookingUrl },
      { name: "Аппаратный педикюр диском без покрытия", price: "2 800 ₽", time: "1 ч 30 мин", description: "Женский аппаратный педикюр без покрытия.", url: bookingUrl },
      { name: "Педикюр с обработкой стопы + гель-лак / плёнки", price: "4 000 ₽", time: "2 ч", description: "Обработка стопы и покрытие.", url: bookingUrl },
    ],
  },
  reviews: [
    { text: "Клиенты отмечают аккуратную работу и стойкость покрытия без отслоек.", author: "По отзывам" },
    { text: "В отзывах хвалят спокойную атмосферу и внимательное отношение.", author: "По отзывам" },
    { text: "Отдельно отмечают маникюр, педикюр и наращивание.", author: "По отзывам" },
  ],
  promotions: [],
  amenities: [
    { title: "Онлайн-запись", text: "Свободное время доступно через DIKIDI" },
    { title: "Прямая связь", text: "Telegram, WhatsApp и телефон мастера" },
    { title: "Маникюр и педикюр", text: "Основные услуги собраны в одном прайсе" },
  ],
  seo: {
    title: "Ирина Пермякова | Irina Nails — маникюр и педикюр в Москве",
    description: "Маникюр и педикюр у Ирины Пермяковой в Москве. Услуги, цены, работы, отзывы и онлайн-запись.",
    keywords: ["Ирина Пермякова маникюр", "Irina Nails", "маникюр Нагорная", "педикюр Нагорная", "маникюр Электролитный проезд"],
    locale: "ru_RU",
  },
  analytics: { yandexMetrikaId: "0" },
};
