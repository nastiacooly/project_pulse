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
                    dots: false,
                    innerHeight: 300
                }
            },
            {
                breakpoint: 576,
                settings: {
                    dots: true,
                    arrows: false,
                    innerHeight: 200
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

    //Validation of forms

    function validateForm(form) {
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                tel: "required",
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: {
                    required: "Пожалуйста, укажите своё имя",
                    minlength: jQuery.validator.format("Минимум {0} символа")
                },
                tel: "Пожалуйста, укажите свой номер телефона для связи",
                email: {
                  required: "Для связи с Вами нам необходим Ваш адрес электронной почты",
                  email: "Электронный адрес необходимо указать в формате name@domain.com"
                }
            }
        });

    };

    validateForm('#consult-form');
    validateForm('#consultation form');
    validateForm('#order form');

    //Masked Input

    $('input[name=tel]').mask("+7 (999) 999-9999");

    $('form').submit(function(e) {
        e.preventDefault();
        $.ajax({ 
            type: "POST",
            url: "./mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('#consultation, #order').fadeOut();
            $('.overlay, #thanks').fadeIn('slow');
            $('form').trigger('reset');
        });
        return false;
    });

    // "To the top" button and Smooth scroll

    $(window).scroll(function () {
        if ($(this).scrollTop() > 1600) {
            $('.pageUp').fadeIn();
        } else {
            $('.pageUp').fadeOut();
        }
    });

    $("a[href=#up]").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });

    
    //wow.js initialization
    new WOW().init();



  });