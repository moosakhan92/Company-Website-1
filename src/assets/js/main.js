jQuery(document).ready(function () {

    // Wrap every letter in a span
$('.ml2').each(function(){
    $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
  });
  
  anime.timeline({loop: true})
    .add({
      targets: '.ml2 .letter',
      scale: [4,1],
      opacity: [0,1],
      translateZ: 0,
      easing: "easeOutExpo",
      duration: 950,
      delay: function(el, i) {
        return 70*i;
      }
    }).add({
      targets: '.ml2',
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000
    });

//Preloader active
    jQuery(window).load(function () {
        jQuery(".loaded").fadeOut();
        jQuery(".preloader").delay(1000).fadeOut("slow");
    });

    

// sidenav navbar nav
    jQuery(".button-collapse").sideNav();


// localScroll js
    jQuery(".navbar-desktop").localScroll();

// Counter 
    jQuery('.statistic-counter').counterUp({
        delay: 10,
        time: 2000
    });

// Mixitube
    jQuery('#mixcontent').mixItUp({
        animation: {
            animateResizeContainer: false,
            effects: 'fade rotateX(-45deg) translateY(-10%)'
        }
    });

// MagnificPopup
    jQuery('.gallery-img').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        },
    });

// Home slider
    jQuery('.slider').slider({full_width: true});

// client slider
    jQuery('.carousel').carousel();

// accordion

    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].onclick = function () {
            this.classList.toggle("active");
            this.nextElementSibling.classList.toggle("show");
        }
    }
    
// nav menu small menu
    jQuery(document).on("scroll", function () {
        if ($(document).scrollTop() > 120) {
            $("nav").addClass("small");
        } else {
            $("nav").removeClass("small");
        }
    });


});








