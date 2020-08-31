$(document).ready(function() {
    var currentDate = new Date();
    var currentDateDate = currentDate.getDate() + currentDate.getMonth() + currentDate.getFullYear();
    var tomorrowDate = new Date(currentDate.getTime() + 24 * 60 * 60 * 1000);

    var DiffDate;

    $(".form-arrival").datepicker({
        format: 'dd / mm / yy' ,
        startDate: currentDate,
        autoclose: true,
        beforeShowDay: function (date) {
            if (date) {
                DiffDate = date.getDate() + date.getMonth() + date.getFullYear();
                if (DiffDate==currentDateDate) {
                    return {
                        classes: 'highlighted'
                    };
                }
                return;
            }
        }
    }).datepicker("setDate",currentDate);
    $(".form-departure").datepicker({
        format: 'dd / mm / yy' ,
        startDate: tomorrowDate,
        autoclose: true,
        beforeShowDay: function (date) {
            if (date) {
                DiffDate = date.getDate() + date.getMonth() + date.getFullYear();
                if (DiffDate==currentDateDate) {
                    return {
                        classes: 'highlighted'
                    };
                }
                return;
            }
        }
    }).datepicker("setDate",tomorrowDate);

    $('.form-arrival').change(function(){

        var fromDate = $(this).val().replace(/(\d+) \/ (\d+) \/ (\d+)/, '20$3-$2-$1');
        var fromDateYear = parseInt(fromDate.substr(0,4));
        var fromDateMonth = parseInt(fromDate.substr(5,2))-1;
        var fromDateDate = parseInt(fromDate.substr(8,2)) + 1;

        var toDateFormated = new Date(fromDateYear,fromDateMonth,fromDateDate);
        if (toDateFormated > new Date()) {
            $(this).parent().parent().parent().find(".form-departure").datepicker('setStartDate',toDateFormated).datepicker("setDate",toDateFormated);
        }
        /*var toDate = new Date(fromDate.getTime() + 24 * 60 * 60 * 1000);
        $(".form-departure").datepicker('option', 'minDate', new Date(toDate))
        if (currenttoDate < toDate)
            $(".form-departure").datepicker("setDate",toDate);*/
    });


    $('.reserv').click(function(){
        var arrival = $(this).parent().find('.form-arrival').val().replace(/(\d+) \/ (\d+) \/ (\d+)/, '20$3-$2-$1');
        var arrivalYear = arrival.substr(0,4);
        var arrivalMonth = arrival.substr(5,2);
        var arrivalDate = arrival.substr(8,2);
        //var arrivalDateFull = arrivalYear + "-" + arrivalMonth  + "-" + arrivalDate;

        var departure = $(this).parent().find('.form-departure').val().replace(/(\d+) \/ (\d+) \/ (\d+)/, '20$3-$2-$1');
        var departureYear = departure.substr(0,4);
        var departureMonth = departure.substr(5,2);
        var departureDate = departure.substr(8,2)

        var nights = (new Date(departureYear,departureMonth,departureDate) - new Date(arrivalYear,arrivalMonth,arrivalDate))/(1000*60*60*24);

        var adults = ($(this).parent().find('.guests').val()) ? $(this).parent().find('.guests').val() : 0;
        var modaladults = $(this).parent().find('.modal-guests').val();
        adults = (adults)? adults : modaladults;

        var roomtype = ($(this).parent().find('.room-type').val());
        var roomtype_str = (roomtype) ? "&room-type=" + roomtype : '';
        var lang_str = (($(this).parent().find('.sf-lang').val()) == 'en') ? '_en' : '';
        window.location.href = "/booking" + lang_str + ".html?date=" + arrival + "&nights=" + nights + "&adults=" + adults + roomtype_str;
    });
    //  modal carousel
    $( '.modal-carousel' ).owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        dots: false,
        center:true,
        lazyLoad: true,
        autoWidth: true,
        margin: 3,
        smartSpeed: 600,
        responsiveClass: true,
        navText: [ "", "" ]
    });

    //$('.rest-carousel').trigger('change', { property: { name: 'autoWidth', value: false } });


    // arrow down
    $( ".arrow-down a" ).on( 'click', function ( e ) {
        e.preventDefault();
        let id = $( this ).attr( 'href' ),
            top = $( id ).offset().top;
        $( 'body,html' ).animate( { scrollTop: top }, 700 );
    });

    // Language select
    let language = $('.language-select');
    let langItem = $('.language-select li');
    language.on('click', function(){
        $(this).toggleClass('open');
    });
    langItem.on('click', function(){
        let setLang = language.data('location'),
            dataLangSelect = $(this).data('lang');
        language.data('location', dataLangSelect);
        langItem.removeClass('active');
        $(this).toggleClass('active');
    });

    // ********************* Scroll menu *************************//

    $(window).scroll(function(){
        let $sections = $( 'section' );
        $sections.each(function(i,el){
            let top  = $(el).offset().top-100;
            let bottom = top +$(el).height();
            let scroll = $(window).scrollTop();
            let id = $(el).attr('id');
            if( scroll > top && scroll < bottom){
                $( 'a.active' ).removeClass( 'active' );
                $( 'a[href="/'+id+'"]' ).addClass( 'active' );
            }
        })
    });

    $("nav").on("click","a", function (e) {
        var disableAnchor = $('nav').attr('data-is-disable-anchor');
        if (!disableAnchor) {
            e.preventDefault();
            let id  = ($(this).attr('href')).replace('/', '#');
           let top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 800);
            history.pushState(null, null, $(this).attr('href'));
        }
    });

    // Modals
    let overlay = $( '.overlay' );
    let open_modal = $( '.open-modal' );
    let close = $( '.close-modal' );
    let modal = $( '.modal' );

    open_modal.on( 'click', function ( e ) {
        e.preventDefault();
        let div = $( this ).attr( 'href' );
        overlay.fadeIn( 400,
            function () {
                $( div )
                    .css( 'display', 'block' )
                    .animate( 600 );
            } );
        $( document.body ).css( 'overflow', 'hidden' );
    } );
    close.on( 'click', function () {
        modal
            .animate( 200,
                function () {
                    $( this ).css( 'display', 'none' );
                    overlay.fadeOut( 400 );
                }
            );
        $( document.body ).css( 'overflow', 'auto' );
    } );

});
