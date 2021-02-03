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

// Get the navbar
var navbar = $(".navbar")[0];

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}



$(document).ready(function() {
  // executes when HTML-Document is loaded and DOM is ready
  console.log("document is ready");
  // When the user scrolls the page, execute myFunction
  window.onscroll = function() {myFunction()};
   
  $( ".card-shadow" ).hover(
     function() {
       $(this).addClass('shadow-lg').css('cursor', 'pointer'); 
     }, function() {
       $(this).removeClass('shadow-lg');
     }
   );
     
   // document ready  
   });

