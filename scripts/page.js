$(function () {
  $('a.page-scroll').bind('click', function (ev) {
    var hash = this.hash;
    $('html, body').stop().animate({
      scrollTop: $(hash).offset().top
    }, 1500, 'easeInOutExpo');
    ev.preventDefault();
  });

  // Highlight the top nav as scrolling occurs
  $('body').scrollspy({
    target: '.navbar-fixed-top'
  });

  // Closes the Responsive Menu on Menu Item Click
  $('.navbar-collapse ul li a').click(function () {
    $('.navbar-toggle:visible').click();
  });
});