// Mobile hamburger menu, same pattern as Panah's. The toggle button is hidden
// by CSS above the breakpoint, so on desktop none of this ever fires.
(function () {
  const BREAKPOINT = 720;
  const toggle = document.getElementById('nav-toggle');
  const header = document.querySelector('header.site');
  if (!toggle || !header) return;

  const setOpen = (open) => {
    header.classList.toggle('nav-open', open);
    toggle.setAttribute('aria-expanded', String(open));
  };

  toggle.addEventListener('click', () => {
    setOpen(!header.classList.contains('nav-open'));
  });

  // Picking a link closes the menu, so it isn't left open on the next page
  // (or when re-tapping the page you're already on).
  header.querySelectorAll('.site-nav a').forEach((link) => {
    link.addEventListener('click', () => setOpen(false));
  });

  // Growing past the breakpoint (rotating a tablet, resizing a window) hides
  // the button, so drop the open state rather than leave a phantom panel.
  window.addEventListener('resize', () => {
    if (window.innerWidth > BREAKPOINT) setOpen(false);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') setOpen(false);
  });
})();
