<template>
    <section id="rooms">
        <div class="room-section white-bg">

            <div class="room">
                <div class="content">
                    <h2 class="content-title">{{$t('roomStandard.title')}}</h2>
                    <p class="content-description">
                        {{$t('roomStandard.textTop')}}
                    </p>
                    <div class="room-info">
                        <!--<div class="room-info-content">-->
                        <!--<h4 class="room-info-title">Цена</h4>-->
                        <!--<p>960 <span>грн</span></p>-->
                        <!--</div>-->
                        <div class="room-info-content">
                            <div class="room-info-title">{{$t('roomStandard.areaTitle')}}</div>
                            <p>20 <span>{{$t('roomStandard.areaDescription')}}</span></p>
                        </div>
                        <div class="room-info-content">
                            <div class="room-info-title">{{$t('roomStandard.guests')}}</div>
                            <p>1-2 <span>{{$t('roomStandard.guestDescription')}}</span></p>
                        </div>
                    </div>
                    <div class="content-buttons">
                        <a :href="[lang === 'en' ? '/booking_en.html' : '/booking.html']+ '?room-type=17704'" class="orange-btn">{{$t('buttons.btn1')}}</a>
                        <a href="#modal_standart" class="border-btn open-modal">{{$t('buttons.more')}}</a>
                        <div class="m-buttons-wrap">
                            <a :href="[lang === 'en' ? '/booking_en.html' : '/booking.html']+ '?room-type=17704'" class="orange-btn">{{$t('booking.title')}}</a>
                            <a href="#modal_lux" @click="changeButtonText('standart')" class="border-btn open-modal">
                                {{details_opened.standart ? $t('buttons.hide') : $t('buttons.more')}}
                            </a>
                        </div>
                        <div class="accordion">
                            <div class="in-number">
                                <h2 class="title">{{$t('accommodation.accommodation')}}</h2>
                                <p>
                                    {{$t('accommodation.double_bed')}} /
                                    {{$t('accommodation.two_beds')}},
                                    {{$t('accommodation.secretaire')}},
                                    {{$t('accommodation.conditioner')}},
                                    {{$t('accommodation.tv')}},
                                    {{$t('accommodation.telephone')}},
                                    {{$t('accommodation.safe')}},
                                    {{$t('accommodation.minibar')}},
                                    {{$t('accommodation.luggage')}},
                                    {{$t('accommodation.hangers')}},
                                    {{$t('accommodation.chair')}},
                                    {{$t('accommodation.wardrobe')}},
                                    {{$t('accommodation.mirror')}},
                                    {{$t('accommodation.wifi')}}
                                </p>
                            </div>
                            <div class="in-bathroom">
                                <h2 class="title">{{$t('bathroom.bathroom')}}</h2>
                                <p>
                                    {{$t('bathroom.shower')}},
                                    {{$t('bathroom.hairdryer')}},
                                    {{$t('bathroom.towels')}},
                                    {{$t('bathroom.slippers')}},
                                    {{$t('bathroom.toiletries')}}
                                </p>
                            </div>
                            <div class="info">
                                <h2 class="title">{{$t('services.services')}}</h2>
                                <p>
                                    {{$t('services.arrival')}},
                                    {{$t('services.departure')}},
                                    {{$t('services.concierge')}},
                                    {{$t('services.laundry')}},
                                    {{$t('services.restaurant_full')}},
                                    {{$t('services.lobby')}},
                                    {{$t('services.roomService')}},
                                    {{$t('services.conferenceService')}},
                                    {{$t('services.mall')}}
                                </p>
                            </div>
                            <a :href="[lang === 'en' ? '/booking_en.html' : '/booking.html']+ '?room-type=17704'" class="mob-reserv">{{$t('buttons.btn1')}}</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="room room-image-st">
                <div class="m-slider">
                    <div class="swiper-container">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <img data-src="img/standart-m/38.jpg" class="swiper-lazy" alt="Стандарт">
                                <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                            </div>
                            <div class="swiper-slide">
                                <img data-src="img/standart-m/42.jpg" class="swiper-lazy" alt="Стандарт (2)">
                                <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                            </div>
                            <div class="swiper-slide">
                                <img data-src="img/standart-m/43.jpg" class="swiper-lazy" alt="Стандарт (3)">
                                <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                            </div>
                            <div class="swiper-slide">
                                <img data-src="img/standart-m/81.jpg" class="swiper-lazy" alt="Стандарт (4)">
                                <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                            </div>
                            <div class="swiper-slide">
                                <img data-src="img/standart-m/82.jpg" class="swiper-lazy" alt="Стандарт (5)">
                                <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                            </div>

                        </div>
                        <!-- Add Pagination -->
                        <div class="swiper-pagination swiper-pagination-white"></div>
                    </div>
                </div>
            </div>
        </div>

        <div class="room-section gray-bg">
            <div class="room room-image-in">
                <div class="m-slider">
                    <div class="swiper-container">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <img data-src="img/max-m.jpg" class="swiper-lazy" alt="Улучшенный">
                                <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                            </div>
                            <div class="swiper-slide">
                                <img data-src="img/improved-m/35.jpg" class="swiper-lazy">
                                <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                            </div>
                            <div class="swiper-slide">
                                <img data-src="img/improved-m/36.jpg" class="swiper-lazy" alt="Улучшенный (2)">
                                <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                            </div>
                            <div class="swiper-slide">
                                <img data-src="img/improved-m/37.jpg" class="swiper-lazy" alt="Улучшенный (3)">
                                <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                            </div>
                            <div class="swiper-slide">
                                <img data-src="img/improved-m/40.jpg" class="swiper-lazy" alt="Улучшенный (4)">
                                <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                            </div>
                            <div class="swiper-slide">
                                <img data-src="img/improved-m/41.jpg" class="swiper-lazy" alt="Улучшенный (5)">
                                <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                            </div>
                            <div class="swiper-slide">
                                <img data-src="img/improved-m/45.jpg" class="swiper-lazy" alt="Улучшенный (6)">
                                <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                            </div>
                            <div class="swiper-slide">
                                <img data-src="img/improved-m/46.jpg" class="swiper-lazy" alt="Улучшенный (7)">
                                <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                            </div>
                            <div class="swiper-slide">
                                <img data-src="img/improved-m/47.jpg" class="swiper-lazy" alt="Улучшенный (8)">
                                <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                            </div>
                            <div class="swiper-slide">
                                <img data-src="img/improved-m/48.jpg" class="swiper-lazy" alt="Улучшенный (9)">
                                <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                            </div>
                            <div class="swiper-slide">
                                <img data-src="img/improved-m/49.jpg" class="swiper-lazy" alt="Улучшенный (10)">
                                <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                            </div>
                            <div class="swiper-slide">
                                <img data-src="img/improved-m/50.jpg" class="swiper-lazy" alt="Улучшенный (11)">
                                <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                            </div>
                            <div class="swiper-slide">
                                <img data-src="img/improved-m/51.jpg" class="swiper-lazy" alt="Улучшенный (12)">
                                <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                            </div>
                            <div class="swiper-slide">
                                <img data-src="img/improved-m/52.jpg" class="swiper-lazy" alt="Улучшенный (13)">
                                <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                            </div>
                            <div class="swiper-slide">
                                <img data-src="img/improved-m/53.jpg" class="swiper-lazy" alt="Улучшенный (14)">
                                <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                            </div>
                        </div>
                        <div class="swiper-pagination swiper-pagination-white"></div>
                    </div>
                </div>
            </div>
            <div class="room">
                <div class="content">
                    <h2 class="content-title">{{$t('roomDeluxe.title')}}</h2>
                    <p class="content-description">
                        {{$t('roomDeluxe.textTop')}}
                    </p>
                    <div class="room-info">
                        <!--<div class="room-info-content">-->
                        <!--<h4 class="room-info-title">Цена</h4>-->
                        <!--<p>1200 <span>грн</span></p>-->
                        <!--</div>-->
                        <div class="room-info-content">
                            <div class="room-info-title">{{$t('roomDeluxe.areaTitle')}}</div>
                            <p>21 <span>{{$t('roomDeluxe.areaDescription')}}</span></p>
                        </div>
                        <div class="room-info-content">
                            <div class="room-info-title">{{$t('roomDeluxe.guests')}}</div>
                            <p>1-2 <span>{{$t('roomDeluxe.guestDescription')}}</span></p>
                        </div>
                    </div>
                    <div class="content-buttons">
                        <a :href="[lang === 'en' ? '/booking_en.html' : '/booking.html'] + '?room-type=17705'" class="orange-btn">{{$t('buttons.btn1')}}</a>
                        <a href="#modal_improved" class="border-btn open-modal">{{$t('buttons.more')}}</a>
                        <div class="m-buttons-wrap">
                            <a :href="[lang === 'en' ? '/booking_en.html' : '/booking.html'] + '?room-type=17705'" class="orange-btn">{{$t('booking.title')}}</a>
                            <a href="#modal_lux" @click="changeButtonText('deluxe')" class="border-btn open-modal">
                                {{details_opened.deluxe ? $t('buttons.hide') : $t('buttons.more')}}
                            </a>
                        </div>
                        <div class="accordion">
                            <div class="in-number">
                                <h2 class="title">{{$t('accommodation.accommodation')}}</h2>
                                <p>
                                    {{$t('accommodation.double_bed')}} /
                                    {{$t('accommodation.two_beds')}},
                                    {{$t('accommodation.conditioner')}},
                                    {{$t('accommodation.tv')}},
                                    {{$t('accommodation.telephone')}},
                                    {{$t('accommodation.safe')}},
                                    {{$t('accommodation.minibar')}},
                                    {{$t('accommodation.luggage')}},
                                    {{$t('accommodation.hangers')}},
                                    {{$t('accommodation.secretaire')}},
                                    {{$t('accommodation.chair')}},
                                    {{$t('accommodation.mirror')}},
                                    {{$t('accommodation.wardrobe')}},
                                    {{$t('accommodation.wifi')}}
                                </p>
                            </div>
                            <div class="in-bathroom">
                                <h2 class="title">{{$t('bathroom.bathroom')}}</h2>
                                <p>
                                    {{$t('bathroom.shower')}},
                                    {{$t('bathroom.hairdryer')}},
                                    {{$t('bathroom.towels')}},
                                    {{$t('bathroom.slippers')}},
                                    {{$t('bathroom.toiletries')}}
                                </p>
                            </div>
                            <div class="info">
                                <h2 class="title">{{$t('services.services')}}</h2>
                                <p>
                                    {{$t('services.arrival')}},
                                    {{$t('services.departure')}},
                                    {{$t('services.concierge')}},
                                    {{$t('services.laundry')}},
                                    {{$t('services.restaurant_full')}},
                                    {{$t('services.lobby')}},
                                    {{$t('services.roomService')}},
                                    {{$t('services.conferenceService')}},
                                    {{$t('services.mall')}}
                                </p>
                            </div>
                            <a :href="[lang === 'en' ? '/booking_en.html' : '/booking.html'] + '?room-type=17705'" class="mob-reserv">{{$t('buttons.btn1')}}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="room-section white-bg">
            <div class="room">
                <div class="content">
                    <h2 class="content-title">{{$t('roomLux.title')}}</h2>
                    <p class="content-description">
                        {{$t('roomLux.textTop')}}
                    </p>
                    <div class="room-info">
                        <!--<div class="room-info-content">-->
                        <!--<h4 class="room-info-title">Цена</h4>-->
                        <!--<p>1500 <span>грн</span></p>-->
                        <!--</div>-->
                        <div class="room-info-content">
                            <div class="room-info-title">{{$t('roomLux.areaTitle')}}</div>
                            <p>40 <span>{{$t('roomLux.areaDescription')}}</span></p>
                        </div>
                        <div class="room-info-content">
                            <div class="room-info-title">{{$t('roomLux.guests')}}</div>
                            <p>1-4 <span>{{$t('roomLux.guestDescription')}}</span></p>
                        </div>
                    </div>
                    <div class="content-buttons">
                        <a :href="[lang === 'en' ? '/booking_en.html' : '/booking.html']  + '?room-type=17708,17710'" class="orange-btn">{{$t('buttons.btn1')}}</a>
                        <a href="#modal_lux" class="border-btn open-modal">{{$t('buttons.more')}}</a>
                        <div class="m-buttons-wrap">
                            <a :href="[lang === 'en' ? '/booking_en.html' : '/booking.html']  + '?room-type=17708,17710'" class="orange-btn">{{$t('buttons.btn1')}}</a>
                            <a href="#modal_lux" @click="changeButtonText('suite')" class="border-btn open-modal">
                                {{details_opened.suite ? $t('buttons.hide') : $t('buttons.more')}}
                            </a>
                        </div>
                        <div class="accordion">
                            <div class="in-number">
                                <h2 class="title">{{$t('accommodation.accommodation')}}</h2>
                                <p>
                                    {{$t('accommodation.kingsize')}},
                                    {{$t('accommodation.sofa')}},
                                    {{$t('accommodation.table')}},
                                    {{$t('accommodation.secretaire')}},
                                    {{$t('accommodation.conditioner')}},
                                    {{$t('accommodation.tv')}},
                                    {{$t('accommodation.telephone')}},
                                    {{$t('accommodation.safe')}},
                                    {{$t('accommodation.minibar')}},
                                    {{$t('accommodation.luggage')}},
                                    {{$t('accommodation.hangers')}},
                                    {{$t('accommodation.chair')}},
                                    {{$t('accommodation.wardrobe')}},
                                    {{$t('accommodation.mirror_big')}},
                                    {{$t('accommodation.wifi')}}
                                </p>
                            </div>
                            <div class="in-bathroom">
                                <h2 class="title">{{$t('bathroom.bathroom')}}</h2>
                                <p>
                                    {{$t('bathroom.shower')}} /
                                    {{$t('bathroom.bathroom')}},
                                    {{$t('bathroom.hairdryer')}},
                                    {{$t('bathroom.towels')}},
                                    {{$t('bathroom.bath robes')}},
                                    {{$t('bathroom.slippers')}},
                                    {{$t('bathroom.toiletries')}}
                                </p>
                            </div>
                            <div class="info">
                                <h2 class="title">{{$t('services.services')}}</h2>
                                <p>
                                    {{$t('services.arrival')}},
                                    {{$t('services.departure')}},
                                    {{$t('services.concierge')}},
                                    {{$t('services.laundry')}},
                                    {{$t('services.restaurant_full')}},
                                    {{$t('services.lobby')}},
                                    {{$t('services.roomService')}},
                                    {{$t('services.conferenceService')}},
                                    {{$t('services.mall')}}
                                </p>
                            </div>
                            <a :href="[lang === 'en' ? '/booking_en.html' : '/booking.html']  + '?room-type=17708,17710'" class="mob-reserv">{{$t('buttons.btn1')}}</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="room room-image-lux">
                <div class="m-slider">
                    <div class="swiper-container">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <img data-src="img/lux-m.jpg" class="swiper-lazy" alt="Люкс">
                                <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                            </div>
                            <div class="swiper-slide">
                                <img data-src="img/lux-m/27.jpg" class="swiper-lazy" alt="Люкс (2)">
                                <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                            </div>
                            <div class="swiper-slide">
                                <img data-src="img/lux-m/29.jpg" class="swiper-lazy" alt="Люкс (3)">
                                <div class="swiper-lazy-preloader swijpg-lazy-preloader-white"></div>
                            </div>
                            <div class="swiper-slide">
                                <img data-src="img/lux-m/30.jpg" class="swiper-lazy" alt="Люкс (4)">
                                <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                            </div>
                            <div class="swiper-slide">
                                <img data-src="img/lux-m/93.jpg" class="swiper-lazy" alt="Люкс (5)">
                                <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                            </div>
                            <div class="swiper-slide">
                                <img data-src="img/lux-m/94.jpg" class="swiper-lazy" alt="Люкс (6)">
                                <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                            </div>
                            <div class="swiper-slide">
                                <img data-src="img/lux-m/95.jpg" class="swiper-lazy" alt="Люкс (7)">
                                <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                            </div>
                            <div class="swiper-slide">
                                <img data-src="img/lux-m/97.jpg" class="swiper-lazy" alt="Люкс (8)">
                                <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                            </div>
                            <div class="swiper-slide">
                                <img data-src="img/lux-m/98.jpg" class="swiper-lazy" alt="Люкс (9)">
                                <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                            </div>
                            <div class="swiper-slide">
                                <img data-src="img/lux-m/99.jpg" class="swiper-lazy" alt="Люкс (10)">
                                <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                            </div>
                        </div>
                        <!-- Add Pagination -->
                        <div class="swiper-pagination swiper-pagination-white"></div>
                    </div>

                </div>
            </div>
        </div>

        <div class="room-section gray-bg">
            <div class="room room-image-studio">
                <div class="m-slider">
                    <div class="swiper-container">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <img data-src="img/studio-m.jpg" class="swiper-lazy" alt="Студия">
                                <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                            </div>
                            <div class="swiper-slide">
                                <img data-src="img/studio-m/32.jpg" class="swiper-lazy" alt="Студия (2)">
                                <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                            </div>
                            <div class="swiper-slide">
                                <img data-src="img/studio-m/67.jpg" class="swiper-lazy" alt="Студия (3)">
                                <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                            </div>
                            <div class="swiper-slide">
                                <img data-src="img/studio-m/68.jpg" class="swiper-lazy" alt="Студия (4)">
                                <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                            </div>
                            <div class="swiper-slide">
                                <img data-src="img/studio-m/69.jpg" class="swiper-lazy" alt="Студия (5)">
                                <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                            </div>
                            <div class="swiper-slide">
                                <img data-src="img/studio-m/70.jpg" class="swiper-lazy" alt="Студия (6)">
                                <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                            </div>
                            <div class="swiper-slide">
                                <img data-src="img/studio-m/71.jpg" class="swiper-lazy" alt="Студия (7)">
                                <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                            </div>
                            <div class="swiper-slide">
                                <img data-src="img/studio-m/72.jpg" class="swiper-lazy" alt="Студия (8)">
                                <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                            </div>
                            <div class="swiper-slide">
                                <img data-src="img/studio-m/73.jpg" class="swiper-lazy" alt="Студия (9)">
                                <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                            </div>
                            <div class="swiper-slide">
                                <img data-src="img/studio-m/74.jpg" class="swiper-lazy" alt="Студия (10)">
                                <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                            </div>
                            <div class="swiper-slide">
                                <img data-src="img/studio-m/75.jpg" class="swiper-lazy" alt="Студия (11)">
                                <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                            </div>
                            <div class="swiper-slide">
                                <img data-src="img/studio-m/78.jpg" class="swiper-lazy" alt="Студия (12)">
                                <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                            </div>
                            <div class="swiper-slide">
                                <img data-src="img/studio-m/85.jpg" class="swiper-lazy" alt="Студия (13)">
                                <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                            </div>
                            <div class="swiper-slide">
                                <img data-src="img/studio-m/86.jpg" class="swiper-lazy" alt="Студия (14)">
                                <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                            </div>
                            <div class="swiper-slide">
                                <img data-src="img/studio-m/87.jpg" class="swiper-lazy" alt="Студия (15)">
                                <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                            </div>
                        </div>
                        <!-- Add Pagination -->
                        <div class="swiper-pagination swiper-pagination-white"></div>
                    </div>
                </div>
            </div>
            <div class="room">
                <div class="content">
                    <h2 class="content-title">{{$t('roomStudio.title')}}</h2>
                    <p class="content-description">
                        {{$t('roomStudio.textTop')}}
                    </p>
                    <div class="room-info">
                        <!--<div class="room-info-content">-->
                        <!--<h4 class="room-info-title">Цена</h4>-->
                        <!--<p>1635 <span>грн</span></p>-->
                        <!--</div>-->
                        <div class="room-info-content">
                            <div class="room-info-title">{{$t('roomStudio.areaTitle')}}</div>
                            <p>42 <span>{{$t('roomStudio.areaDescription')}}</span></p>
                        </div>
                        <div class="room-info-content">
                            <div class="room-info-title">{{$t('roomStudio.guests')}}</div>
                            <p>1-4 <span>{{$t('roomStudio.guestDescription')}}</span></p>
                        </div>
                    </div>
                    <div class="content-buttons">
                        <a :href="[lang === 'en' ? '/booking_en.html' : '/booking.html'] + '?room-type=17709'" class="orange-btn">{{$t('buttons.btn1')}}</a>
                        <a href="#modal_studio" class="border-btn open-modal">{{$t('buttons.more')}}</a>
                        <div class="m-buttons-wrap">
                            <a :href="[lang === 'en' ? '/booking_en.html' : '/booking.html'] + '?room-type=17709'" class="orange-btn">{{$t('buttons.btn1')}}</a>
                            <a href="#modal_lux" @click="changeButtonText('studio')" class="border-btn open-modal">
                                {{details_opened.studio ? $t('buttons.hide') : $t('buttons.more')}}
                            </a>
                        </div>
                        <div class="accordion">
                            <div class="in-number">
                                <h2 class="title">{{$t('accommodation.accommodation')}}</h2>
                                <p>
                                    {{$t('accommodation.kingsize')}},
                                    {{$t('accommodation.sofa')}},
                                    {{$t('accommodation.table')}},
                                    {{$t('accommodation.secretaire')}},
                                    {{$t('accommodation.conditioner')}},
                                    {{$t('accommodation.tv')}},
                                    {{$t('accommodation.telephone')}},
                                    {{$t('accommodation.safe')}},
                                    {{$t('accommodation.minibar')}},
                                    {{$t('accommodation.luggage')}},
                                    {{$t('accommodation.hangers')}},
                                    {{$t('accommodation.chair')}},
                                    {{$t('accommodation.wardrobe')}},
                                    {{$t('accommodation.mirror_big')}},
                                    {{$t('accommodation.wifi')}}
                                </p>
                            </div>
                            <div class="in-bathroom">
                                <h2 class="title">{{$t('bathroom.bathroom')}}</h2>
                                <p>
                                    {{$t('bathroom.shower')}},
                                    {{$t('bathroom.hairdryer')}},
                                    {{$t('bathroom.towels')}},
                                    {{$t('bathroom.bath robes')}},
                                    {{$t('bathroom.slippers')}},
                                    {{$t('bathroom.toiletries')}}
                                </p>
                            </div>
                            <div class="info">
                                <h2 class="title">{{$t('services.services')}}</h2>
                                <p>
                                    {{$t('services.arrival')}},
                                    {{$t('services.departure')}},
                                    {{$t('services.concierge')}},
                                    {{$t('services.laundry')}},
                                    {{$t('services.restaurant_full')}},
                                    {{$t('services.lobby')}},
                                    {{$t('services.roomService')}},
                                    {{$t('services.conferenceService')}},
                                    {{$t('services.mall')}}
                                </p>
                            </div>
                            <a :href="[lang === 'en' ? '/booking_en.html' : '/booking.html'] + '?room-type=17709'" class="mob-reserv">{{$t('buttons.btn1')}}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="room-section white-bg">
            <div class="room">
                <div class="content">
                    <h2 class="content-title">{{$t('roomFamily.title')}}</h2>
                    <p class="content-description">
                        {{$t('roomFamily.textTop')}}
                    </p>
                    <div class="room-info">
                        <div class="room-info-content">
                            <h4 class="room-info-title">{{$t('roomFamily.areaTitle')}}</h4>
                            <p>64 <span>{{$t('roomFamily.areaDescription')}}</span></p>
                        </div>
                        <div class="room-info-content">
                            <h4 class="room-info-title">{{$t('roomFamily.guests')}}</h4>
                            <p>1-4 <span>{{$t('roomFamily.guestDescription')}}</span></p>
                        </div>
                    </div>
                    <div class="content-buttons">
                        <a :href="[lang === 'en' ? '/booking_en.html' : '/booking.html']  + '?room-type=105030'" class="orange-btn">{{$t('buttons.btn1')}}</a>
                        <a href="#modal_family" class="border-btn open-modal">{{$t('buttons.more')}}</a>
                        <div class="m-buttons-wrap">
                            <a :href="[lang === 'en' ? '/booking_en.html' : '/booking.html']  + '?room-type=105030'" class="orange-btn">{{$t('buttons.btn1')}}</a>
                            <a href="#modal_family" @click="changeButtonText('suite')" class="border-btn open-modal">
                                {{details_opened.suite ? $t('buttons.hide') : $t('buttons.more')}}
                            </a>
                        </div>
                        <div class="accordion">
                            <div class="in-number">
                                <h2 class="title">{{$t('accommodation.accommodation')}}</h2>
                                <p>
                                    {{$t('accommodation.kingsize')}},
                                    {{$t('accommodation.sofa')}},
                                    {{$t('accommodation.table')}},
                                    {{$t('accommodation.secretaire')}},
                                    {{$t('accommodation.conditioner')}},
                                    {{$t('accommodation.tv')}},
                                    {{$t('accommodation.telephone')}},
                                    {{$t('accommodation.safe')}},
                                    {{$t('accommodation.minibar')}},
                                    {{$t('accommodation.luggage')}},
                                    {{$t('accommodation.hangers')}},
                                    {{$t('accommodation.chair')}},
                                    {{$t('accommodation.wardrobe')}},
                                    {{$t('accommodation.mirror_big')}},
                                    {{$t('accommodation.wifi')}}
                                </p>
                            </div>
                            <div class="in-bathroom">
                                <h2 class="title">{{$t('bathroom.bathroom')}}</h2>
                                <p>
                                    {{$t('bathroom.shower')}} /
                                    {{$t('bathroom.bathroom')}},
                                    {{$t('bathroom.hairdryer')}},
                                    {{$t('bathroom.towels')}},
                                    {{$t('bathroom.bath robes')}},
                                    {{$t('bathroom.slippers')}},
                                    {{$t('bathroom.toiletries')}}
                                </p>
                            </div>
                            <div class="info">
                                <h2 class="title">{{$t('services.services')}}</h2>
                                <p>
                                    {{$t('services.arrival')}},
                                    {{$t('services.departure')}},
                                    {{$t('services.concierge')}},
                                    {{$t('services.laundry')}},
                                    {{$t('services.restaurant_full')}},
                                    {{$t('services.lobby')}},
                                    {{$t('services.roomService')}},
                                    {{$t('services.conferenceService')}},
                                    {{$t('services.mall')}}
                                </p>
                            </div>
                            <a :href="[lang === 'en' ? '/booking_en.html' : '/booking.html']  + '?room-type=105030'" class="mob-reserv">{{$t('buttons.btn1')}}</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="room room-image-family">
                <div class="m-slider">
                    <div class="swiper-container">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <img data-src="img/family/4.jpg" class="swiper-lazy">
                                <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                            </div>
                            <div class="swiper-slide">
                                <img data-src="img/family/2.jpg" class="swiper-lazy">
                                <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                            </div>
                            <div class="swiper-slide">
                                <img data-src="img/family/3.jpg" class="swiper-lazy">
                                <div class="swiper-lazy-preloader swijpg-lazy-preloader-white"></div>
                            </div>
                            <div class="swiper-slide">
                                <img data-src="img/family/5.jpg" class="swiper-lazy">
                                <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                            </div>
                            <div class="swiper-slide">
                                <img data-src="img/family/6.jpg" class="swiper-lazy">
                                <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                            </div>
                            <div class="swiper-slide">
                                <img data-src="img/family/7.jpg" class="swiper-lazy">
                                <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                            </div>
                            <div class="swiper-slide">
                                <img data-src="img/family/8.jpg" class="swiper-lazy">
                                <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                            </div>
                            <div class="swiper-slide">
                                <img data-src="img/family/1.jpg" class="swiper-lazy">
                                <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                            </div>
                        </div>
                        <!-- Add Pagination -->
                        <div class="swiper-pagination swiper-pagination-white"></div>
                    </div>

                </div>
            </div>
        </div>

    </section>
</template>

<script>
    import Mixins from "@/mixins/mixins.js"
    export default {
       name:'Rooms',
        mixins: [Mixins],
        data() {
            return {
                details_opened: {
                    standart: false,
                    deluxe: false,
                    suite: false,
                    studio: false,
                    family: false
                }
            }
        },
        computed: {
            lang: function() {
                return this.$root.locale;
            },
        },
        methods: {
            changeButtonText(room) {
                this.details_opened[room] = !this.details_opened[room];
            }
        },
        created(){
           console.log(this.isMobile());
        }
    }
</script>
