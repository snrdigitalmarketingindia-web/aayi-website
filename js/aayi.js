/* Aayi.ai — shared site JS: mobile nav + scroll-reveal animations */
(function () {
  /* Mobile hamburger nav */
  var nav = document.querySelector('.nav');
  var inner = nav && nav.querySelector('.nav-inner');
  var links = nav && nav.querySelector('.nav-links');
  if (nav && inner && links) {
    var burger = document.createElement('button');
    burger.className = 'nav-burger';
    burger.setAttribute('aria-label', 'Open menu');
    burger.setAttribute('aria-expanded', 'false');
    burger.textContent = '☰';
    burger.addEventListener('click', function () {
      var open = nav.classList.toggle('nav-open');
      burger.textContent = open ? '✕' : '☰';
      burger.setAttribute('aria-expanded', String(open));
      burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });
    links.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        nav.classList.remove('nav-open');
        burger.textContent = '☰';
        burger.setAttribute('aria-expanded', 'false');
        burger.setAttribute('aria-label', 'Open menu');
      }
    });
    inner.appendChild(burger);
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
