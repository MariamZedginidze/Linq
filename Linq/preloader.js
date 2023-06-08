const tl = gsap.timeline({});
const preloader = document.querySelector('.preloader');
tl.from(preloader, { autoAlpha: 0.5 }, 1);
function redirecting() {
  tl.to(preloader, 1, {
    autoAlpha: 0,
    onComplete: goToNextPage,
  });
}

function goToNextPage() {
  window.location = './Landing.html';
}

redirecting();
