<template>
    <div class="modal" id="modal_family">
        <div class="modal-carousel owl-carousel owl-theme">
            <div class="item">
                <img src="/img/family/4.jpg" alt="">
            </div>
            <div class="item">
                <img src="/img/family/2.jpg" alt="">
            </div>
            <div class="item">
                <img src="/img/family/3.jpg" alt="">
            </div>
            <div class="item">
                <img src="/img/family/5.jpg" alt="">
            </div>
            <div class="item">
                <img src="/img/family/6.jpg" alt="">
            </div>
            <div class="item">
                <img src="/img/family/7.jpg" alt="">
            </div>
            <div class="item">
                <img src="/img/family/8.jpg" alt="">
            </div>
            <div class="item">
                <img src="/img/family/1.jpg" alt="">
            </div>
        </div>
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
                            </select>
                            <span class="date-dot"></span>
                        </p>
                    </div>
                </div>
                <input type="hidden" class="room-type" value="105030">
                <input type="hidden" name="lang" class="sf-lang" :value="[lang]">
                <div class="reserv">
                    <a href="#">{{$t('buttons.btn1')}}</a>
                </div>
            </div>
        </form>
        <section class="modal-rooms">
            <div class="room-section ">
                <div class="room">
                    <div class="content">
                        <h2 class="content-title">{{$t('roomFamily.title')}}</h2>
                        <p class="content-description">
                            {{$t('roomFamily.textTop')}}
                        </p>
                        <div class="room-info">
                            <!--<div class="room-info-content">-->
                            <!--<h4 class="room-info-title">Цена</h4>-->
                            <!--<p>1635 <span>грн</span></p>-->
                            <!--</div>-->
                            <div class="room-info-content">
                                <h4 class="room-info-title">{{$t('roomFamily.areaTitle')}}</h4>
                                <p>64 <span>{{$t('roomFamily.areaDescription')}}</span></p>
                            </div>
                            <div class="room-info-content">
                                <h4 class="room-info-title">{{$t('roomFamily.guests')}}</h4>
                                <p>1-4 <span>{{$t('roomFamily.guestDescription')}}</span></p>
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
                        <img src="/img/icons/gigiena.svg" alt="item">
                        <span class="item-description">{{$t('bathroom.toiletries')}}</span>
                    </div>
                    <div class="item-block">
                        <img src="/img/icons/fen.svg" alt="item">
                        <span class="item-description">{{$t('bathroom.hairdryer')}}</span>
                    </div>
                    <div class="item-block">
                        <img src="/img/icons/tapochki.svg" alt="item">
                        <span class="item-description">{{$t('bathroom.slippers')}}</span>
                    </div>
                    <div class="item-block">
                        <img src="/img/towel.svg" alt="item">
                        <span class="item-description">{{$t('bathroom.towels')}}</span>
                    </div>
                    <div class="item-block">
                        <img src="/img/icons/halat.svg" alt="item">
                        <span class="item-description">{{$t('bathroom.bath_robes')}}</span>
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
                        <img src="/img/icons/garderob.svg" alt="item">
                        <span class="item-description">{{$t('accommodation.anteroom')}}</span>
                    </div>
                    <div class="item-block">
                        <img src="/img/icons/zerkalo.svg" alt="item">
                        <span class="item-description">{{$t('accommodation.mirror')}}</span>
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
                    <input type="hidden" class="room-type" value="105030">
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
    name: 'FamilyModal',
    computed: {
      lang: function() {
        return this.$root.locale;
      }
    }
  }
</script>
