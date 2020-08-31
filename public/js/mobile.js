$(document).ready(function() {

    var mLanguage = $( '.m-language-select' );
    var mLangItem = $( '.m-language-select li' );
    mLanguage.on( 'click', function () {
        $( this ).toggleClass( 'open' );
    } );
    mLangItem.on( 'click', function () {
        var setLang = mLanguage.data( 'location' ),
            dataLangSelect = $( this ).data( 'lang' );
        mLanguage.data( 'location', dataLangSelect );
        mLangItem.removeClass( 'active' );
        $( this ).toggleClass( 'active' );
    } );

    //close menu modal
    $( '.ok' ).on( 'click', function () {
        closeMenu();
    });

    //close menu modal
    $( '.burger-menu' ).on( 'click', function () {
        $( "#modal-sidebar" ).addClass( "md-show" );
        $( "body" ).addClass( "modal-open" );
    });


    $(".mobile-menu").on("click","a", function (e) {
        var disableAnchor = $(this).attr('data-is-disable-anchor');
        if (!disableAnchor) {
            e.preventDefault();
            let id  = ($(this).attr('href')).replace('/', '#');
            let top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 800);
            history.pushState(null, null, $(this).attr('href'));

            closeMenu();
        }
    });

    $( ".border-btn" ).on( 'click', function () {
        var $btnParent = $( this ).parents( '.content-buttons' );
        if ( $btnParent.length ) {
            var $content = $btnParent.find( '.accordion' );
            if ( $content.length ) {
                if ( $content.css( 'display' ) === 'none' ) {
                    $( '.title', $btnParent ).addClass( 'contact_active' );
                    $( this, 'border-btn' ).children().first();
                }
                else {
                    $( '.title', $btnParent ).removeClass( 'contact_active' );
                    $( this ).children().first();
                }
                $content.slideToggle( '600' );
            }
        }
        return false;
    } );

    $( "#conference-button" ).attr( "target", "blank" );
    $( "#conference-button" ).attr( "href", "/img/table.svg" );

    var swiper = new Swiper('.swiper-container', {

        lazy: {
            loadPrevNextAmount: 2,
            loadPrevNext: true
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: false

    });

    function closeMenu() {
        $( "#modal-sidebar" ).removeClass( "md-show" );
        $( "body" ).removeClass( "modal-open" );
    }


});
