<template>
    <section class="mob-filter">
        <form class="main-filter">
            <div class="filter-group">
                <div class="field">
                    <p class="data">
                        <label>{{$t('booking.label1')}}</label>
                        <input type="text" class="dateTxt form-control form-arrival" value="">
                        <span class="date-dot"></span>
                    </p>
                </div>
                <div class="field">
                    <p class="data">
                        <label>{{$t('booking.label2')}}</label>
                        <input type="text" class="dateTxt form-control form-departure" value="">
                        <span class="date-dot"></span>
                    </p>
                </div>
                <div class="field">
                    <p class="select">
                        <label>{{$t('booking.label3')}}</label>
                        <select  class="guests">
                            <option value="1">1  {{$t('booking.guest')}}</option>
                            <option value="2">2 {{$t('booking.guests')}}</option>
                            <option value="3">3 {{$t('booking.guests')}}</option>
                            <option value="4">4 {{$t('booking.guests')}}</option>
                        </select>
                        <span class="date-dot"></span>
                    </p>
                </div>
            </div>
            <input type="hidden" name="lang" class="sf-lang" :value="[lang]">
            <div class="reserv">
                <a href="#">{{$t('booking.title')}}</a>
            </div>
        </form>
    </section>
</template>

<script>
    export default {
        name: 'MobFilter',
        computed: {
            lang: function() {
                return this.$root.locale;
            }
        }
    }
</script>
