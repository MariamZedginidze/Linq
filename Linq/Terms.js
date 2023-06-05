/* animating SVG illustration */
const SVGtl = gsap.timeline({ duration: 1.2 });

/*chat SVG */
const glasses = document.getElementById('terms-glasses');

SVGtl.fromTo(
  glasses,
  {
    rotate: -3,
  },
  { rotate: 0 }
);
