<template>
    <div>
        <TopHeader/>

        <div id="main-content">
            <BookingForm />
        </div>

        <Footer />
    </div>
</template>

<script>
    import sassStyles from './../assets/sass/style.scss'
    import TopHeader from './sections/TopHeader'
    import Footer from "./sections/Footer";

    export default {
        name: 'Layout',
        components: {
            Footer,
            TopHeader
        },
        props: {
            msg: String
        }
    }
</script>
