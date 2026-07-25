const THEME_KEY = 'theme';
const LOCALE_KEY = 'preferred-locale';

function getPreferredTheme(): 'light' | 'dark' {
  const stored = localStorage.getItem(THEME_KEY);
  if (stored === 'light' || stored === 'dark') return stored;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function applyTheme(theme: 'light' | 'dark') {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem(THEME_KEY, theme);

  document.querySelectorAll<HTMLButtonElement>('[data-theme-toggle]').forEach((btn) => {
    const toLight = theme === 'dark';
    btn.setAttribute('aria-label', toLight ? 'Switch to light mode' : 'Switch to dark mode');
    btn.setAttribute('title', toLight ? 'Switch to light mode' : 'Switch to dark mode');
  });
}

function initTheme() {
  applyTheme(getPreferredTheme());

  document.querySelectorAll('[data-theme-toggle]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
      applyTheme(current === 'dark' ? 'light' : 'dark');
    });
  });

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
    if (!localStorage.getItem(THEME_KEY)) {
      applyTheme(event.matches ? 'dark' : 'light');
    }
  });
}

function initNav() {
  const toggle = document.querySelector<HTMLButtonElement>('[data-nav-toggle]');
  if (!toggle) return;

  const setOpen = (open: boolean) => {
    document.body.classList.toggle('mobile-nav-active', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  };

  toggle.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    setOpen(!document.body.classList.contains('mobile-nav-active'));
  });

  document.querySelectorAll('#navmenu a').forEach((link) => {
    link.addEventListener('click', () => setOpen(false));
  });
}

function initScroll() {
  const onScroll = () => {
    document.body.classList.toggle('scrolled', window.scrollY > 80);
    document.getElementById('scroll-top')?.classList.toggle('visible', window.scrollY > 120);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  document.getElementById('scroll-top')?.addEventListener('click', (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

function initTyped() {
  const el = document.querySelector<HTMLElement>('.typed');
  if (!el) return;

  const items = (el.dataset.typedItems || '')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);
  if (!items.length) return;

  let itemIndex = 0;
  let charIndex = 0;
  let deleting = false;

  const tick = () => {
    const current = items[itemIndex];
    el.textContent = current.slice(0, charIndex);

    if (!deleting && charIndex < current.length) {
      charIndex += 1;
      setTimeout(tick, 90);
      return;
    }

    if (!deleting && charIndex === current.length) {
      deleting = true;
      setTimeout(tick, 1600);
      return;
    }

    if (deleting && charIndex > 0) {
      charIndex -= 1;
      setTimeout(tick, 45);
      return;
    }

    deleting = false;
    itemIndex = (itemIndex + 1) % items.length;
    setTimeout(tick, 400);
  };

  tick();
}

function rememberLocale() {
  const match = window.location.pathname.match(/^\/(en|es)(\/|$)/);
  if (match) localStorage.setItem(LOCALE_KEY, match[1]);
}

initTheme();
initNav();
initScroll();
initTyped();
rememberLocale();

export {};
