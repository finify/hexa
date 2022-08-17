/*******************************************
    File Name: custom.js
/*******************************************/

"use strict";

/**== wow animation ==**/
new WOW().init();


/**== loader js ==**/
// $("body").prepend('<div id="preloader"><div class="spinner-sm spinner-sm-1" id="status"> </div></div>');
// $(window).on('load', function() { // makes sure the whole site is loaded 
//   $('#status').fadeOut(); // will first fade out the loading animation 
//   $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
//   $('body').delay(350).css({
//     'overflow': 'visible'
//   });
// })


/**== mega menu ==**/
$(document).ready(function() {
  "use strict";
  $('.menu > ul > li:has( > ul)').addClass('menu-dropdown-icon');
  $('.menu > ul > li > ul:not(:has(ul))').addClass('normal-sub');
  $(".menu > ul").before("<a href=\"#\" class=\"menu-mobile\">&nbsp;</a>");
  $(".menu > ul").before("<a href=\"signup\" class=\"badge badge-success badge-lg px-5 py-3 float-right align-middle menu-mobile1\">Signup</a>");
  $(".menu > ul > li").hover(function(e) {
    if ($(window).width() > 991) {
      $(this).children("ul").stop(true, false).fadeToggle(150);
      e.preventDefault();
    }
  });
  $(".menu > ul > li").on('click', function() {
    if ($(window).width() <= 991) {
      $(this).children("ul").fadeToggle(150);
    }
  });
  $(".menu-mobile").on('click', function(e) {
    $(".menu > ul").toggleClass('show-on-mobile');
    e.preventDefault();
  });
});
$(window).resize(function() {
  $(".menu > ul > li").children("ul").hide();
  $(".menu > ul").removeClass('show-on-mobile');
});


/**== video icon changes js ==**/
$('.video').parent().click(function() {
  if ($(this).children(".video").get(0).paused) {
    $(this).children(".video").get(0).play();
    $(this).children(".playpause").fadeOut();
  } else {
    $(this).children(".video").get(0).pause();
    $(this).children(".playpause").fadeIn();
  }
});


/**== CarouselTicker ==**/
var scroller = $('#logo-ticker div.footer-logo-slider');
var scrollerContent = scroller.children('ul');
scrollerContent.children().clone().appendTo(scrollerContent);
var sum_width_of_elem = 0;
scrollerContent.children().each(function() {
  var $this = $(this);
  $this.css('left', sum_width_of_elem);
  sum_width_of_elem += $this.outerWidth(true);
});

var fullW = sum_width_of_elem / 2;
var viewportW = scroller.width();

// Scrolling speed management
var controller = {
  curSpeed: 0,
  fullSpeed: 2
};
var $controller = $(controller);
var contSpeed = function(newSpeed) {
  var duration = 600;
  $controller.stop(false).animate({
    curSpeed: newSpeed
  });
};

// Pause on hover
scroller.hover(function() {
  contSpeed(0);
}, function() {
  contSpeed(controller.fullSpeed);
});

// Scrolling management; start the automatic scrolling//
var doScroll = function() {
  var curX = scroller.scrollLeft();
  var newX = curX + controller.curSpeed;
  if (newX > fullW * 2 - viewportW)
    newX -= fullW;
  scroller.scrollLeft(newX);
};
setInterval(doScroll, 20);
contSpeed(controller.fullSpeed);

/**== market widget ==**/
(function(b, i, t, C, O, I, N) {
  window.addEventListener('load', function() {
    if (b.getElementById(C)) return;
    I = b.createElement(i), N = b.getElementsByTagName(i)[0];
    I.src = t;
    I.id = C;
    N.parentNode.insertBefore(I, N);
  }, false)
})(document, 'script', 'https://widgets.bitcoin.com/widget.js', 'btcwdgt');


/**== search bar ==**/
function searchToggle(obj, evt) {
  var container = $(obj).closest('.search-wrapper');
  if (!container.hasClass('active')) {
    container.addClass('active');
    evt.preventDefault();
  } else if (container.hasClass('active') && $(obj).closest('.input-holder').length == 0) {
    container.removeClass('active');
    // clear input
    container.find('.search-input').val('');
  }
}

/**== graph section wallet ==**/
new TradingView.widget({
  "width": "100%",
  "height": window.innerHeight,
  "symbol": "COINBASE:BTCUSD",
  "interval": "1",
  "timezone": "Etc/UTC",
  "theme": "dark",
  "style": "1",
  "locale": "en",
  "toolbar_bg": "#f1f3f6",
  "enable_publishing": false,
  "hide_side_toolbar": false,
  "allow_symbol_change": true,
  "details": true,
  "studies": [
    "BB@tv-basicstudies",
    "Volume@tv-basicstudies",
    "VWAP@tv-basicstudies"
  ],
  "container_id": "tradingview_0b60e"
});


/**== testimonial slider js ==**/
$(document).ready(function() {
  $(".testimonial .indicators li").click(function() {
    var i = $(this).index();
    var targetElement = $(".testimonial .tabs li");
    targetElement.eq(i).addClass('active');
    targetElement.not(targetElement[i]).removeClass('active');
  });
  $(".testimonial .tabs li").click(function() {
    var targetElement = $(".testimonial .tabs li");
    targetElement.addClass('active');
    targetElement.not($(this)).removeClass('active');
  });
});
$(document).ready(function() {
  $(".slider .swiper-pagination span").each(function(i) {
    $(this).text(i + 1).prepend("0");
  });
});


