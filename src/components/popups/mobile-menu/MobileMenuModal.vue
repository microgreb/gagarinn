<template>
    <div class="md-modal md-effect-10" id="modal-1">
        <div class="md-content">
            <div class="md-close ok">
                <img src="img/close.svg" alt="close">
            </div>
            <ul class="mobile-menu">
                <li class="md-li"><a href="#rooms">{{$t('navigation.rooms')}}</a></li>
                <li class="md-li"><a href="#food-hub">{{$t('navigation.food')}}</a></li>
                <li class="md-li"><a href="#service">{{$t('navigation.confService')}}</a></li>
                <!--<li class="md-li"><a href="#">{{$t('navigation.service')}}</a></li>
                <li class="md-li"><a href="#">{{$t('navigation.news')}}</a></li>
                <li class="md-li"><a href="#">{{$t('navigation.career')}}</a></li>-->
                <li class="md-li"><a href="#contact">{{$t('navigation.contact')}}</a></li>
            </ul>
        </div>
    </div>
</template>


<script>
    export default {
        name: 'MobileMenuModal'
    }
</script>
