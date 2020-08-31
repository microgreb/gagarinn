import Vue from 'vue'
import AppBooking from './AppBooking.vue'
import store from './store'
import Vuex from 'vuex'
import VueI18n from 'vue-i18n'

Vue.config.productionTip = false;

/**
 * Vuex Storage
 */
Vue.use(Vuex);


const messages = {
    en: {
        navigation: {
            rooms: 'Rooms',
            food: 'Restaurant',
            confService: 'Conference service',
            service: 'SERVICES',
            news: 'News',
            career: 'Career',
            contact: 'Contacts',
            booking: 'Booking'
        },
        booking: {
            title: 'BOOK NOW',
            label1: 'Check in',
            label2: 'Departure',
            label3: 'Guests',
            guest: 'person',
            guests: 'persons'
        },
        videoSection: {
            description: ' Gagarinn Hotel is the four-star hotel located in Arcadia, the vivid tourist\n' +
                '                              area of the city. Gagarinn Hotel is the best place for business and leisure\n' +
                '                              that is located not far from the beaches, nightclubs,\n' +
                '                              up-to-date restaurants and other city attractions',
            descriptionMob: 'Gagarinn Hotel provides such services as taxi-transfer, car rent, private\n' +
                'parking, Wi-Fi, restaurant and shopping centre. The hotel has dry\n' +
                'cleaning, laundry and luggage storage as well as lobby bar with a wide\n' +
                'cocktail menu.\n'
        },
        confSection: {
            title: 'Conference service',
            text1: ' The complex of 9 modern conference halls is located on the third floor of\n' +
                '                         Gagarinn Hotel. You can rent a room for any corporate or private event:\n' +
                '                         conferences, presentations, seminars, workshops, business meetings,\n' +
                '                         team-building etc.',
            text2: ' High-speed Wi-Fi, up-to-date multimedia technologies and air conditioning\n' +
                '                         system with temperature control ensure effective and productive work.\n' +
                '                         Our staff will provide all necessary support including wide range of catering services: coffee breaks, business lunches, dinners and banquets.',
            moreBtn: 'Learn more'
        },
        foodSection: {
            title: 'Gagarinn Food Hub Restaurant',
            text1 : 'You can find Gagarinn Food Hub restaurant on the second floor of the\n' +
                '                         Gagarinn Hotel. Gagarinn Food Hub can host nearly 300 guests. This is a\n' +
                '                         great place for business meetings, corporate and special events or\n' +
                '                         ordinary lunches. We offer dishes of European, Asia, Ukrainian, local\n' +
                '                         Odessa cuisine as well as wide cocktail menu. Our hospitality and\n' +
                '                         high-quality service is the guarantee that your stay at the Gagarinn Hotel\n' +
                '                         will be as great as possible.',
            text2: 'Restaurant treats guests with breakfast every day from 7 a.m',
            text3: 'You can also order a Continental breakfast. Delivery in the room included',
            moreBtn: 'Learn More'
        },
        contactSection: {
            title: 'Contacts',
            subTitle1: 'Our contacts',
            subTitle1Text: ' 5B, Gagarin Plato, Odessa City,\n' +
                '                                        Ukraine 65009',
            subTitle2: 'CONFERENCE SERVICE',
            subTitle2Text: '+380 48 77 444 73\n' +
                '                                sales@gagarinn.com',
            subTitle3: 'BOOKING',
            subTitle3Text: ' +38 (063) 76 851 24\n' +
                '                                hotel@gagarinn.com',
            subTitle4: 'Food Hub',
            subTitle4Text: ' +38 (048) 735 20 60\n' +
                '                                5B, Gagarin Plato',
            subTitle5: 'Children\'s planet',
            subTitle5Text: '0 800 30 33 30\n' +
                '                                5B, Gagarin Plato',
        },
        services: {
            services: 'Services',
            arrival: 'Arrival at 14:00',
            departure: 'Departure at 12:00',
            concierge: 'Concierge service',
            laundry: 'Laundry / Dry cleaning',
            restaurant: 'Food Hub Restaurant',
            lobby: 'Lobby bar 24/7',
            roomService: 'Round-the-clock Room Service',
            conferenceService: 'Conference service',
            mall: 'Shopping mall'
        },
        bathroom: {
            bathroom: 'Bathroom',
            shower: 'shower',
            bath: 'bath',
            hairdryer: 'hairdryer',
            towels: 'towels',
            bath_robes: 'bath robes',
            slippers: 'slippers',
            toiletries: 'free toiletries',
        },
        accommodation: {
            accommodation: 'Room accommodation',
            double_bed: 'double bed',
            two_beds: 'two single beds',
            conditioner: 'air conditioner',
            tv: 'TV set',
            telephone: 'telephone',
            safe: 'safe',
            minibar: 'mini-bar',
            luggage: 'luggage socle',
            hangers: 'hangers',
            secretaire: 'secretaire',
            chair: 'chair',
            mirror: 'mirror',
            wardrobe: 'wardrobe',
            wifi: 'WI-FI',
            kingsize: 'King Size bed',
            sofa: 'fold-out sofa',
            table: 'low table',
            anteroom: 'anteroom',

        },
        roomStandard: {
            title: 'Standard Room',
            textTop: ' One-room accommodation with all the modern amenities.\n' +
                '                              There are available several types of Standard rooms: with a double bed or two single beds.\n' +
                '                              When booking a Standard room  you also gain access to the view over the Gagarinn Plaza shopping mall.\n' +
                '                              Standard rooms are located on 4-5th floors of the hotel.',
            priceTitle: 'Price',
            priceDescription: 'uah',
            areaTitle: 'Area',
            areaDescription: 'm2',
            guests: 'Guests',
            guestDescription: 'per',
            subTitle1: '',
            subDescription1: '',
            subTitle2: '',
            subDescription2: '',
            subTitle3: '',
            subDescription3: '',
        },
        roomDeluxe: {
            title: 'Superior Room/deluxe',
            textTop: ' Superior rooms are designed in European style and arranged with cozy furniture.\n' +
                '                              They are available in several variations: with a double bed or two single beds. These rooms are located on 4-18th floors of the hotel.',
            priceTitle: 'Price',
            priceDescription: 'uah',
            areaTitle: 'Area',
            areaDescription: 'm2',
            guests: 'Guests',
            guestDescription: 'per',
            subTitle1: '',
            subDescription1: '',
            subTitle2: '',
            subDescription2: '',
            subTitle3: '',
            subDescription3: '',
        },
        roomLux: {
            title: 'Suite Room',
            textTop: ' Two-room Suite designed in European style with the large double bed and\n' +
                '                              modern furniture. When booking a Suite Room you also gain access to the superb\n' +
                '                              panoramic views over the sea or the city. Suite Rooms are located on\n' +
                '                              4-19 floors. The number of guests: 1-4.',
            priceTitle: 'Price',
            priceDescription: 'uah',
            areaTitle: 'Area',
            areaDescription: 'm2',
            guests: 'Guests',
            guestDescription: 'per',
            subTitle1: '',
            subDescription1: '',
            subTitle2: '',
            subDescription2: '',
            subTitle3: '',
            subDescription3: '',
        },
        roomStudio: {
            title: 'Studio',
            textTop: ' Studio consists of two zones: a bedroom and living room. Two variants of\n' +
                '                              views from the window: on the sea or the city. Located on the 8 and 19\n' +
                '                              floors. The number of guests: 1-4.',
            priceTitle: 'Price',
            priceDescription: 'uah',
            areaTitle: 'Area',
            areaDescription: 'm2',
            guests: 'Guests',
            guestDescription: 'per',
            subTitle1: '',
            subDescription1: '',
            subTitle2: '',
            subDescription2: '',
            subTitle3: '',
            subDescription3: '',
        },
        roomFamily: {
            title: 'Family Suite',
            textTop: ' Family Suite has two bedrooms and a living room executed in European\n' +
              '                              style. The windows open up a panoramic view of the sea and\n' +
              '                              the city. Rooms are located on the 13th floor and are equipped with\n' +
              '                              modern technics, furniture, a queen size bed in each\n' +
              '                              bedroom, as well as a large expandable sofa in the living room. Family\n' +
              '                              Suite has two separate bathrooms - one with a shower, and another one\n' +
              '                              with a bath.',
            priceTitle: 'Price',
            priceDescription: 'uah',
            areaTitle: 'Area',
            areaDescription: 'm2',
            guests: 'Guests',
            guestDescription: 'per',
            subTitle1: '',
            subDescription1: '',
            subTitle2: '',
            subDescription2: '',
            subTitle3: '',
            subDescription3: '',
        },
        buttons: {
            btn1: 'BOOK NOW',
            more: 'More about the room',
            hide: 'Hide'
        }
    },
    ru: {
        navigation: {
            rooms: 'Номера',
            food: 'Ресторан',
            confService: 'Конференц-сервис',
            service: 'Услуги',
            news: 'Новости',
            career: 'Карьера',
            contact: 'Контакты',
            booking: 'Бронирование'
        },
        booking: {
            title: 'Забронировать',
            label1: 'Заезд',
            label2: 'Выезд',
            label3: 'Гостей',
            guest: 'человек',
            guests: 'человека'
        },
        videoSection: {
            description: 'Gagarinn Hotel — четырехзвездочный отель, расположенный в элитном\n' +
                '                        районе Одессы — самом сердце Аркадии. Gagarinn Hotel — это отдых в\n' +
                '                        непосредственной близости к пляжам, летним клубам,\n' +
                '                        фешенебельным ресторанам и главным достопримечательностям\n' +
                '                        города.',
            descriptionMob: 'К услугам гостей — бесплатный такси-трансфер,\n' +
                '                        Wi-Fi, собственная парковка, ресторан\n' +
                '                        Gagarinn Food Hub, торгово-развлекательный\n' +
                '                        центр Gagarinn Plaza. В отеле есть химчистка,\n' +
                '                        прачечная, камера хранения и сервис\n' +
                '                        обслуживания номеров Room Service 24/7.\n' +
                '                        На территории круглосуточно работает\n' +
                '                        лобби-бар с широкой коктейльной картой.'
        },
        confSection: {
            title: 'Конференц-сервис',
            text1: 'На третьем этаже Gagarinn Hotel расположен комплекс из 9\n' +
                '                    современных конференц-залов. Здесь можно арендовать помещение\n' +
                '                    для любого корпоративного или частного мероприятия: конференции,\n' +
                '                    презентации, семинара, тренинга, деловой встречи, тимбилдинга и не\n' +
                '                    только.',
            text2: ' Высокоскоростной Wi-Fi, вся мультимедийная и презентационная\n' +
                '                    техника, система кондиционирования с оптимальным температурным\n' +
                '                    режимом обеспечат продуктивную работу, а персонал окажет\n' +
                '                    необходимое сопровождение вашего мероприятия.\n' +
                '                    Gagarinn Hotel предоставляет любые услуги кейтеринга, которых\n' +
                '                    требуют такие форматы мероприятий, как кофе-брейки, бизнес-ланчи,\n' +
                '                    ужины и банкеты.',
            moreBtn: 'Подробнее'
        },
        foodSection: {
            title: 'Ресторан FoodHub',
            text1 : ' На втором этаже Gagarinn Hotel расположен ресторан Gagarinn Food\n' +
                '                    Hub на 300 посадочных мест. Это отличное место для проведения\n' +
                '                    бизнес-ланчей, корпоративных мероприятий и торжественных\n' +
                '                    событий. Здесь гостям предлагают блюда европейской, азиатской,\n' +
                '                    украинской и локальной одесской кухонь. Также к вашим услугам —\n' +
                '                    карта напитков, разнообразие шведского стола. Gagarinn Food Hub —\n' +
                '                    это абсолютно новый формат ресторана с исключительной\n' +
                '                    философией. Здесь Вы гарантированно получаете больше, чем\n' +
                '                    привыкли получать. Как от блюд, так и от сервиса.',
            text2: ' Ресторан угощает гостей завтраком каждый день с 7:00. Вы также\n' +
                '                    можете заказать Континентальный завтрак с доставкой в номер.',
            text3: 'Добро пожаловать в ресторан Gagarinn Food Hub на 3 этаже ТРЦ\n' +
                '                    Gagarinn Plaza.',
            moreBtn: 'Подробнее'
        },
        contactSection: {
            title: 'Контакты',
            subTitle1: 'Адрес',
            subTitle1Text: '65009, Украина, г. Одесса, \n' +
                '                                ул. Гагаринское плато, 5Б',
            subTitle2: 'Конференц-сервис',
            subTitle2Text: '+380 48 77 444 73\n' +
                '                                sales@gagarinn.com',
            subTitle3: 'Бронирование',
            subTitle3Text: ' +38 (063) 76 851 24\n' +
                '                                hotel@gagarinn.com',
            subTitle4: 'Food Hub',
            subTitle4Text: ' +38 (048) 735 20 60\n' +
                '                                ул. Генуэзская, 5',
            subTitle5: 'Детская планета',
            subTitle5Text: '0 800 30 33 30\n' +
                '                                ул. Генуэзская, 5',

        },
        services: {
            services: 'Услуги',
            arrival: 'Заселение в 14:00',
            departure: 'Выселение в 12:00',
            concierge: 'Консьерж-сервис',
            laundry: 'Прачечная/химчистка',
            restaurant: 'Ресторан Food Hub',
            lobby: 'Лобби-бар 24/7',
            roomService: 'Круглосуточный Room Servise',
            conferenceService: 'Конференц-сервис',
            mall: 'торгово-развлекательный центр'
        },
        bathroom: {
            bathroom: 'Ванная комната',
            shower: 'душ',
            bath: 'ванна',
            hairdryer: 'фен',
            towels: 'полотенца',
            bath_robes: 'халаты',
            slippers: 'тапочки',
            toiletries: 'средства гигиены',
        },
        accommodation: {
            accommodation: 'В номере',
            double_bed: 'двуспальная',
            two_beds: 'две односпальные',
            conditioner: 'кондиционер',
            tv: 'телевизор',
            telephone: 'телефон',
            safe: 'сейф',
            minibar: 'мини-бар',
            luggage: 'багажная тумба',
            hangers: 'вешалки',
            secretaire: 'письменный стол',
            chair: 'стул',
            mirror: 'зеркало',
            wardrobe: 'шкаф для одежды',
            wifi: 'WI-FI',
            kingsize: 'кровать King Size',
            sofa: 'раскладной диван',
            table: 'журнальный стол',
            anteroom: 'прихожая',
        },
        roomStandard: {
            title: 'Стандарт',
            textTop: ' Однокомнатный номер со всеми удобствами. Доступен в нескольких\n' +
                '                        вариациях: с двуспальной кроватью либо двумя односпальными.\n' +
                '                        Стандартные номера расположены на 4-5 этажах отеля. Из окон\n' +
                '                        номера открывается вид на ТРЦ Gagarinn Plaza.',
            priceTitle: 'Цена',
            priceDescription: 'грн',
            areaTitle: 'Площадь',
            areaDescription: 'м2',
            guests: 'Гостей',
            guestDescription: 'чел',
            subTitle1: 'В номере',
            subDescription1: ' Одна двуспальная кровать/две односпальных кровати,\n' +
                '                                    Письменный стол,  Кондиционер, Телевизор,  Телефон,\n' +
                '                                    Сейф, Мини-бар, Багажная тумба,  Вешалки,  Стул,\n' +
                '                                    Гардеробнй шкаф, Зеркало,  WI-FI',
            subTitle2: 'В ванной комнате',
            subDescription2: ' Душ,  Фен,  Полотенца,  Тапочки\n' +
                '                                    Средства гигиены',
            subTitle3: 'Услуги',
            subDescription3: 'Заселение в 14:00, Выселение в 12:00,\n' +
                '                                    Консьерж-сервис, Прачечная/химчистка, Ресторан\n' +
                '                                    европейской, японской и украинской кухни\n' +
                '                                    Food Hub, Лобби-бар 24/7, Круглосуточный Room\n' +
                '                                    Servise, Конференц-сервис, Т\n' +
                '                                    оргово-развлекательный центр',
        },
        roomDeluxe: {
            title: 'Улучшенный',
            textTop: ' Номер с современной мебелью и уютной обстановкой. Возможно\n' +
                '                        комфортное размещение гостей на одной двуспальной либо на 2-х\n' +
                '                        односпальных кроватях. Номера этой категории расположены с 4 по\n' +
                '                        18 этаж.',
            priceTitle: 'Цена',
            priceDescription: 'грн',
            areaTitle: 'Площадь',
            areaDescription: 'м2',
            guests: 'Гостей',
            guestDescription: 'чел',
            subTitle1: 'В номере',
            subDescription1: 'Oдна двуспальная кровать/две односпальных кровати,\n' +
                '                                    Kондиционер, Телевизор, Телефон, Сейф, Мини-бар,\n' +
                '                                    Багажная тумба, Вешалки, Письменный стол, Стул,\n' +
                '                                    Зеркало, Шкаф для одежды, WI-FI',
            subTitle2: 'В ванной комнате',
            subDescription2: ' Душ,  Фен,  Полотенца,  Тапочки\n' +
                '                                    Средства гигиены',
            subTitle3: 'Услуги',
            subDescription3: 'Заселение в 14:00, Выселение в 12:00,\n' +
                '                                    Консьерж-сервис, Прачечная/химчистка, Ресторан\n' +
                '                                    европейской, японской и украинской кухни\n' +
                '                                    Food Hub, Лобби-бар 24/7, Круглосуточный Room\n' +
                '                                    Servise, Конференц-сервис, Торгово-развлекательный центр',
        },
        roomLux: {
            title: 'Люкс',
            textTop: '  Двухкомнатный номер, выполненный в европейском стиле. Из окон\n' +
                '                        открывается панорамный вид на море и город. Расположение\n' +
                '                        номеров: 4-19 этажи. Номер оборудован современной техникой,\n' +
                '                        мебелью, в том числе, большой двуспальной кроватью.',
            priceTitle: 'Цена',
            priceDescription: 'грн',
            areaTitle: 'Площадь',
            areaDescription: 'м2',
            guests: 'Гостей',
            guestDescription: 'чел',
            subTitle1: 'В номере',
            subDescription1: 'Кровать King Size, Раскладной диван,  Журнальный\n' +
                '                                    столик,  Письменный стол,  Кондиционер,\n' +
                '                                    Телевизор,  Телефон, Сейф Мини-бар, Багажная\n' +
                '                                    тумба,  Вешалки,  Стул,  Гардеробнй шкаф,  Большое\n' +
                '                                    зеркало,  WI-FI',
            subTitle2: 'В ванной комнате',
            subDescription2: 'Душ/ванна,  Фен,  Полотенца,  Халаты,  Тапочки\n' +
                '                                    Средства гигиены',
            subTitle3: 'Услуги',
            subDescription3: 'Заселение в 14:00, Выселение в 12:00,\n' +
                '                                    Консьерж-сервис, Прачечная/химчистка, Ресторан\n' +
                '                                    европейской, японской и украинской кухни\n' +
                '                                    Food Hub, Лобби-бар 24/7, Круглосуточный Room\n' +
                '                                    Servise, Конференц-сервис, Торгово-развлекательный\n' +
                '                                    центр',
        },
        roomStudio: {
            title: 'Студия',
            textTop: ' Просторный однокомнатный номер в стиле минимализм, разделённый\n' +
                '                        на две зоны: спальную и гостиную. Номер оборудован современной\n' +
                '                        техникой и мебелью. Из окон открывается вид на панораму города и\n' +
                '                        море. Номера категории Студия располагаются на 8 и 19 этажах отеля.',
            priceTitle: 'Цена',
            priceDescription: 'грн',
            areaTitle: 'Площадь',
            areaDescription: 'м2',
            guests: 'Гостей',
            guestDescription: 'чел',
            subTitle1: 'В номере',
            subDescription1: 'Кровать King Size, Раскладной диван,  Журнальный\n' +
                '                                    столик,  Письменный стол,  Кондиционер,\n' +
                '                                    Телевизор,  Телефон, Сейф Мини-бар, Багажная\n' +
                '                                    тумба,  Вешалки,  Стул,  Гардеробнй шкаф,  Большое\n' +
                '                                    зеркало,  WI-FI',
            subTitle2: 'В ванной комнате',
            subDescription2: 'Душевая,  Фен,  Полотенца,  Халат,  Тапочки,\n' +
                '                                    Средства гигиены',
            subTitle3: 'Услуги',
            subDescription3: 'Заселение в 14:00, Выселение в 12:00,\n' +
                '                                    Консьерж-сервис, Прачечная/химчистка, Ресторан\n' +
                '                                    европейской, японской и украинской кухни\n' +
                '                                    Food Hub, Лобби-бар 24/7, Круглосуточный Room\n' +
                '                                    Servise, Конференц-сервис, Торгово-развлекательный\n' +
                '                                    центр',
        },
        roomFamily: {
            title: 'Семейный Люкс',
            textTop: '  Трехкомнатный номер, выполненный в европейском стиле, с\n' +
              '                        двумя раздельными спальнями. Из окон открывается панорамный вид на море\n' +
              '                        и город. Расположение номеров на 13 этаже. Номер оборудован современной\n' +
              '                        техникой, мебелью, большой двуспальной кроватью в каждой спальной\n' +
              '                        комнате, а также большим раскладным диваном в гостиной. В номере имеются\n' +
              '                        два раздельных санузла: один с душевой кабиной, второй — с ванной.',
            priceTitle: 'Цена',
            priceDescription: 'грн',
            areaTitle: 'Площадь',
            areaDescription: 'м2',
            guests: 'Гостей',
            guestDescription: 'чел',
            subTitle1: 'В номере',
            subDescription1: 'Кровать King Size, Раскладной диван,  Журнальный\n' +
              '                                    столик,  Письменный стол,  Кондиционер,\n' +
              '                                    Телевизор,  Телефон, Сейф Мини-бар, Багажная\n' +
              '                                    тумба,  Вешалки,  Стул,  Гардеробнй шкаф,  Большое\n' +
              '                                    зеркало,  WI-FI',
            subTitle2: 'В ванной комнате',
            subDescription2: 'Душ/ванна,  Фен,  Полотенца,  Халаты,  Тапочки\n' +
              '                                    Средства гигиены',
            subTitle3: 'Услуги',
            subDescription3: 'Заселение в 14:00, Выселение в 12:00,\n' +
              '                                    Консьерж-сервис, Прачечная/химчистка, Ресторан\n' +
              '                                    европейской, японской и украинской кухни\n' +
              '                                    Food Hub, Лобби-бар 24/7, Круглосуточный Room\n' +
              '                                    Servise, Конференц-сервис, Торгово-развлекательный\n' +
              '                                    центр',
        },
        buttons: {
            btn1: 'Забронировать',
            more: 'Подробнее о номере',
            hide: 'Скрыть'
        }
    }
};

/**
 * I18N Localization
 *
 * @type {VueI18n}
 */
Vue.use(VueI18n);
const i18n = new VueI18n({
    locale: navigator.language.substring(0,2),
    messages, // set locale messages
});

/**
 * Initialization
 */
new Vue({
    i18n,
    store,
    data() {
        return {
            locale: navigator.language.substring(0,2)
        }
    },
    methods: {
        /**
         * Set Application Locale
         *
         * @param lang : string
         */
        setLocale(lang) {
            i18n.locale = this.locale = lang;
        }
    },
    render: h => h(AppBooking)
}).$mount('#app_booking');


