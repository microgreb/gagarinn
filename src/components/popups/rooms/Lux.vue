<template>
    <div class="modal" id="modal_lux">
        <div class="modal-carousel owl-carousel owl-theme">
            <div class="item">
                <img src="/img/Lux/96.jpg" alt="Люкс (11)">
            </div>
            <div class="item">
                <img src="/img/Lux/94.jpg" alt="Люкс (12)">
            </div>
            <div class="item">
                <img src="/img/Lux/98.jpg" alt="Люкс (13)">
            </div>
            <div class="item">
                <img src="/img/Lux/27.jpg" alt="Люкс (14)">
            </div>
            <div class="item">
                <img src="/img/Lux/29.jpg" alt="Люкс (15)">
            </div>
            <div class="item">
                <img src="/img/Lux/30.jpg" alt="Люкс (16)">
            </div>
            <div class="item">
                <img src="/img/Lux/92.jpg" alt="Люкс (17)">
            </div>
            <div class="item">
                <img src="/img/Lux/93.jpg" alt="Люкс (18)">
            </div>
            <div class="item">
                <img src="/img/Lux/95.jpg" alt="Люкс (19)">
            </div>
            <div class="item">
                <img src="/img/Lux/97.jpg" alt="Люкс (20)">
            </div>
            <div class="item">
                <img src="/img/Lux/99.jpg" alt="Люкс (21)">
            </div>
        </div>
        <div class="modal-filter">
            <form class="main-filter">
                <div class="filter-group">
                    <div class="field">
                        <p class="datepicker">
                            <label>{{$t('booking.label1')}}</label>
                            <input type="text" class="dateTxt form-control form-arrival" value="21 / 03 / 2018">
                            <span class="date-dot"></span>
                        </p>
                    </div>
                    <div class="field">
                        <p class="datepicker">
                            <label>{{$t('booking.label2')}}</label>
                            <input type="text" class="dateTxt form-control form-departure" value="23 / 03 / 2018">
                            <span class="date-dot"></span>
                        </p>
                    </div>
                    <div class="field">
                        <p class="select">
                            <label>{{$t('booking.label3')}}</label>
                            <select class="modal-guests">
                                <option value="1">1  {{$t('booking.guest')}}</option>
                                <option value="2">2  {{$t('booking.guests')}}</option>
                                <option value="3">3  {{$t('booking.guests')}}</option>
                                <option value="4">4  {{$t('booking.guests')}}</option>
                            </select>
                            <span class="date-dot"></span>
                        </p>
                    </div>
                </div>
                <input type="hidden" class="room-type" value="17708,17710">
                <input type="hidden" name="lang" class="sf-lang" :value="[lang]">
                <div class="reserv">
                    <a href="#">{{$t('buttons.btn1')}}</a>
                </div>
            </form>
        </div>
        <section class="modal-rooms">
            <div class="room-section ">
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
                                <h4 class="room-info-title">{{$t('roomLux.areaTitle')}}</h4>
                                <p>40 <span>{{$t('roomLux.areaDescription')}}</span></p>
                            </div>
                            <div class="room-info-content">
                                <h4 class="room-info-title">{{$t('roomLux.guests')}}</h4>
                                <p>1-4 <span>{{$t('roomLux.guestDescription')}}</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="room-option">
                    <h2 class="content-title">{{$t('services.services')}}</h2>
                    <ul>
                        <li class="item">• {{$t('services.arrival')}}</li>
                        <li class="item">• {{$t('services.departure')}}</li>
                        <li class="item">• {{$t('services.concierge')}}</li>
                        <li class="item">• {{$t('services.laundry')}}</li>
                        <li class="item">• {{$t('services.restaurant')}}</li>
                        <li class="item">• {{$t('services.lobby')}}</li>
                        <li class="item">• {{$t('services.roomService')}}</li>
                        <li class="item">• {{$t('services.conferenceService')}}</li>
                        <li class="item">• {{$t('services.mall')}}</li>
                    </ul>
                </div>
            </div>
            <div class="bathroom">
                <h2 class="content-title">{{$t('bathroom.bathroom')}}</h2>
                <div class="modal-items">
                    <div class="item-block">
                        <img src="/img/icons/dush.svg" alt="item">
                        <span class="item-description">{{$t('bathroom.shower')}}</span>
                    </div>
                    <div class="item-block">
                        <img src="/img/icons/vanna.svg" alt="item">
                        <span class="item-description">{{$t('bathroom.bath')}}</span>
                    </div>
                    <div class="item-block">
                        <img src="/img/icons/fen.svg" alt="item">
                        <span class="item-description">{{$t('bathroom.hairdryer')}}</span>
                    </div>
                    <div class="item-block">
                        <img src="/img/towel.svg" alt="item">
                        <span class="item-description">{{$t('bathroom.towels')}}</span>
                    </div>
                    <div class="item-block">
                        <img src="/img/icons/halat.svg" alt="item">
                        <span class="item-description">{{$t('bathroom.bath_robes')}}</span>
                    </div>
                    <div class="item-block">
                        <img src="/img/icons/tapochki.svg" alt="item">
                        <span class="item-description">{{$t('bathroom.slippers')}}</span>
                    </div>
                    <div class="item-block">
                        <img src="/img/icons/gigiena.svg" alt="item">
                        <span class="item-description">{{$t('bathroom.toiletries')}}</span>
                    </div>
                </div>
            </div>
            <div class="in-number">
                <h2 class="content-title">{{$t('accommodation.accommodation')}}</h2>
                <div class="modal-items">
                    <div class="item-block">
                        <img src="/img/icons/king-size.svg" alt="item">
                        <span class="item-description">{{$t('accommodation.kingsize')}}</span>
                    </div>
                    <div class="item-block">
                        <img src="/img/icons/divan.svg" alt="item">
                        <span class="item-description">{{$t('accommodation.sofa')}}</span>
                    </div>
                    <div class="item-block">
                        <img src="/img/icons/jurnalniy.svg" alt="item">
                        <span class="item-description">{{$t('accommodation.table')}}</span>
                    </div>
                    <div class="item-block">
                        <img src="/img/icons/pismenniy.svg" alt="item">
                        <span class="item-description">{{$t('accommodation.secretaire')}}</span>
                    </div>
                    <div class="item-block">
                        <img src="/img/icons/kandik.svg" alt="item">
                        <span class="item-description">{{$t('accommodation.conditioner')}}</span>
                    </div>
                    <div class="item-block">
                        <img src="/img/icons/tv.svg" alt="item">
                        <span class="item-description">{{$t('accommodation.tv')}}</span>
                    </div>
                    <div class="item-block">
                        <img src="/img/icons/telefon.svg" alt="item">
                        <span class="item-description">{{$t('accommodation.telephone')}}</span>
                    </div>
                    <div class="item-block">
                        <img src="/img/icons/seif.svg" alt="item">
                        <span class="item-description">{{$t('accommodation.safe')}}</span>
                    </div>
                    <div class="item-block">
                        <img src="/img/minibar.svg" alt="item">
                        <span class="item-description">{{$t('accommodation.minibar')}}</span>
                    </div>
                    <div class="item-block">
                        <img src="/img/icons/bagaj.svg" alt="item">
                        <span class="item-description">{{$t('accommodation.luggage')}}</span>
                    </div>
                    <div class="item-block">
                        <img src="/img/icons/trempel.svg" alt="item">
                        <span class="item-description">{{$t('accommodation.hangers')}}</span>
                    </div>
                    <div class="item-block">
                        <img src="/img/chair.svg" alt="item">
                        <span class="item-description">{{$t('accommodation.chair')}}</span>
                    </div>
                    <div class="item-block">
                        <img src="/img/icons/zerkalo.svg" alt="item">
                        <span class="item-description">{{$t('accommodation.mirror')}}</span>
                    </div>
                    <div class="item-block">
                        <img src="/img/icons/garderob.svg" alt="item">
                        <span class="item-description">{{$t('accommodation.anteroom')}}</span>
                    </div>
                    <div class="item-block">
                        <img src="/img/icons/wi-fi.svg" alt="item">
                        <span class="item-description">{{$t('accommodation.wifi')}}</span>
                    </div>
                </div>
            </div>
        </section>
        <section class="modal-bottom-filter">
            <form class="modal-filter">
                <div class="main-filter">
                    <div class="filter-group">
                        <div class="field">
                            <p class="datepicker">
                                <label>{{$t('booking.label1')}}</label>
                                <input type="text" class="dateTxt form-control form-arrival" value="21 / 03 / 2018">
                                <span class="date-dot"></span>
                            </p>
                        </div>
                        <div class="field">
                            <p class="datepicker">
                                <label>{{$t('booking.label2')}}</label>
                                <input type="text" class="dateTxt form-control form-departure" value="23 / 03 / 2018">
                                <span class="date-dot"></span>
                            </p>
                        </div>
                        <div class="field">
                            <p class="select">
                                <label>{{$t('booking.label3')}}</label>
                                <select class="modal-guests">
                                    <option value="1">1  {{$t('booking.guest')}}</option>
                                    <option value="2">2  {{$t('booking.guests')}}</option>
                                    <option value="3">3  {{$t('booking.guests')}}</option>
                                    <option value="4">4  {{$t('booking.guests')}}</option>
                                    <option value="5">5  {{$t('booking.guests')}}</option>
                                    <option value="6">6  {{$t('booking.guests')}}</option>
                                    <option value="7">7  {{$t('booking.guests')}}</option>
                                    <option value="8">8  {{$t('booking.guests')}}</option>
                                    <option value="9">9  {{$t('booking.guests')}}</option>
                                </select>
                                <span class="date-dot"></span>
                            </p>
                        </div>
                    </div>
                    <input type="hidden" class="room-type" value="17708,17710">
                    <input type="hidden" name="lang" class="sf-lang" :value="[lang]">
                    <div class="reserv">
                        <a href="#">{{$t('buttons.btn1')}}</a>
                    </div>
                </div>
            </form>
        </section>
    </div>
</template>

<script>
    export default {
        name: 'LuxModal',
        computed: {
            lang: function() {
                return this.$root.locale;
            }
        }
    }
</script>
