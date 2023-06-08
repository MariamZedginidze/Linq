gsap.registerPlugin(MotionPathPlugin);

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

// Query DOM Elements
const path = document.querySelector('#road-path');
const scooter = document.querySelector('#scooter');
const asterisk = document.querySelector('#asterisk');
const frontWheel = document.querySelector('#front-wheel');
const backWheel = document.querySelector('#back-wheel');

gsap.to(scooter, {
  duration: 2,
  ease: 'power1.inOut',
  motionPath: {
    path: path,
    align: path,
    autoRotate: true,
    alignOrigin: [0, 0.6],
    toggle: true,
  },
});
gsap.to(
  frontWheel,
  {
    rotate: 360,
    duration: 0.6,
    transformOrigin: 'center center',
    repeat: 1,
  },
  '<'
);
gsap.to(
  backWheel,
  {
    rotate: 360,
    duration: 0.6,
    transformOrigin: 'center center',
    repeat: 1,
  },
  '<'
);
gsap.to(
  asterisk,
  {
    rotate: 360,
    transformOrigin: 'center center',
    autoAlpha: 0,
  },
  ' >0.5'
);
