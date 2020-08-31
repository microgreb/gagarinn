<template>
    <div class="modal" id="modal_service">
        <hide-at :breakpoints="{ small: 1170 }" breakpoint="small">
            <div>
                <div class="modal-carousel owl-carousel owl-theme">
                    <div class="item">
                        <img src="/img/conference/conference1.png" alt="Конференц-зал">
                    </div>
                    <div class="item">
                        <img src="/img/conference/conference2.png" alt="Конференц-зал (2)">
                    </div>
                    <div class="item">
                        <img src="/img/conference/conference3.png" alt="Конференц-зал (3)">
                    </div>
                    <div class="item">
                        <img src="/img/conference/conference4.png" alt="Конференц-зал (4)">
                    </div>
                    <div class="item">
                        <img src="/img/conference/conference5.png" alt="Конференц-зал (5)">
                    </div>
                    <div class="item">
                        <img src="/img/conference/conference6.png" alt="Конференц-зал (6)">
                    </div>
                    <div class="item">
                        <img src="/img/conference/conference7.png" alt="Конференц-зал (7)">
                    </div>
                    <div class="item">
                        <img src="/img/conference/conference8.png" alt="Конференц-зал (8)">
                    </div>
                </div>
                <img src="img/desktop-table.svg" alt="Характеристики конференц-залов"/>
                <div class="modal-button-wrapper">
                    <a href="/pdf/gagarin_conf.pdf" class="download-pdf-btn" download>Сохранить PDF</a>
                </div>
            </div>
        </hide-at>
        <show-at :breakpoints="{ small: 1170 }" breakpoint="small">
            <img src="img/table.svg" />
        </show-at>

    </div>

</template>

<script>
    import {showAt, hideAt} from 'vue-breakpoints'
    export default {
        name: 'ServiceModal',
        components: { hideAt, showAt }
    }
</script>
