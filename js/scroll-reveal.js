/* =====================================================
   Scroll Reveal — Macy Brown Portfolio

   HOW IT WORKS (for your presentation):
   IntersectionObserver watches every element with the
   .reveal class. When at least 18% of an element scrolls
   into the viewport, the observer fires a callback that
   adds .is-visible — which triggers the CSS transition
   defined in style.css (opacity + translateY). Once an
   element has revealed itself, it's unobserved so the
   animation only plays once per page load.

   Respects prefers-reduced-motion: if the visitor's OS
   is set to reduce motion, elements are shown immediately
   with no observer running at all.
   ===================================================== */

(function () {
  var prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  var revealEls = document.querySelectorAll('.reveal');

  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    revealEls.forEach(function (el) {
      el.classList.add('is-visible');
    });
    return;
  }

  var observer = new IntersectionObserver(
    function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 }
  );

  revealEls.forEach(function (el) {
    observer.observe(el);
  });
})();
