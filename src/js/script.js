$(document).ready(function(){
    $('.carousel__inner').slick({
        infinite: true,
        speed: 1200,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="./icons/catalog/arrow_left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="./icons/catalog/arrow_right.png"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false
                }
            }
        ]
    });

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

/*     $('.catalog-item__link').each(function(i) {
        $(this).on('click', function(e) {
            e.preventDefault();
            $('.catalog-item__general').eq(i).toggleClass('catalog-item__general_active');
            $('.catalog-item__details').eq(i).toggleClass('catalog-item__details_active');
        })

    });

    $('.catalog-item__back').each(function(i) {
        $(this).on('click', function(e) {
            e.preventDefault();
            $('.catalog-item__general').eq(i).toggleClass('catalog-item__general_active');
            $('.catalog-item__details').eq(i).toggleClass('catalog-item__details_active');
        })

    }); */

    function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__general').eq(i).toggleClass('catalog-item__general_active');
                $('.catalog-item__details').eq(i).toggleClass('catalog-item__details_active');
            })
    
        });
    };

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

    //Modal

    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn('slow');
    });

    $('.modal__close').on('click', function() {
        $('.overlay, #consultation, #order, #thanks').fadeOut('slow');

    });

    $('.button_purchase').each(function(i) {
        $(this).on('click', function() {
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
        });
    });



  });