$(function () {
  var docElem = document.documentElement,
    header = $('.navbar-fixed-top'),
    didScroll = false,
    changeHeaderOn = 240;

  $('a.page-scroll').bind('click', function (ev) {
    var hash = this.hash;
    $('html, body').stop().animate({
      scrollTop: $(hash).offset().top
    }, 1500, 'easeInOutExpo');
    ev.preventDefault();
  });

  // Closes the Responsive Menu on Menu Item Click
  $('.navbar-collapse ul li a').click(function () {
    $('.navbar-toggle:visible').click();
  });

  window.addEventListener('scroll', function (ev) {
    if (!didScroll) {
      didScroll = true;
      setTimeout(function () {
        var sy = window.pageYOffset || docElem.scrollTop;

        if (sy >= changeHeaderOn) {
          header.addClass('navbar-shrink');
        } else {
          header.removeClass('navbar-shrink');
        }

        didScroll = false;
      }, 250);
    }
  }, false);
});