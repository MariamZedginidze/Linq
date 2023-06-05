const tl = gsap.timeline({});

$(function () {
  $('.acc_heading').on('click', function (e) {
    e.preventDefault();

    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      $(this).next().stop().slideUp(300);
      tl.to(
        $(this),
        { borderBottom: '1px solid #e5e5e5', duration: '0.001', ease: 'none' },
        '>0.3'
      );
    } else {
      $(this).addClass('active');
      $(this).next().stop().slideDown(300);
      $(this).css('border-bottom', 'none');
    }
  });
});

/* SVG animation */
const timeline = anime.timeline({
  easing: 'easeInOutSine',
  duration: 1000,
});

const path = anime.path('#stroke');

timeline.add({
  transformOrigin: 'left left',
  targets: '#scooter',
  translateX: path('x'),
  translateY: path('y'),
  rotate: path('angle'),
});
