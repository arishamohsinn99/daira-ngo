// Fades/slides .reveal elements in as they enter the viewport. Mirrors the
// same pattern Panah uses — each element only needs the class, this
// handles the rest via IntersectionObserver so it's not doing scroll-event
// math on every frame.
(function () {
  const targets = document.querySelectorAll('.reveal');
  if (!targets.length) return;

  if (!('IntersectionObserver' in window)) {
    // No observer support — just show everything immediately rather than
    // leaving it permanently hidden.
    targets.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  targets.forEach((el) => observer.observe(el));
})();
