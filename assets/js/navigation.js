(() => {
  const help = document.getElementById('keyboard-help');
  const toggle = document.getElementById('keyboard-toggle');
  if (!help || !toggle) return;

  const preference = 'vim-navigation';
  let enabled = true;
  let lastG = 0;
  let returnFocus = null;
  try { enabled = localStorage.getItem(preference) !== 'off'; } catch { /* Storage is optional. */ }

  function updateToggle() {
    toggle.textContent = `Vim keys: ${enabled ? 'on' : 'off'}`;
    toggle.setAttribute('aria-pressed', String(enabled));
  }

  function closeHelp() {
    help.open = false;
    if (returnFocus?.isConnected) returnFocus.focus({ preventScroll: true });
    returnFocus = null;
  }

  function moveLink(direction) {
    const links = [...document.querySelectorAll('a[href]')].filter(link =>
      !link.classList.contains('skip-link') && link.getClientRects().length > 0
    );
    if (!links.length) return;
    const current = links.indexOf(document.activeElement);
    let next;
    if (current >= 0) {
      next = Math.max(0, Math.min(links.length - 1, current + direction));
    } else {
      const visible = links.filter(link => {
        const bounds = link.getBoundingClientRect();
        return bounds.bottom > 0 && bounds.top < innerHeight;
      });
      const candidates = visible.length ? visible : links;
      next = links.indexOf(direction > 0 ? candidates[0] : candidates.at(-1));
    }
    links[next].focus({ preventScroll: true });
    links[next].scrollIntoView({ block: 'nearest', behavior: 'instant' });
  }

  help.hidden = false;
  updateToggle();
  toggle.addEventListener('click', () => {
    enabled = !enabled;
    lastG = 0;
    updateToggle();
    try { localStorage.setItem(preference, enabled ? 'on' : 'off'); } catch { /* Storage is optional. */ }
  });

  document.addEventListener('keydown', event => {
    if (event.defaultPrevented || event.isComposing || event.ctrlKey || event.metaKey || event.altKey) {
      lastG = 0;
      return;
    }
    if (event.target.closest('input, textarea, select, [contenteditable]:not([contenteditable="false"]), [role="textbox"]')) {
      lastG = 0;
      return;
    }
    if (event.key === 'Escape') {
      lastG = 0;
      if (help.open) { event.preventDefault(); closeHelp(); }
      return;
    }
    if (!enabled || window.getSelection()?.toString()) return;

    if (event.key === '?') {
      event.preventDefault();
      lastG = 0;
      if (help.open) closeHelp();
      else {
        returnFocus = document.activeElement;
        help.open = true;
        help.querySelector('summary').focus();
      }
      return;
    }

    if (event.key === 'g') {
      event.preventDefault();
      if (event.repeat) return;
      const now = Date.now();
      if (lastG && now - lastG < 700) {
        document.getElementById('top').focus({ preventScroll: true });
        window.scrollTo({ top: 0, behavior: 'instant' });
        lastG = 0;
      } else lastG = now;
      return;
    }
    lastG = 0;
    if (!['j', 'k', 'G', 'h', 'l'].includes(event.key)) return;
    event.preventDefault();
    if (event.key === 'j' || event.key === 'k') {
      window.scrollBy({ top: event.key === 'j' ? 80 : -80, behavior: 'instant' });
    } else if (event.key === 'G') {
      window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'instant' });
    } else moveLink(event.key === 'l' ? 1 : -1);
  });
})();
