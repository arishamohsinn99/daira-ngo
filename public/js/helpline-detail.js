// Renders one entry from HELPLINE_DATA into #detail-root, based on the
// ?id= query param. Keeps helpline-detail.html a single reusable template
// instead of ten near-identical static pages.
(function () {
  const root = document.getElementById('detail-root');
  const titleEl = document.getElementById('detail-title');
  const categoryEl = document.getElementById('detail-category');
  const id = new URLSearchParams(window.location.search).get('id');
  const entry = id && window.HELPLINE_DATA ? window.HELPLINE_DATA[id] : null;

  if (!entry) {
    categoryEl.remove();
    titleEl.textContent = 'Not found';
    root.innerHTML =
      '<p class="page-lead">We couldn\'t find that helpline. <a href="helplines.html">Go back to the full list</a>.</p>';
    return;
  }

  document.title = entry.name + ' — Daira';

  const contactHtml = entry.link
    ? '<a class="btn detail-contact-btn" href="' + entry.link.href + '" target="_blank" rel="noopener">' + entry.link.label + '</a>'
    : '<a class="btn detail-contact-btn" href="tel:' + entry.phone.replace(/[^0-9+]/g, '') + '">Call ' + entry.phone + '</a>';

  const mapHtml = entry.mapQuery
    ? '<div class="help-item-map">' +
        '<iframe src="https://www.google.com/maps?q=' + encodeURIComponent(entry.mapQuery) + '&output=embed" ' +
        'width="100%" height="280" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>' +
      '</div>'
    : '';

  const categoryLabel = (window.HELPLINE_CATEGORIES && window.HELPLINE_CATEGORIES[entry.category]) || entry.category;
  categoryEl.textContent = categoryLabel;
  titleEl.textContent = entry.name;

  root.innerHTML =
    (entry.hint ? '<p class="page-lead">' + entry.hint + '</p>' : '') +
    '<p class="detail-description">' + entry.description + '</p>' +
    contactHtml +
    mapHtml;
})();
