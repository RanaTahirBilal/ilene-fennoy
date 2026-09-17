(function () {
  var drawer = document.getElementById('if-drawer');
  var burger = document.getElementById('if-burger');
  var closeBtn = document.getElementById('if-drawer-close');
  function setOpen(open) {
    drawer.classList.toggle('is-open', open);
    drawer.setAttribute('aria-hidden', open ? 'false' : 'true');
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    if (open) { closeBtn.focus(); } else { burger.focus(); }
  }
  if (drawer && burger && closeBtn) {
    burger.addEventListener('click', function () { setOpen(true); });
    closeBtn.addEventListener('click', function () { setOpen(false); });
    drawer.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { drawer.classList.remove('is-open'); drawer.setAttribute('aria-hidden', 'true'); burger.setAttribute('aria-expanded', 'false'); });
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && drawer.classList.contains('is-open')) { setOpen(false); }
    });
  }
  var y = document.getElementById('if-year');
  if (y) { y.textContent = new Date().getFullYear(); }
})();
