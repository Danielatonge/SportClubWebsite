$(document).ready(function() {
  // executes when HTML-Document is loaded and DOM is ready
  console.log("document is ready");
   
  $( ".card-shadow" ).hover(
    function() {
      $(this).addClass('shadow-lg').css('cursor', 'pointer'); 
    }, function() {
      $(this).removeClass('shadow-lg');
  });
  


  /*-------------------------------------
    OwlCarousel
    -------------------------------------*/
    
    $('.rs-carousel').each(function() {
      var owlCarousel = $(this),
      loop = owlCarousel.data('loop'),
      items = owlCarousel.data('items'),
      margin = owlCarousel.data('margin'),
      stagePadding = owlCarousel.data('stage-padding'),
      autoplay = owlCarousel.data('autoplay'),
      autoplayTimeout = owlCarousel.data('autoplay-timeout'),
      smartSpeed = owlCarousel.data('smart-speed'),
      dots = owlCarousel.data('dots'),
      nav = owlCarousel.data('nav'),
      navSpeed = owlCarousel.data('nav-speed'),
      xsDevice = owlCarousel.data('mobile-device'),
      xsDeviceNav = owlCarousel.data('mobile-device-nav'),
      xsDeviceDots = owlCarousel.data('mobile-device-dots'),
      smDevice = owlCarousel.data('ipad-device'),
      smDeviceNav = owlCarousel.data('ipad-device-nav'),
      smDeviceDots = owlCarousel.data('ipad-device-dots'),
      smDevice2 = owlCarousel.data('ipad-device2'),
      smDeviceNav2 = owlCarousel.data('ipad-device-nav2'),
      smDeviceDots2 = owlCarousel.data('ipad-device-dots2'),
      mdDevice = owlCarousel.data('md-device'),
      centerMode = owlCarousel.data('center-mode'),
      mdDeviceNav = owlCarousel.data('md-device-nav'),
      mdDeviceDots = owlCarousel.data('md-device-dots');
      owlCarousel.owlCarousel({
          loop: (loop ? true : false),
          // items: (items ? items : 3),
          lazyLoad: true,
          center: true,
          margin: (margin ? margin : 0),
          //stagePadding: (stagePadding ? stagePadding : 0),
          autoplay: (autoplay ? true : false),
          autoplayTimeout: (autoplayTimeout ? autoplayTimeout : 1000),
          smartSpeed: (smartSpeed ? smartSpeed : 250),
          dots: (dots ? true : false),
          nav: (nav ? true : false),
          navText: ["<div class='btn btn-secondary'><i class='fas fa-arrow-left'></i></div>","<div class='btn btn-secondary'><i class='fas fa-arrow-right'></i></div>"],
          navSpeed: (navSpeed ? true : false),
          responsiveClass: true,
          responsive: {
              0: {
                  items: (xsDevice ? xsDevice : 1),
                  nav: (xsDeviceNav ? true : false),
                  dots: (xsDeviceDots ? true : false),
                  center: true,
              },
              576: {
                  items: (smDevice2 ? smDevice2 : 2),
                  nav: (smDeviceNav2 ? true : false),
                  dots: (smDeviceDots2 ? true : false),
                  center: true,
              },
              768: {
                  items: (smDevice ? smDevice : 3),
                  nav: (smDeviceNav ? true : false),
                  dots: (smDeviceDots ? true : false),
                  center: true,
              },
              992: {
                  items: (mdDevice ? mdDevice : 3),
                  nav: (mdDeviceNav ? true : false),
                  dots: (mdDeviceDots ? true : false),
                  center: true,
              }
          }
      });
  });
    
  // $('.owl-carousel').find('.owl-nav').removeClass('disabled');
  // $('.owl-carousel').on('changed.owl.carousel', function(event) {
  //   $(this).find('.owl-nav').removeClass('disabled');
  // });

  /*-------------------------------------
    Lightbox
    -------------------------------------*/
  $(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
  });
    
});

