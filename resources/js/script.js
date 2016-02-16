$(document).ready(function() {
    
    
    //for sticky nav
    $(".jsSectionFeatures").waypoint(function(direction) {
        if(direction === "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {offset: '60px'});
    
    //for scroll buttons
    $(".jsScrollToPlans").click(function () {
        $("html, body").animate({scrollTop: $('.jsSectionPlans').offset().top}, 1000);
    });
     $(".jsScrollToStart").click(function () {
        $("html, body").animate({scrollTop: $('.jsSectionFeatures').offset().top}, 1000);
    });
    
    //nav scrolling
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
    
    
    //Animate
    $(".jsWp1").waypoint(function(direction) {
        $(".jsWp1").addClass('animated fadeIn')
    }, {offset: '50%'})
    $(".jsWp2").waypoint(function(direction) {
        $(".jsWp2").addClass('animated fadeIn')
    }, {offset: '50%'})
    $(".jsWp3").waypoint(function(direction) {
        $(".jsWp3").addClass('animated slideInLeft')
    }, {offset: '50%'})
     $(".jsWp4").waypoint(function(direction) {
        $(".jsWp4").addClass('animated pulse')
    }, {offset: '50%'})
     
    
    //mobile nav
    $(".jsMobileNav").click(function () {
        var nav = $(".main-nav");
        var icon = $(".jsMobileNav i");
        
        nav.slideToggle(200);
        if(icon.hasClass("ion-navicon-round")) {
           icon.addClass("ion-close-round");
            icon.removeClass("ion-navicon-round");
        } else {
            icon.addClass("ion-navicon-round");
            icon.removeClass("ion-close-round");
        }
    });
    
    //map
    var map = new GMaps({
      div: '.map',
      lat: 51.503685,
      lng: -0.05,
        zoom: 12
    });
    
    map.addMarker({
      lat: 51.503685,
      lng: -0.1416319,
      title: 'London',
      infoWindow: {
      content: '<p>Our London HQ</p>'
    }
    });
})