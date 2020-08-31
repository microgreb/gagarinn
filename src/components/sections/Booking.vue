<template>
    <section id="BookingForm">
        <div id="main-content">
            <div class="column">
                <h2 class="content_title">Бронирование номеров</h2>
                <p id="tl-anchor" class="content_description">С помощью приведенной ниже формы вы можете забронировать наши номера в режиме онлайн и получить гарантированную бронь. Для оплаты вы можете использовать кредитную карту, электронные деньги, безналичный расчет либо оплатить заказ на месте.</p>
            </div>
            <div class="column">
                <!-- start TL Booking form script -->
                <div id="tl-booking-form">&nbsp;</div>
                <script type="text/javascript">
                    document.addEventListener('DOMContentLoaded', function() {
                        (function(i, s, o, g, r, a, m) {
                            i['GoogleAnalyticsObject'] = r;
                            i[r] = i[r] || function() {
                                (i[r].q = i[r].q || []).push(arguments)
                            }, i[r].l = 1 * new Date();
                            a = s.createElement(o),
                                m = s.getElementsByTagName(o)[0];
                            a.async = 1;
                            a.src = g;
                            m.parentNode.insertBefore(a, m)
                        })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

                        ga('create', 'UA-54217693-1', 'auto');
                        ga('require', 'ecommerce', 'ecommerce.js');
                    });
                    function bookingStepChanged(data) {
                        switch (data.step) {
                            case 'search':
                            case 'preview':
                            case 'payment':
                            case 'complete':
                                break;
                            default:
                                return;
                        }
                        ga('send', 'pageview', '/' + data.step);
                    }

                    function bookingSuccess(data) {
                        var label = data.bookingNumber + ' - ' + data.price + ' ' + data.currency;
                        ga('send', 'event', 'complete', 'book', label);
                        ga('ecommerce:addTransaction', {
                            'id': data.bookingNumber,
                            'affiliation': data.providerName,
                            'currency': data.currency,
                            'revenue': data.price
                        });

                        ga('ecommerce:send');
                    }
                    function bookingEdit(data){
                        console.log(data);
                    }

                    function noAvailableRooms(data) {
                        var label = data.now + ', ' + data.guests + ', ' + data.arrivalDate + ' - ' + data.departureDate;
                        ga('send', 'event', 'search', 'no-rooms', label);
                    }
                    (function(w){
                        var q=[
                            ['setContext', 'TL-INT-gagarinn-new', 'ru'],
                            ['embed', 'booking-form', {
                                container: 'tl-booking-form',
                                onBookingStepChanged: bookingStepChanged,
                                onBookingSuccess: bookingSuccess,
                                onNoAvailableRooms: noAvailableRooms,
                                onBookingEdit: bookingEdit
                                }]
                        ];
                        var t=w.travelline=(w.travelline||{}),ti=t.integration=(t.integration||{});ti.__cq=ti.__cq?ti.__cq.concat(q):q;
                        if (!ti.__loader){ti.__loader=true;var d=w.document,p=d.location.protocol,s=d.createElement('script');s.type='text/javascript';s.async=true;s.src=(p=='https:'?p:'http:')+'//eu-ibe.tlintegration.com/integration/loader.js';(d.getElementsByTagName('head')[0]||d.getElementsByTagName('body')[0]).appendChild(s);}
                    })(window);
                </script>
                <!-- end TL Booking form script -->
            </div>

        </div>
    </section>
</template>

<script>
    export default {
        name:'BookingForm'
    }
</script>
