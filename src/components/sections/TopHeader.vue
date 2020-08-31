<template>
    <header class="header">
        <div class="header-container">
            <div class="header-left">
                <div class="logo">
                    <a href="/">
                        <img src="/img/logo.svg" alt="logo (2)">
                    </a>
                </div>
                <div class="lang">
                    <ul class="language-select">
                        <li :class="{active : lang === 'ru'}" @click="setLang('ru')">RU</li>
                        <li :class="{active: lang === 'en'}" @click="setLang('en')">EN</li>
                    </ul>
                </div>
                <nav class="header-menu" id="menu">
                    <ul class="header-items">
                        <li><a href="/rooms">{{$t('navigation.rooms')}}</a></li>
                        <li><a href="/food-hub">{{$t('navigation.food')}}</a></li>
                        <li><a href="/service">{{$t('navigation.confService')}}</a></li>
                        <!--<li><a href="">{{$t('navigation.service')}}</a></li>
                        <li><a href="#">{{$t('navigation.news')}}</a></li>
                        <li><a href="#">{{$t('navigation.career')}}</a></li>-->
                        <li><a href="/contact">{{$t('navigation.contact')}}</a></li>
                    </ul>
                </nav>
            </div>
            <div class="header-right">
                <div class="header-phone ph-phone1">
                    <a href="tel:0931704465" class="binct-phone-number-1">+38 (093) 17 044 65</a>
                </div>
                <a target="_blank" href="https://www.facebook.com/HotelGagarinn" class="fa facebook">
                    <img src="/img/facebook.svg" alt="facebook">
                </a>
                <a target="_blank" href="https://www.instagram.com/gagarinn_hotel" class="fa instagram">
                    <img src="/img/instagram.svg" alt="instagram">
                </a>
                <a target="_blank"
                   href="https://www.tripadvisor.com/Hotel_Review-g295368-d6700785-Reviews-Gagarinn-Odessa_Odessa_Oblast.html"
                   class="fa tripadvisor">
                    <img class="trip" src="/img/tripadvisor.svg" alt="tripadvisor">
                </a>
                <div class="header-btn-wrap">
                    <a class="header-btn" id="header-btn" :href="[lang === 'en' ? '/booking_en.html' : '/booking.html']">{{$t('booking.title')}}</a>
                </div>
            </div>
        </div>
        <div class="m-header-container">

            <div class="m-header-left">
                <div class="m-header-logo">
                    <img src="/img/mob-logo.svg" alt="logo">
                </div>
            </div>

            <div class="m-header-right">
                <div class="m-header-phone ph-phone1">
                    <a href="tel:0931704465" class="active binct-phone-number-1">+38 (093) 17 044 65</a>
                </div>
                <div class="m-lang">
                    <ul class="m-language-select">
                        <li :class="{active : lang === 'ru'}" @click="setLang('ru')">RU</li>
                        <li :class="{active: lang === 'en'}" @click="setLang('en')">EN</li>
                    </ul>
                </div>
                <div class="burger-menu md-trigger" data-modal="modal-sidebar">
                    <div class="menu-trigger second">
                        <span class="line line-1"></span>
                        <span class="line line-2"></span>
                        <span class="line line-3"></span>
                    </div>
                </div>
            </div>
        </div>
    </header>

</template>

<script>
    export default {
        name: 'TopHeader',
        computed: {
            lang: function() {
                return this.$root.locale;
            }
        },
        methods: {
            setLang(lang) {
                localStorage.setItem('language', lang);
                this.$root.setLocale(lang);
            }
        }
    }
</script>
