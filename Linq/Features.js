gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(TextPlugin);

ScrollTrigger.defaults({
  markers: false,
});

const button = document.querySelector('.arrow-btn');
const scrollContainer = document.querySelector('.scroll-container');

const sidebars = gsap.utils.toArray('.sidebars-wrapper');
const indicators = gsap.utils.toArray('.indicator');

let mm = gsap.matchMedia();

mm.add('(min-width: 100px)', () => {
  let height = 100 * sidebars.length;

  const tl = gsap.timeline({
    duration: sidebars.length,
    scrollTrigger: {
      trigger: '.features',
      start: 'top center',
      end: '+=' + height + '%',
      scrub: true,
      id: 'features',
      // markers: true,
      // markers: { startColor: 'white', endColor: 'white', fontSize: '20px' },
    },
  });

  const pinner = gsap.timeline({
    scrollTrigger: {
      trigger: '.sidebars-wrapper',
      // horizontal: 'true',
      start: 'top top',
      end: '+=' + height + '%',
      scrub: true,
      pin: '.features',
      pinSpacing: true,
      id: 'sidebars',
      // markers: true,
      // markers: { startColor: 'green', endColor: 'red', fontSize: '20px' },
    },
  });

  const subHeadings = gsap.timeline({
    scrollTrigger: {
      trigger: '.features',
      start: '85% 90%',
      end: '+=' + 190 + '%',
      scrub: true,
      id: 'headings',
      // markers: true,
      // markers: { startColor: 'white', endColor: 'white', fontSize: '20px' },
    },
  });
  const scrollBtn = gsap.timeline({
    scrollTrigger: {
      trigger: '.features',
      start: 'top 90%',
      end: 'bottom bottom',
      scrub: true,
      id: 'points',
      // markers: true,
    },
  });

  /*dissepearing arrow btn on scroll */
  tl.to('.scroll-container', { autoAlpha: 0 }, 0.5);

  /* subheading animations */
  subHeadings.to('.overlaping-heading', { autoAlpha: 0 });
  subHeadings.to('.overlaping-last-heading', { autoAlpha: 0 });

  /* animation for Desktop Screen Size */
  sidebars.forEach(function (elem, i) {
    gsap.set(elem, { position: 'absolute', top: 0, right: 0, left: 0 });

    tl.from(elem.querySelector('.illustration'), { autoAlpha: 0 }, i);
    tl.from(
      elem.querySelector('article'),
      { autoAlpha: 0, translateY: 160 },
      i
    );
    tl.from(elem.querySelector('.left-sidebar'), { autoAlpha: 0 }, i);
    tl.from(
      elem.querySelector('.right-sidebar'),
      { autoAlpha: 0.0000000001 },
      i
    );

    if (i != sidebars.length - 1) {
      tl.to(
        elem.querySelector('article'),
        { autoAlpha: 0, translateY: -160 },
        i + 0.75
      );
      tl.to(elem.querySelector('.illustration'), { autoAlpha: 0 }, i + 0.75);
    }
    /* indicators */
    tl.to(indicators[i], { backgroundColor: '#FFFFFF', duration: 0.25 }, i);

    if (i != sidebars.length - 1) {
      tl.to(
        indicators[i],
        { backgroundColor: '#adadad', duration: 0.25 },
        i + 0.75
      );
    }
    /*Pagination*/
    let footerPagination = document.getElementById('footerIndex');

    tl.to(elem.querySelector('.right-sidebar'), { autoAlpha: 1 }, i);
    if (i == 1) {
      tl.to(footerPagination, { text: '2', autoAlpha: 1 }, '<');
      console.log(i);
    }
    if (i == 2) {
      tl.to(footerPagination, { text: '3', autoAlpha: 1 }, '<');
    }
  });

  //arrow down button interaction

  button.addEventListener('click', (event) => {});

  const sectionCases = document.querySelector('#right-sidebar-two');
  button.addEventListener('click', () => {
    gsap.to(window, {
      duration: 0.1,
      ease: 'none',
      scrollTo: 1150,
    });

    scrollContainer.style = 'display:none';
  });
  //reverting all the animations/ScrollTriggers...
  // mm.revert();
});

/* 
    Tablet Screen Size Animation
 */
mm.add('(max-width: 868px)', () => {
  // const tlHorizontal = gsap.timeline({
  //   duration: sidebars.length,
  //   scrollTrigger: {
  //     horizontal: 'true',
  //     trigger: '.features',
  //     start: 'left center',
  //     // end: 'right right',
  //     scrub: true,
  //     id: 'features',
  //     markers: true,
  //     markers: { startColor: 'white', endColor: 'white', fontSize: '22px' },
  //   },
  // });
  // const pinnerHorizontall = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: '.sidebars-wrapper',
  //     horizontal: 'true',
  //     start: 'left left',
  //     // end: 'right right',
  //     scrub: true,
  //     pin: '.features',
  //     pinSpacing: true,
  //     id: 'sidebars',
  //     markers: true,
  //     markers: { startColor: 'green', endColor: 'red', fontSize: '20px' },
  //   },
  // });
  // sidebars.forEach(function (elem, i) {
  //   gsap.set(elem, { position: 'absolute', top: 0, right: 0, left: 0 });
  //   tlHorizontal.from(elem.querySelector('.illustration'), { autoAlpha: 0 }, i);
  //   tlHorizontal.from(
  //     elem.querySelector('article'),
  //     { autoAlpha: 0, translateX: 20 },
  //     i
  //   );
  //   tlHorizontal.from(elem.querySelector('.left-sidebar'), { autoAlpha: 0 }, i);
  //   tlHorizontal.from(
  //     elem.querySelector('.right-sidebar'),
  //     { autoAlpha: 0.0000000001 },
  //     i
  //   );
  //   tlHorizontal.to(
  //     indicators[i],
  //     { backgroundColor: '#FFFFFF', duration: 0.25 },
  //     i
  //   );
  //   if (i != sidebars.length - 1) {
  //     tlHorizontal.to(
  //       indicators[i],
  //       { backgroundColor: '#adadad', duration: 0.25 },
  //       i + 0.75
  //     );
  //   }
  // });
});

/* animating SVG illustration */
const firstSVG = gsap.timeline({ duration: 0.5 });
const illustratedBtns = document.getElementById(
  'left-sidebar-illustrated-btns'
);
/* first illustration */
const placeBubble = document.getElementById('placeBubble');
const eventBubble = document.getElementById('eventBubble');
const friendsBubble = document.getElementById('friendsBubble');
const likeBubble = document.getElementById('likeBubble');
const placeStar = document.getElementById('star');
const eventIcon = document.getElementById('event');
const friendsPerson = document.getElementById('person');
const love = document.getElementById('heart');

firstSVG.to(star, { rotate: 360, transformOrigin: 'center' });
firstSVG.to(eventIcon, { rotate: 360, transformOrigin: 'center' });
firstSVG.to(friendsPerson, { scale: 1.2, transformOrigin: 'center' });
firstSVG.to(friendsPerson, { scale: 1, transformOrigin: 'center' });
firstSVG.to(love, { scale: 1.1, transformOrigin: 'center', fill: 'red' });
firstSVG.to(love, { scale: 1, transformOrigin: 'center', fill: 'black' });

/* second illustration */

/* third illustration */
const thirdSVG = gsap.timeline({
  scrollTrigger: {
    trigger: '.sidebars-wrapper',
    start: '190% -30%',
    end: '300' + '%',
    id: 'three',
    pinSpacing: true,
    // markers: true,
  },
});
// const avatarsSVG = document.getElementById('avatar-mobile');
const avatarGirl = document.getElementById('girl');
const linqPerson = document.getElementById('linqPerson');
const xPerson = document.getElementById('xPerson');

thirdSVG.fromTo(
  avatarGirl,
  { scale: 1.2, x: 100, duration: 5, transformOrigin: 'center' },
  { scale: 1, x: 0 }
);
thirdSVG.fromTo(
  linqPerson,
  { x: 0, scale: 1.2, duration: 5, transformOrigin: 'center' },
  { scale: 1, x: 0 },
  '<'
);
thirdSVG.fromTo(
  xPerson,
  { scale: 1.2, x: -100, duration: 5, transformOrigin: 'center' },
  { scale: 1, x: 0 },
  '<'
);
