<template>
    <div class="contact-row">
        <div class="subtitle">{{singleItem.title}}</div>
        <p class="address-text" v-for="data in singleItem.data">
            <span v-if="!data.isActive || data.type === 'text'">
                {{data.text}}
            </span>
            <a v-else-if="data.isActive && data.type === 'email'" :href="'mailto:' + data.text">{{data.text}}</a>
            <span v-else-if="data.isActive && data.type === 'phone'" :class="'ph-phone' + data.callTrackingId">
                <a :href="'tel:' + data.val" :class="'binct-phone-number-' + data.callTrackingId">{{data.text}}</a>
            </span>
        </p>
    </div>
</template>

<script>
    export default {
        name: "ContactItem",
        props: [
            'singleItem'
        ],
    }
</script>

<style>

</style>
