// Renders every entry belonging to one category into #category-root, based
// on the ?category= slug. One reusable template instead of five near-
// identical static pages.
(function () {
  const root = document.getElementById('category-root');
  const titleEl = document.getElementById('category-title');
  const slug = new URLSearchParams(window.location.search).get('category');
  const categoryLabel = slug && window.HELPLINE_CATEGORIES ? window.HELPLINE_CATEGORIES[slug] : null;

  if (!categoryLabel || !window.HELPLINE_DATA) {
    titleEl.textContent = 'Not found';
    root.innerHTML =
      '<p class="page-lead">We couldn\'t find that category. <a href="helplines.html">Go back to the full list</a>.</p>';
    return;
  }

  document.title = categoryLabel + ' — Daira';
  titleEl.textContent = categoryLabel;

  const entries = Object.keys(window.HELPLINE_DATA)
    .map((id) => Object.assign({ id: id }, window.HELPLINE_DATA[id]))
    .filter((entry) => entry.category === slug);

  const entryHtml = entries.map((entry) => {
    const contactHtml = entry.link
      ? '<a class="btn detail-contact-btn" href="' + entry.link.href + '" target="_blank" rel="noopener">' + entry.link.label + '</a>'
      : '<a class="btn detail-contact-btn" href="tel:' + entry.phone.replace(/[^0-9+]/g, '') + '">Call ' + entry.phone + '</a>';

    const mapHtml = entry.mapQuery
      ? '<div class="help-item-map">' +
          '<iframe src="https://www.google.com/maps?q=' + encodeURIComponent(entry.mapQuery) + '&output=embed" ' +
          'width="100%" height="240" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>' +
        '</div>'
      : '';

    return (
      '<div class="category-entry">' +
        '<h2>' + entry.name + (entry.phone ? ' — ' + entry.phone : '') + '</h2>' +
        (entry.hint ? '<p class="page-lead">' + entry.hint + '</p>' : '') +
        '<p class="detail-description">' + entry.description + '</p>' +
        contactHtml +
        mapHtml +
      '</div>'
    );
  }).join('');

  root.innerHTML = entryHtml;
})();
