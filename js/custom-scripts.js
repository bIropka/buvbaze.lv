$(document).ready(function () {

    /******************************************************************************************************************
     ******* init scripts
     ******************************************************************************************************************/

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


});
