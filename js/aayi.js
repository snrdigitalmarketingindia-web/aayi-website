/* Aayi.ai — shared site JS: mobile nav + scroll-reveal animations */
(function () {
  /* Mobile hamburger nav */
  var nav = document.querySelector('.nav');
  var inner = nav && nav.querySelector('.nav-inner');
  var links = nav && nav.querySelector('.nav-links');
  if (nav && inner && links) {
    var SVG_MENU = '<svg width="20" height="14" viewBox="0 0 20 14" fill="none" aria-hidden="true"><rect y="0"    width="20" height="2.5" rx="1.25" fill="currentColor"/><rect y="5.75" width="20" height="2.5" rx="1.25" fill="currentColor"/><rect y="11.5" width="20" height="2.5" rx="1.25" fill="currentColor"/></svg>';
    var SVG_CLOSE = '<svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true"><line x1="1.5" y1="1.5" x2="16.5" y2="16.5" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/><line x1="16.5" y1="1.5" x2="1.5" y2="16.5" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/></svg>';
    var burger = document.createElement('button');
    burger.className = 'nav-burger';
    burger.setAttribute('aria-label', 'Open menu');
    burger.setAttribute('aria-expanded', 'false');
    burger.innerHTML = SVG_MENU;
    burger.addEventListener('click', function () {
      var open = nav.classList.toggle('nav-open');
      burger.innerHTML = open ? SVG_CLOSE : SVG_MENU;
      burger.setAttribute('aria-expanded', String(open));
      burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });
    links.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        nav.classList.remove('nav-open');
        burger.innerHTML = SVG_MENU;
        burger.setAttribute('aria-expanded', 'false');
        burger.setAttribute('aria-label', 'Open menu');
      }
    });
    var navTop = nav.querySelector('.nav-top') || inner;
    navTop.appendChild(burger);
  }

  /* Scroll-reveal */
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced || !('IntersectionObserver' in window)) return;

  document.documentElement.classList.add('js-anim');

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry, i) {
      if (entry.isIntersecting) {
        setTimeout(function () { entry.target.classList.add('visible'); }, i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -5% 0px' });

  document.querySelectorAll('.animate-on-scroll').forEach(function (el) {
    observer.observe(el);
  });
})();
