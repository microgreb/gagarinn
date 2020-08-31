<template>
    <section id="food-hub">
        <div class="food-hub-content">
            <div class="content">
                <h2 class="title">{{$t('foodSection.title')}}</h2>
                <p class="text">
                    {{$t('foodSection.text1')}}
                </p>
                <p class="text">
                    {{$t('foodSection.text2')}}
                </p>
                <p class="text">
                    {{$t('foodSection.text3')}}
                </p>
                <div class="learn-more">
                    <!--<a href="#modal_restaurant" class="open-modal">-->
                    <!--<button class="learn-btn">Подробнее</button>-->
                    <!--</a>-->
                    <div>
                        <a href="tel:+0637352060" class="phone binct-phone-number-6">+38 0637352060</a><br>
                        <a target="_blank" href="https://www.facebook.com/gagarinnfoodhub" class="fa facebook">
                            <img src="/img/facebook.svg" alt="facebook">
                        </a>
                        <a target="_blank" href="https://www.instagram.com/gagarinn_foodhub" class="fa instagram">
                            <img src="/img/instagram.svg" alt="instagram">
                        </a>
                    </div>
                    <a :href="$t('foodSection.link')" target="_blank"><button class="learn-btn">{{$t('foodSection.menu')}}</button></a>
                </div>
            </div>
        </div>
        <div class="food-hub-images">
            <div class="image-1"></div>
            <div class="image-2">
                <div class="m-slider">
                    <!-- Swiper -->
                    <div class="swiper-container">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <img data-src="img/food-hub-2-m.jpg" class="swiper-lazy" alt="Ресторан (8)">
                                <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                            </div>
                            <div class="swiper-slide">
                                <img data-src="img/food-hub-1-m.jpg" class="swiper-lazy" alt="Ресторан (9)">
                                <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                            </div>
                            <div class="swiper-slide">
                                <img data-src="img/restoran-m/image-1.jpg" class="swiper-lazy" alt="Ресторан (10)">
                                <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                            </div>
                            <div class="swiper-slide">
                                <img data-src="img/restoran-m/image-2.jpg" class="swiper-lazy" alt="Ресторан (11)">
                                <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                            </div>
                            <div class="swiper-slide">
                                <img data-src="img/restoran-m/image-3.jpg" class="swiper-lazy" alt="Ресторан (12)">
                                <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                            </div>
                            <div class="swiper-slide">
                                <img data-src="img/restoran-m/image-4.jpg" class="swiper-lazy" alt="Ресторан (13)">
                                <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                            </div>
                            <div class="swiper-slide">
                                <img data-src="img/restoran-m/image-5.jpg" class="swiper-lazy" alt="Ресторан (14)">
                                <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                            </div>
                            <div class="swiper-slide">
                                <img data-src="img/restoran-m/image-6.jpg" class="swiper-lazy" alt="Ресторан (15)">
                                <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                            </div>
                            <div class="swiper-slide">
                                <img data-src="img/restoran-m/image-7.jpg" class="swiper-lazy" alt="Ресторан (16)">
                                <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                            </div>
                            <div class="swiper-slide">
                                <img data-src="img/restoran-m/image-8.jpg" class="swiper-lazy" alt="Ресторан (17)">
                                <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                            </div>
                            <div class="swiper-slide">
                                <img data-src="img/restoran-m/image-9.jpg" class="swiper-lazy" alt="Ресторан (18)">
                                <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                            </div>
                            <div class="swiper-slide">
                                <img data-src="img/restoran-m/image-10.jpg" class="swiper-lazy" alt="Ресторан (19)">
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
    export default {
        name: 'Foodhub'
    }
</script>

<style scoped>
    .learn-btn{
        margin-left: 1.77vw;
        display: block !important;
        margin-right: 0;
    }
    @media all and (max-width: 500px){
        .learn-btn{
            margin-left: 3.888vw;
            display: block !important;
        }
    }

</style>
