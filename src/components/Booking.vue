<template>
    <div>
        <TopHeader/>
        <div id="main-content">
            <BookingForm />
        </div>
        <div class="md-modal md-effect-10 modal-sidebar" id="modal-sidebar">
            <div class="md-content">
                <div class="modal-logo">
                    <img src="/img/main-logo.svg" alt="logo">
                </div>
                <ul class="mobile-menu">
                    <li class="md-li"><a href="#rooms">{{$t('navigation.rooms')}}</a></li>
                    <li class="md-li"><a href="/booking.html">{{$t('navigation.booking')}}</a></li>
                    <li class="md-li"><a href="#food-hub">{{$t('navigation.food')}}</a></li>
                    <li class="md-li"><a href="#service">{{$t('navigation.confService')}}</a></li>
                    <li class="md-li"><a href="#contact">{{$t('navigation.contact')}}</a></li>
                </ul>
                <div class="md-close ok">
                    <img src="img/close.svg" alt="close">
                </div>
            </div>
        </div>

        <div class="md-overlay"></div>

    </div>
</template>

<script>
    import sassStyles from './../assets/sass/style.scss'
    import TopHeader from './sections/TopHeader'
    import BookingForm from './sections/Booking'

    export default {
        components: {
            TopHeader,
            sassStyles,
            BookingForm
        }
    }
</script>
