<template>
	<div>
	    <TopHeader/>
	    <div id="main-content">
            <div class="page404-content">
                <p class="title">Ошибка 404</p>
                <p class="desc">Страница не найдена</p>
            </div>
	    </div>
	    <Footer />
	    <div class="md-modal md-effect-10 modal-sidebar" id="modal-sidebar">
	        <div class="md-content">
	            <div class="modal-logo">
	                <img src="/img/main-logo.svg" alt="logo">
	            </div>
	            <ul class="mobile-menu">
	                <li class="md-li"><a href="/rooms">{{$t('navigation.rooms')}}</a></li>
	                <li class="md-li"><a :href="[lang === 'en' ? '/booking_en.html' : '/booking.html']" data-is-disable-anchor="true">{{$t('navigation.booking')}}</a></li>
	                <li class="md-li"><a href="/food-hub">{{$t('navigation.food')}}</a></li>
	                <li class="md-li"><a href="/service">{{$t('navigation.confService')}}</a></li>
	                <li class="md-li"><a href="/contact">{{$t('navigation.contact')}}</a></li>
	            </ul>
	            <div class="md-close ok">
	                <img src="img/close.svg" alt="close">
	            </div>
	        </div>
	    </div>

	    <div class="md-overlay"></div>

	    <ModalIndex />
	</div>
</template>

<script>
    import sassStyles from './../assets/sass/style.scss'
    import TopHeader from './sections/TopHeader'
    import VideoSection from "./sections/VideoSection";
    import MobFilter from "./sections/MobFilter";
    import Foodhub from "./sections/FoodHub";
    import Service from "./sections/Service";
    import Contact from "./sections/Contact";
    import Rooms from "./sections/Rooms";
    import Footer from "./sections/Footer";
    import ModalIndex from "./popups/Index";

    export default {
        name: 'Layout404',
        components: {
            ModalIndex,
            Contact,
            Service,
            Foodhub,
            MobFilter,
            VideoSection,
            Rooms,
            Footer,
            TopHeader,
            sassStyles
        },
        props: {
            msg: String
        },
        computed: {
            lang: function() {
                return this.$root.locale;
            }
        }

    }
</script>
<style lang="sass" scoped>
    .page404-content
        height: calc(100vh - 4.635vw)
        display: flex
        flex-direction: column
        text-align: center
        justify-content: center
        align-items: center
        .title
            font-size: 3.5em
            font-weight: bold
        .desc
            font-size: 2.5em
    @media (max-width: 400px)
        .page404-content
            .title
                font-size: 2.5em
            .desc
                font-size: 1.8em
</style>
