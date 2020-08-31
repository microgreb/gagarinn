<template>
    <section id="contact" class="contact-section">
        <div class="contact">
            <div class="contacts">
                <h2 class="title">{{$t('contactSection.title')}}</h2>
                <div class="contact-wrap-box">
                    <div class="contact-wrap">
                        <div class="address-wrap">
                            <contact-item :singleItem="$t('contactSection.blocks.addres')"></contact-item>
                        </div>
                        <div class="reservation">
                            <contact-item :singleItem="$t('contactSection.blocks.booking')"></contact-item>
                        </div>
                    </div>
                    <div class="contact-wrap">
                        <div class="address-wrap">
                            <contact-item :singleItem="$t('contactSection.blocks.conference')"></contact-item>
                        </div>
                        <div class="reservation">
                            <contact-item :singleItem="$t('contactSection.blocks.food_hub')"></contact-item>
                        </div>
                    </div>
                    <div class="contact-wrap">
                        <div class="address-wrap">
                            <contact-item :singleItem="$t('contactSection.blocks.child')"></contact-item>
                        </div>
                    </div>
                </div>
                <div class="m-contact-wrap">
                    <div class="address-wrap">
                        <contact-item :singleItem="$t('contactSection.blocks.addres')"></contact-item>
                        <contact-item :singleItem="$t('contactSection.blocks.booking')"></contact-item>
                        <contact-item :singleItem="$t('contactSection.blocks.conference')"></contact-item>
                        <contact-item :singleItem="$t('contactSection.blocks.food_hub')"></contact-item>
                        <contact-item :singleItem="$t('contactSection.blocks.child')"></contact-item>
                    </div>
                </div>
            </div>
        </div>
        <div class="map">
            <iframe id="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2749.7602570331564!2d30.759540781471145!3d46.43363126064805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c6338bb40bebad%3A0x2ecc9d59d021056d!2sGagarinn+Hotel!5e0!3m2!1sru!2sua!4v1534940454671"
                    frameborder="0" style="border:0" allowfullscreen></iframe>
            <div class="map-mask"></div>
        </div>

    </section>
</template>

<script>

    import ContactItem from './parts/ContactItem';

    export default {
        name:'Contact',
        components: {
            ContactItem
        }
    }
</script>
