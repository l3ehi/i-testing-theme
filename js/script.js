$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        rtl:true,
        margin:0,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });
    setTimeout(function(){
        $('body').addClass('ready');
    }, 2000);

    $("a[href='#sec']").click(function() {
        var thisSelector = '.horizontal-section:nth-of-type('+ ($(this).parent().index()+1) +')';
        //console.log(  );
        $('.horizontal-section').removeClass('visible');
        $(thisSelector).addClass('visible');
        //return false;
    });

    (function($){
        $(window).on("load",function(){
            $(".content").mCustomScrollbar();
        });
    })(jQuery);

});

/*

NOW AS A SUPER EASY TO USE PLUGIN:
https://panels.scotch.io

*/


$(function() {

    var special = ['reveal', 'top', 'boring', 'perspective', 'extra-pop'];

    // Toggle Nav on Click
    $('#loginBtn').click(function() {

        var transitionClass = $(this).data('transition');

        if ($.inArray(transitionClass, special) > -1) {
            $('body').removeClass('show-nav');
            $('body').addClass(transitionClass);
        } else {
            $('body').removeClass('show-nav');
            $('#site-canvas').removeClass();
            $('#site-canvas').addClass(transitionClass);
        }

        $('#site-wrapper').toggleClass('show-nav');

        return false;

    });

});





// // Initialize collapse button
// $(".button-collapse").sideNav();
// // Initialize collapsible (uncomment the line below if you use the dropdown variation)
// //$('.collapsible').collapsible();
//
// $('.button-collapse').sideNav({
//         menuWidth: 300, // Default is 300
//         edge: 'right', // Choose the horizontal origin
//         closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
//         draggable: true, // Choose whether you can drag to open on touch screens
//     }
//   );
//
// // Show sideNav
// $('.button-collapse').sideNav('show');
// // Hide sideNav
// $('.button-collapse').sideNav('hide');
// // Destroy sideNav
// $('.button-collapse').sideNav('destroy');
