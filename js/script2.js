jQuery(document).ready(function($) {
    $('#fullscreen-slider').maximage({
        cycleOptions: {
            fx: 'fade',
            speed: 3000, // Has to match the speed for CSS transitions in jQuery.maximage.css (lines 30 - 33)
            pause: 0,
            prev: '.slider-left',
            next: '.slider-right',
        },
        onFirstImageLoaded: function() {
            $('.loader').delay(800).hide();
            $('#fullscreen-slider').delay(800).fadeIn('fast');
            $('header,.slider-left,.slider-right,#page-nav').delay(800).fadeIn('fast');
        }
    });
});
