<template>
    <section id="service">
        <div class="service-images">
            <div class="image-1"></div>
            <div class="image-2" style="background: url(./img/service-2.jpg) 100% 0 / cover no-repeat"></div>
        </div>
        <div class="service-content">
            <div class="content">
                <h2 class="title">{{$t('confSection.title')}}</h2>
                <p class="text">
                    {{$t('confSection.text1')}}
                </p>
                <p class="text">
                    {{$t('confSection.text2')}}
                </p>
                <div class="learn-more">
                    <a href="#modal_service" class="open-modal" id="conference-button">
                        <button class="learn-btn"> {{$t('confSection.moreBtn')}}</button></a>
                    <a href="tel:+0487744473" class="phone binct-phone-number-3">+38 0487744473</a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name:'Service'
    }
</script>
