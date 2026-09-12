// Tab switching between "Join the team" / "Support financially", plus
// building a clean mailto: link from the join form's fields — this site
// has no backend, so the visitor's own email app does the sending.
(function () {
  const tabs = document.querySelectorAll('.involved-tab');
  const panels = {
    join: document.getElementById('panel-join'),
    donate: document.getElementById('panel-donate'),
  };

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach((t) => t.classList.remove('is-active'));
      tab.classList.add('is-active');
      Object.keys(panels).forEach((key) => {
        panels[key].hidden = key !== tab.dataset.tab;
      });
    });
  });

  const form = document.getElementById('join-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const name = data.get('name') || '';
      const email = data.get('email') || '';
      const background = data.get('background') || '';
      const interest = data.get('interest') || '';
      const message = data.get('message') || '';

      const body =
        'Name: ' + name + '\n' +
        'Email: ' + email + '\n' +
        'University / background: ' + background + '\n' +
        'Interested in: ' + interest + '\n\n' +
        'Message:\n' + message;

      const mailto =
        'mailto:daira.ngo.info@gmail.com' +
        '?subject=' + encodeURIComponent('Get Involved — Join the Team (' + name + ')') +
        '&body=' + encodeURIComponent(body);

      window.location.href = mailto;
    });
  }

  const shoutoutChoice = document.getElementById('shoutout-choice');
  const shoutoutYes = document.getElementById('shoutout-yes');
  const shoutoutNo = document.getElementById('shoutout-no');
  const shoutoutForm = document.getElementById('shoutout-form');
  const shoutoutNoMsg = document.getElementById('shoutout-no-msg');

  if (shoutoutYes) {
    shoutoutYes.addEventListener('click', () => {
      shoutoutChoice.hidden = true;
      shoutoutForm.hidden = false;
      shoutoutNoMsg.hidden = true;
    });
  }
  if (shoutoutNo) {
    shoutoutNo.addEventListener('click', () => {
      shoutoutChoice.hidden = true;
      shoutoutForm.hidden = true;
      shoutoutNoMsg.hidden = false;
    });
  }

  if (shoutoutForm) {
    shoutoutForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = new FormData(shoutoutForm);
      const name = data.get('shoutout-name') || '';
      const insta = data.get('shoutout-insta') || '';

      const body =
        'Name / credit: ' + name + '\n' +
        'Instagram handle: ' + insta + '\n\n' +
        "Don't forget to attach your payment screenshot before sending this email!";

      const mailto =
        'mailto:daira.ngo.info@gmail.com' +
        '?subject=' + encodeURIComponent('Donation shoutout' + (name ? ' — ' + name : '')) +
        '&body=' + encodeURIComponent(body);

      window.location.href = mailto;
    });
  }
})();
