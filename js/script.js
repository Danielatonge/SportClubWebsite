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

$('#myCarousel').carousel({
    interval: 9000
})

$('.carousel .carousel-item').each(function() {
    var minPerSlide = 3;
    var next = $(this).next();
    if (!next.length) {
        next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));

    for (var i = 0; i < minPerSlide; i++) {
        next = next.next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }

        next.children(':first-child').clone().appendTo($(this));
    }
});


// <!--modal-->
// $(document).ready(function() {
//     $("#MyModal").modal();
//     $('#myModal').on('shown.bs.modal', function() {
//        $('#myInput').focus();
//     });
//  });