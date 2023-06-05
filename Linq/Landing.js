const form = document.querySelector('form');
const input = document.querySelector('input');
const btn = document.querySelector('.input-btn');

const screenSize = document.documentElement.clientWidth || window.innerWidth;

var tl = gsap.timeline({
  duration: 1,
});

// changing color of the input on focus
input.addEventListener('focus', function (event) {
  tl.to(form.querySelector('input'), { border: '#000000 1px solid' });
});
//changing color of the button on hover
function validateEmail(input) {
  const re = /(.+)@(.+){2,}\.(.+){2,}/;
  return re.test(input);
}
input.addEventListener('keyup', function (e) {
  if (e.target.value === '') {
    return;
  }

  btn.addEventListener('mouseover', (event) => {
    if (validateEmail(e.target.value)) {
      tl.to(form.querySelector('button'), {
        backgroundColor: '#CAF450',
        color: '#000000',
        duration: 0.2,
      });
    } else {
      tl.to(form.querySelector('button'), {
        backgroundColor: '#000000',
        color: '#ffffff',
        duration: 0.2,
      });
    }
  });
});

// changing button innerhtml
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const emailInput = input.value;

  if (screenSize <= 375) {
    tl.to(form.querySelector('.input-btn'), { innerHTML: 'Get' }, '<');

    if (/(.+)@(.+){2,}\.(.+){2,}/.test(emailInput)) {
      gsap.set('.mobile-thanks', { display: 'flex' });
      tl.to(form.querySelector('input'), {
        border: '#00000014 1px solid',
        duration: 0.2,
      });
      tl.to(
        form.querySelector('button'),
        { backgroundColor: '#EBEBEA', duration: 0.2 },
        '<'
      );
      tl.to(
        form.querySelector('button'),
        { innerHTML: '👍', duration: 0.2 },
        '<'
      );

      tl.to(
        form.querySelector('button'),
        {
          backgroundColor: '#000000',
          color: '#ffffff',
          innerHTML: 'Get',
        },
        '<'
      );
    } else {
      tl.to(
        form.querySelector('input'),
        { border: '#FF647C 1px solid', ease: 'none', duration: 0.2 },
        '<'
      );
      gsap.set('.mobile-thanks', { display: 'none' });
    }
  } else if (/(.+)@(.+){2,}\.(.+){2,}/.test(emailInput)) {
    tl.to(form.querySelector('input'), { border: '#00000014 1px solid' });
    tl.to(
      form.querySelector('button'),
      { backgroundColor: '#EBEBEA', duration: 0.001 },
      '<'
    );
    tl.to(
      form.querySelector('button'),
      { innerHTML: '👍 Thank you!', color: '#000000' },
      '<'
    );
    tl.to(
      form.querySelector('button'),
      {
        backgroundColor: '#000000',
        color: '#ffffff',
        innerHTML: 'Get Early Access',
      },
      '>1'
    );
  } else {
    tl.to(
      form.querySelector('input'),
      { border: '#FF647C 1px solid', ease: 'none', duration: 0.2 },
      '<'
    );
  }
});
if (screenSize <= 375) {
  tl.to(form.querySelector('.input-btn'), { innerHTML: 'Get' }, '<');
} else {
  tl.to(
    form.querySelector('.input-btn'),
    { innerHTML: 'Get Early Access' },
    '<'
  );
}

//changing button innerhtml based on screensize
$(document).load($(window).bind('resize', listenWidth));

function listenWidth(e) {
  if ($(window).width() <= 375) {
    btn.innerHTML = 'Get';
  } else {
    btn.innerHTML = 'Get Early Access';
  }
}

/* animating SVG illustration */
const SVGtl = gsap.timeline({});
const mobileSVG = document.getElementsByClassName('mobile');

/*chat SVG */
const mobileChat = document.getElementById('chat');
const chatBubble = document.getElementById('chatBubble');
const chatBubbleOne = document.getElementById('chatBubbleOne');
const chatBubbleTwo = document.getElementById('chatBubbleTwo');
const chatBubbleThree = document.getElementById('chatBubbleThree');
/* */
const mobileCoffee = document.getElementById('coffee');
const mobileHey = document.getElementById('heyThere');
const mobilePalms = document.getElementById('palms');
const mobileLinq = document.getElementById('linq');

gsap.fromTo(
  mobileLinq,
  {
    autoAlpha: 0.2,
    transformOrigin: 'center',
    scale: 1.3,
    duration: 1,
  },
  { scale: 1, autoAlpha: 1 }
);
SVGtl.fromTo(
  mobileChat,
  {
    autoAlpha: 0,
  },
  { autoAlpha: 1 },
  0.5
);

SVGtl.fromTo(
  mobileCoffee,
  {
    autoAlpha: 0,
  },
  { autoAlpha: 1 }
);
SVGtl.fromTo(
  mobileHey,
  {
    autoAlpha: 0,
  },
  { autoAlpha: 1 }
);
SVGtl.fromTo(
  mobilePalms,
  {
    autoAlpha: 0,
  },
  { autoAlpha: 1 }
);
