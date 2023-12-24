// $(document).ready(function () {

//   $('#menu').click(function () {
//     $(this).toggleClass('fa-times');
//     $('header').toggleClass('toggle');
//   });

//   $(window).on('scroll load', function () {

//     $('#menu').removeClass('fa-times');
//     $('header').removeClass('toggle');

//     if ($(window).scrollTop() > 0) {
//       $('.top').show();
//     } else {
//       $('.top').hide();
//     }

//   });
//   // Attach animateCircles to document.onmousemove event
  
//   $(document).on('mousemove', animateCircles);

//   var colors = ['#1abc9c', '#3498db', '#f1c40f'];

//   function animateCircles(event) {
//     var circle = document.createElement("div");
//     circle.setAttribute("class", "circle");
//     document.body.appendChild(circle); // adds function to body

//     // adds motion
//     circle.style.left = event.clientX + 'px';
//     circle.style.top = event.clientY + 'px';

//     // randomize color
//     var color = colors[Math.floor(Math.random() * colors.length)];
//     circle.style.borderColor = color;

//     // adds animation
//     circle.style.transition = "all 0.5s linear 0s";

//     circle.style.left = circle.offsetLeft - 20 + 'px';
//     circle.style.top = circle.offsetTop - 20 + 'px';

//     circle.style.width = "50px";
//     circle.style.height = "50px";
//     circle.style.borderWidth = "5px";
//     circle.style.opacity = 0;
//   }
//   // smooth scrolling 

//   $('a[href*="#"]').on('click', function (e) {

//     e.preventDefault();

//     $('html, body').animate({

//       scrollTop: $($(this).attr('href')).offset().top,

//     },
//       500,
//       'linear'
//     );

//   });



// });


$(document).ready(function () {

  $('#menu').click(function () {
    $(this).toggleClass('fa-times');
    $('header').toggleClass('toggle');
  });

  $(window).on('scroll load', function () {
    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle');

    if ($(window).scrollTop() > 0) {
      $('.top').show();
    } else {
      $('.top').hide();
    }
  });
  var isLandingContainer = false;

  $('#landing-container').mouseenter(function () {
    isLandingContainer = true;
  }).mouseleave(function () {
    isLandingContainer = false;
  });

  // Attach animateCircles to document.mousemove event only if the mouse is within the landing container
  $(document).mousemove(function (event) {
    if (isLandingContainer) {
      animateCircles(event);
    }
  });

  // Attach animateCircles to a specific container with class "mouse-container"
  // $(document).on('mousemove', animateCircles);
  $(window).on('mousemove', animateCircles);
  // $(window).mousemove(function (event) {
  //   animateCircles(event);
  // });

  var colors = ['#1abc9c', '#3498db', '#f1c40f'];

  function animateCircles(event) {
    var circle = document.createElement("div");
    circle.setAttribute("class", "circle");
    document.body.appendChild(circle);

    var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
    // adds motion
    circle.style.left = event.clientX + scrollLeft + 'px';
    circle.style.top = event.clientY + scrollTop + 'px';
    // adds motion
    // circle.style.left = event.clientX + 'px';
    // circle.style.top = event.clientY + 'px';

    // randomize color
    var color = colors[Math.floor(Math.random() * colors.length)];
    circle.style.borderColor = color;

    // adds animation
    circle.style.transition = "all 0.5s linear 0s";

    circle.style.left = circle.offsetLeft - 20 + 'px';
    circle.style.top = circle.offsetTop - 20 + 'px';

  //     var isOverButton = $(document.elementFromPoint(mouseX, mouseY)).is('button, input[type="button"], input[type="submit"], input[type="reset"]');
  
  // if (isOverButton) {
  //   // Do not apply the effect over buttons
  //   return;
  // }
  // if (
  //   $(event.target).closest('button, .no-mouse-effect').length > 0 ||
  //   mouseX < 0 || mouseX >= window.innerWidth ||
  //   mouseY < 0 || mouseY >= window.innerHeight
  // ) {
  //   // Do not apply the effect over the button or elements with the class "no-mouse-effect"
  //   document.body.removeChild(circle); // Remove the circle element
  //   return;
  // }

    circle.style.width = "50px";
    circle.style.height = "50px";
    circle.style.borderWidth = "5px";
    circle.style.opacity = 0;
  }

  // smooth scrolling 
  $('a[href*="#"]').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top,
    },
      500,
      'linear'
    );
  });
});
