// $('#myCarousel').carousel({
//     interval: 9000
//   })
  
//   $('.carousel .carousel-item').each(function(){
//     var next = $(this).next();
//     if (!next.length) {
//       next = $(this).siblings(':first');
//     }
//     next.clone().appendTo($(this));
    
//     for (var i=0;i<2;i++) {
//       next=next.next();
//       if (!next.length) {
//           next = $(this).siblings(':first');
//         }
      
//       next.clone().appendTo($(this));
//     }
//   });

$('#myCarousel').on('slide.bs.carousel', function (e) {

    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 3;
    var totalItems = $('.carousel-item').length;
    
    if (idx >= totalItems-(itemsPerSlide)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i=0; i<it; i++) {
            // append slides to end
            if (e.direction=="left") {
                $('.carousel-item').eq(i).appendTo('.carousel-inner');
            }
            else {
                $('.carousel-item').eq(0).appendTo('.carousel-inner');
            }
        }
    }
});