// Renders one entry from LEADER_DATA into #leader-root, based on the
// ?id= query param. One reusable template instead of a separate page
// per team member.
(function () {
  const root = document.getElementById('leader-root');
  const titleEl = document.getElementById('leader-title');
  const socialEl = document.getElementById('leader-social');
  const id = new URLSearchParams(window.location.search).get('id');
  const leader = id && window.LEADER_DATA ? window.LEADER_DATA[id] : null;

  if (!leader) {
    titleEl.textContent = 'Not found';
    root.innerHTML =
      '<p class="page-lead">We couldn\'t find that person. <a href="about.html">Go back to About</a>.</p>';
    return;
  }

  document.title = leader.name + ' — Daira';
  titleEl.textContent = leader.name;

  const listHtml = (items) => '<ul>' + items.map((item) => '<li>' + item + '</li>').join('') + '</ul>';
  const skillsHtml = (items) =>
    '<div class="skills-list">' + items.map((item) => '<span class="skill-pill">' + item + '</span>').join('') + '</div>';

  // A link is only rendered once it's a real URL — a bracketed placeholder
  // like "[Add ... URL]" means it hasn't been filled in yet.
  const isRealLink = (url) => !!url && !url.trim().startsWith('[');

  const socialButtons = [];
  if (isRealLink(leader.instagram)) {
    socialButtons.push(
      '<a class="btn btn-instagram" href="' + leader.instagram + '" target="_blank" rel="noopener">' +
        '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37a4 4 0 1 1-7.914 1.174A4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>' +
        'Instagram' +
      '</a>'
    );
  }
  if (isRealLink(leader.linkedin)) {
    socialButtons.push(
      '<a class="btn btn-instagram" href="' + leader.linkedin + '" target="_blank" rel="noopener">' +
        '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>' +
        'LinkedIn' +
      '</a>'
    );
  }

  root.innerHTML =
    '<div class="leader-detail-header">' +
      '<img src="' + leader.photo + '" alt="' + leader.name + '" class="leader-photo" />' +
      '<div>' +
        '<div class="detail-category">' + leader.role + '</div>' +
        '<p class="detail-description" style="margin-bottom:0;">' + leader.bio + '</p>' +
      '</div>' +
    '</div>' +
    '<h2>Education</h2>' +
    listHtml(leader.education) +
    '<h2>Achievements</h2>' +
    listHtml(leader.achievements) +
    (leader.skills ? '<h2>Skills</h2>' + skillsHtml(leader.skills) : '');

  if (socialButtons.length) {
    socialEl.innerHTML =
      '<p>Want to connect with ' + leader.name + '?</p>' +
      '<div class="leader-social-buttons">' + socialButtons.join('') + '</div>';
  }
})();
