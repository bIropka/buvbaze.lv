$(document).ready(function () {

    /******************************************************************************************************************
     ******* init scripts
     ******************************************************************************************************************/

    setTimeout(function() {
        $('.slider-wrap').animate({opacity: '1'}, 500);
    }, 500);
    
    $(document).click(function(event) {

        if (!$(event.target).closest(".custom-select .current-value").length && !$(event.target).closest(".custom-select .popup-select").length &&
            !$(event.target).closest(".custom-menu .control").length && !$(event.target).closest(".custom-menu .popup-menu").length) {
            $('.custom-select').removeClass('active');
            $('.custom-select').find('.popup-select').fadeOut(200);
            $('.custom-menu').removeClass('active');
            $('.custom-menu').find('.popup-menu').fadeOut(200);
        }
    });

    $('.popup-links').mCustomScrollbar();

    if ($(window).scrollTop() > 0) {
        $('.header-nav').addClass('minimized');
    } else {
        $('.header-nav').removeClass('minimized');
    }

    $(window).scroll(function() {

        if ($(window).scrollTop() > 0) {
            $('.header-nav').addClass('minimized');
        } else {
            $('.header-nav').removeClass('minimized');
        }

    });


    $('.categories > li').hover(
        function() {
            var item = $(this);
            setTimeout(function() {
                if($(item).is(':hover')) {
                    if($(item).offset().top - $(window).scrollTop() > $(window).height()/2) {
                        $(item).find('.sub-categories').addClass('to-top');
                    }
                    $(item).find('.sub-categories').fadeIn(0);
                }
            }, 500);
        },
        function() {
            $(this).find('.sub-categories').fadeOut(0);
            $(this).find('.sub-categories').removeClass('to-top');
        });

    $('.sub-categories > li').hover(
        function() {
            var item = $(this);
            setTimeout(function() {
                if($(item).is(':hover')) {
                    if($(item).offset().top - $(window).scrollTop() > $(window).height()/2) {
                        $(item).find('.links').addClass('to-top');
                    }
                    $(item).find('.links').fadeIn(0);
                }
            }, 500);
        },
        function() {
            $(this).find('.links').fadeOut(0);
            $(this).find('.links').removeClass('to-top');
        });


    /******************************************************************************************************************
     ******* clicks scripts
     ******************************************************************************************************************/

    $('.custom-select .current-value').click(function() {

        if($(this).parents('.custom-select').hasClass('active')) {
            $(this).parents('.custom-select').removeClass('active');
            $(this).parents('.custom-select').find('.popup-select').fadeOut(200);
        } else {
            $('.custom-select').removeClass('active');
            $('.custom-select').find('.popup-select').fadeOut(200);
            $('.custom-menu').removeClass('active');
            $('.custom-menu').find('.popup-menu').fadeOut(200);
            $(this).parents('.custom-select').addClass('active');
            $(this).parents('.custom-select').find('.popup-select').fadeIn(200);
        }

    });

    $('.popup-select .value').click(function() {

        if (!$(this).hasClass('chosen')) {
            var choice = $(this).parents('.item').html();
            $(this).parents('.popup-select').find('.item.chosen').removeClass('chosen');
            $(this).parents('.item').addClass('chosen');

            $(this).parents('.custom-select').find('.current-value').html(choice);

            $(this).parents('.custom-select').removeClass('active');
            $(this).parents('.popup-select').fadeOut(200);
        }

    });

    $('.custom-menu .control').click(function() {

        if($(this).parents('.custom-menu').hasClass('active')) {
            $(this).parents('.custom-menu').removeClass('active');
            $(this).parents('.custom-menu').find('.popup-menu').fadeOut(200);
        } else {
            $('.custom-select').removeClass('active');
            $('.custom-select').find('.popup-select').fadeOut(200);
            $('.custom-menu').removeClass('active');
            $('.custom-menu').find('.popup-menu').fadeOut(200);
            $(this).parents('.custom-menu').addClass('active');
            $(this).parents('.custom-menu').find('.popup-menu').fadeIn(200);
        }

    });

    $('.form-select').hover(
        function() {

        $(this).find('ul').fadeIn(0);

    },
        function() {

            $(this).find('ul').fadeOut(0);

        }
    );

    $('.form-select ul li').click(function() {

        var oldValue = $(this).parents('.form-select').find('.current-value').html();
        var newValue = $(this).html();

        $(this).parents('.form-select').find('.current-value').html(newValue);
        $(this).parents('.form-select').find('.current-value').attr('title', newValue);

        $(this).html(oldValue);
        $(this).attr('title', oldValue);

        $(this).parents('.form-select').find('input').attr('value', newValue);

        $(this).parents('.form-select').find('ul').fadeOut(0);

    });

    $('.tab-controls .control').click(function() {

        var index = $(this).index();

        $(this).siblings('.active').removeClass('active');
        $('.tab-items .item.active').removeClass('active');

        $(this).addClass('active');
        $('.tab-items .item').eq(index).addClass('active');

    });

    /******************************************************************************************************************
     ******* sliders
     ******************************************************************************************************************/

    $('.slider-partners').slick({
        slidesToShow: 4
    });

});
