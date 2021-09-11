$(document).ready(function () {
  let slider = tns({
    container: ".my-slider",
    items: 1,
    slideBy: "page",
    autoplay: true,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 2,
      },
      768: {
        items: 3,
      },
    },
    controlsContainer: "#controls",
    prevButton: ".previous",
    nextButton: ".next",
    navPosition: "bottom",
    mouseDrag: true,
  });

  $(".card-shadow").hover(
    function () {
      $(this).addClass("shadow-lg").css("cursor", "pointer");
    },
    function () {
      $(this).removeClass("shadow-lg");
    }
  );

  /*-------------------------------------
    OwlCarousel
    -------------------------------------*/
  $(".rs-carousel").each(function () {
    var owlCarousel = $(this),
      loop = owlCarousel.data("loop"),
      items = owlCarousel.data("items"),
      margin = owlCarousel.data("margin"),
      stagePadding = owlCarousel.data("stage-padding"),
      autoplay = owlCarousel.data("autoplay"),
      autoplayTimeout = owlCarousel.data("autoplay-timeout"),
      smartSpeed = owlCarousel.data("smart-speed"),
      dots = owlCarousel.data("dots"),
      nav = owlCarousel.data("nav"),
      navSpeed = owlCarousel.data("nav-speed"),
      xsDevice = owlCarousel.data("mobile-device"),
      xsDeviceNav = owlCarousel.data("mobile-device-nav"),
      xsDeviceDots = owlCarousel.data("mobile-device-dots"),
      smDevice = owlCarousel.data("ipad-device"),
      smDeviceNav = owlCarousel.data("ipad-device-nav"),
      smDeviceDots = owlCarousel.data("ipad-device-dots"),
      smDevice2 = owlCarousel.data("ipad-device2"),
      smDeviceNav2 = owlCarousel.data("ipad-device-nav2"),
      smDeviceDots2 = owlCarousel.data("ipad-device-dots2"),
      mdDevice = owlCarousel.data("md-device"),
      centerMode = owlCarousel.data("center-mode"),
      mdDeviceNav = owlCarousel.data("md-device-nav"),
      mdDeviceDots = owlCarousel.data("md-device-dots");
    owlCarousel.owlCarousel({
      loop: loop ? true : false,
      items: items ? items : 3,
      lazyLoad: true,
      center: centerMode ? true : false,
      margin: margin ? margin : 0,
      //stagePadding: (stagePadding ? stagePadding : 0),
      autoplay: autoplay ? true : false,
      autoplayTimeout: autoplayTimeout ? autoplayTimeout : 1000,
      smartSpeed: smartSpeed ? smartSpeed : 250,
      dots: dots ? true : false,
      nav: nav ? true : false,
      navText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>",
      ],
      navSpeed: navSpeed ? true : false,
      responsiveClass: true,
      responsive: {
        0: {
          items: xsDevice ? xsDevice : 1,
          nav: xsDeviceNav ? true : false,
          dots: xsDeviceDots ? true : false,
          center: false,
        },
        576: {
          items: smDevice2 ? smDevice2 : 2,
          nav: smDeviceNav2 ? true : false,
          dots: smDeviceDots2 ? true : false,
          center: false,
        },
        768: {
          items: smDevice ? smDevice : 3,
          nav: smDeviceNav ? true : false,
          dots: smDeviceDots ? true : false,
          center: false,
        },
        992: {
          items: mdDevice ? mdDevice : 4,
          nav: mdDeviceNav ? true : false,
          dots: mdDeviceDots ? true : false,
        },
      },
    });
  });
});
