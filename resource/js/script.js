// $(document).ready(function() {
//
//     $('h1').click(function() {
//         $(this).css('background-color', '#ff0000');
//     });
// });


$(document).ready(function () {

    // For the sticky navigation
    $('js--section--join').waypoint(function (direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }), {
        offset: '25%'
   });

// var waypoints = $('#handler-first').waypoint(function(direction) {
//   notify(this.element.id + ' hit 25% from top of window')
// }, {
//   offset: '25%'
// })


//Scroll on buttons
    $('.js--scroll-to-price').click(function () {
        $('html, body').animate({scrollTop: $('js--section--price').ffset().top}, 1000);
    });

    $('js--scroll-to-gallery').click(function () {
    $('html, body').animate({scrollTop: $('js--section--gallery').ffset().top}, 1000);
    });


    /* Navigation scroll */
    $(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });

//    Animation on scroll
    $('js--wp-1').waypoint(function (direction) {
        $('animate__flash').addClass('animate__flash');
    }, {
        offset: '50%'
    });

    $('js--wp-2').waypoint(function (direction) {
        $('animate__flash').addClass('animate__fadeInUp');
    }, {
        offset: '50%'
    });

    $('js--wp-3').waypoint(function (direction) {
        $('animate__flash').addClass('animate__flash');
    }, {
        offset: '50%'
    });

    $('js--wp-4').waypoint(function (direction) {
        $('animate__flash').addClass('animate__fadeInUp');
    }, {
        offset: '50%'
    });

//    collapse
    $('js--nav-icon').click(function () {
        var nav = $('.js--nav-main');
        var icon = $('.js--nav-icon i')

        nav.slideToggle(200);
        if (icon.hasClass('fas fa-bars')) {
            icon.addClass('fas fa-times');
            icon.removeClass('fas fa-bars');
        } else {
            icon.addClass('fas fa-bars');
            icon.removeClass('fas fa-times');
        }
    });

});

