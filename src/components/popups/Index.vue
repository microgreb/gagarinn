<template>
    <div>
        <div class="overlay" id="overlay" v-if="!isMobile()">
            <div class="close-modal"><img src="/img/close.svg" alt="close"></div>
            <LuxModal />
            <StandartModal />
            <StudioModal />
            <FamilyModal />
            <ImprovedModal />
            <ServiceModal />
        </div>
    </div>
</template>


<script>
    import LuxModal from "./rooms/Lux";
    import StandartModal from "./rooms/Standart";
    import StudioModal from "./rooms/Studio";
    import FamilyModal from "./rooms/Family";
    import ImprovedModal from "./rooms/Improved";
    import ServiceModal from "./service/ServiceModal";
    import MobileMenuModal from "./mobile-menu/MobileMenuModal";
    import Mixins from "@/mixins/mixins.js"

    export default {
        name: 'ModalIndex',
        mixins: [Mixins],
        components: {MobileMenuModal, ServiceModal, ImprovedModal, StudioModal, StandartModal, LuxModal, FamilyModal}
        // computed: {
        //     isMobile: function() {
        //         return this.isMobile();
        //     },
        // }
    }
</script>
