(function () {
  'use strict';

  var toggle = document.querySelector('.nav-toggle');
  var header = document.querySelector('.site-header');

  if (!toggle || !header) return;

  toggle.addEventListener('click', function () {
    var isOpen = header.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.setAttribute('aria-label',
      isOpen ? 'Close navigation menu' : 'Open navigation menu'
    );
  });

  // Close mobile menu when any nav anchor link is clicked
  var navLinks = document.querySelectorAll('#main-nav a[href^="#"]');
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      header.classList.remove('nav-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open navigation menu');
    });
  });
})();

// Initialize AOS (Animate On Scroll) -- scroll-reveal animations
// Settings per D-07: duration 600ms, play once only, trigger 80px before viewport edge
AOS.init({ duration: 600, once: true, offset: 80 });
