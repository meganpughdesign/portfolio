$(document).ready(function(){
    
    $(window).on('scroll',function(){
    var scroll = $(window).scrollTop();
        if(scroll>=50){
            $(".sticky").addClass("stickyadd");
        }else{
            $(".sticky").removeClass("stickyadd");

        }
    })

    var typed = new Typed(".element",{
        strings: ["Senior Art Director.","proficient, experienced designer.","photo / video producer + director.","motion graphic artist."," photo grapher.","coder / budding developer."],
        smartBackspace:true,
        typeSpeed:150,
        backSpeed:25,
        loop:true,
        loopCount:Infinity,
        startDelay:2000,
    });

// Progress Bars
var waypoint = new Waypoint({
  element: document.getElementById('exp-id'),
  handler: function() {
    var p = document.querySelectorAll('.progress-bar');
    p[0].setAttribute("stye", "width:100%;transition:1s all ease-in-out")
    p[1].setAttribute("stye", "width:95%;transition:1.25s all ease-in-out")
    p[2].setAttribute("stye", "width:85%;transition:1.5s all ease-in-out")
    p[3].setAttribute("stye", "width:70%;transition:1.75s all ease-in-out")
    p[4].setAttribute("stye", "width:60%;transition:2s all ease-in-out")
    p[5].setAttribute("stye", "width:55%;transition:2.25s all ease-in-out")
    p[6].setAttribute("stye", "width:45%;transition:2.5s all ease-in-out")
    p[7].setAttribute("stye", "width:35%;transition:2.75s all ease-in-out")
  },
  offset:'90%'
});



// Filterizr
var filterizd = $('.filter-container').filterizr({
    animationDuration: 0.5,
});


// Owl Carousel 
$(".owl-carousel").owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:5000,
    items:1,
    margin:10,
});


});



// Slider
var $slide = $('.slide'),
    $slideGroup = $('.slide-group'),
    $bullet = $('.bullet');

var slidesTotal = ($slide.length - 3),
    current = 0,
    isAutoSliding = true;

$bullet.first().addClass('current');

var clickSlide = function() {
  //stop auto sliding
  window.clearInterval(autoSlide);
  isAutoSliding = false;

  var slideIndex = $bullet.index($(this));

  updateIndex(slideIndex);
};

var updateIndex = function(currentSlide) {
  if(isAutoSliding) {
    if(current === slidesTotal) {
      current = 0;
    } else {
      current++;
    }
  } else {
      current = currentSlide;
  }

  $bullet.removeClass('current');
  $bullet.eq(current).addClass('current');

  transition(current);
};

var transition = function(slidePosition) {
    $slideGroup.animate({
      'top': '-' + slidePosition + '00%'
    });
};

$bullet.on( 'click', clickSlide);

var autoSlide = window.setInterval(updateIndex, 3000);