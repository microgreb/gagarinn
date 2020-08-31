<template>
    <section class="video-section">
        <div class="video-container">
            <video muted="muted" id="front_bg_video" preload="metadata" autoplay="" loop="loop">
                <source src="assets/Hotel-Gagarinn-new.mp4" type="video/mp4">
            </video>
            <div class="video-mask"></div>
            <div class="video-content">
                <div class="center-logo">
                    <img src="/img/main-logo.svg" alt="logo (3)">
                </div>

                <div class="description">
                    <div>
                        <h1>Gagarinn Hotel</h1>
                        <p>{{$t('videoSection.description')}}</p>
                    </div>
                    <br>
                    <p class="desktop-hidden">
                        {{$t('videoSection.descriptionMob')}}
                    </p>
                    <br><br>
                </div>
                <div class="free-transfer-desktop" style="text-align: center;">
                    {{$t('videoSection.freeTransfer')}} <br>
                    {{$t('videoSection.freeTransfer2')}}
                </div>
                <div class="free-transfer-mobile">
                    <span v-for="text in $t('videoSection.freeTransferMob')">
                        {{text.text}}
                    </span>
                </div>

                <form class="main-filter">
                    <div class="filter-group">
                        <div class="field">
                            <p class="datepicker">
                                <label>{{$t('booking.label1')}}</label>
                                <input type="text" class="dateTxt form-control form-arrival" value="">
                                <span class="date-dot"></span>
                            </p>
                        </div>
                        <div class="field">
                            <p class="datepicker">
                                <label>{{$t('booking.label2')}}</label>
                                <input type="text" class="dateTxt form-control form-departure" value="">
                                <span class="date-dot"></span>
                            </p>
                        </div>
                        <div class="field">
                            <p class="select">
                                <label>{{$t('booking.label3')}}</label>
                                <select  class="guests">
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
                    <input type="hidden" name="lang" class="sf-lang" :value="[lang]">
                    <div class="reserv">
                        <a href="#">{{$t('booking.title')}}</a>
                    </div>
                </form>
                <div class="desktop-hidden">
                    <div class="reserv"><a :href="[lang === 'en' ? '/booking_en.html' : '/booking.html']">{{$t('booking.title')}}</a></div>
                </div>
            </div>

            <div class="arrow-down">
                <a href="#contact"><img src="/img/arrow.svg" alt="arrow-down"></a>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'VideoSection',
        computed: {
            lang: function() {
                return this.$root.locale;
            }
        }
    }
</script>

<style>
    .free-transfer-desktop,
    .free-transfer-mobile{
        color: white;
        font-family: UniNeueBold, sans-serif;
    }
    .free-transfer-desktop{
        padding-bottom: 1.093vw;
        font-size: 1.354vw;
    }
    .free-transfer-mobile{
        display: none;
        text-align: center;
        padding-bottom: 5.729vw;
        font-size: 3.541vw;
    }
    .free-transfer-mobile span{
        display: block;
    }
    @media all and (max-width: 450px){
        .free-transfer-desktop{
            display: none;
        }
        .free-transfer-mobile{
            display: block;
        }

    }
</style>
