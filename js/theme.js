(function () {
  'use strict';

  var PALETTES = [
    { id: 'violet', label: 'Violeta', color: '#7c5cff' },
    { id: 'mint',   label: 'Menta',   color: '#10b981' },
    { id: 'coral',  label: 'Coral',   color: '#f2545b' },
    { id: 'sky',    label: 'Azul',    color: '#0ea5e9' },
    { id: 'amber',  label: 'Âmbar',   color: '#f59e0b' },
    { id: 'lime',   label: 'Limão',   color: '#84cc16' }
  ];

  var STORAGE_THEME = 'portfolio-theme';
  var STORAGE_ACCENT = 'portfolio-accent';
  var DEFAULT_ACCENT = 'violet';

  var root = document.documentElement;
  var fab = document.getElementById('themeFab');
  var panel = document.getElementById('themePanel');
  var swatchList = document.getElementById('swatchList');
  var modeSwitch = document.getElementById('modeSwitch');
  var modeLabel = document.getElementById('modeLabel');
  var metaThemeColor = document.querySelector('meta[name="theme-color"]');

  function readStore(key) {
    try { return localStorage.getItem(key); } catch (e) { return null; }
  }

  function writeStore(key, value) {
    try { localStorage.setItem(key, value); } catch (e) {  }
  }

  var storedTheme = readStore(STORAGE_THEME);
  var storedAccent = readStore(STORAGE_ACCENT);
  var prefersLight = window.matchMedia('(prefers-color-scheme: light)');

  var currentTheme = (storedTheme === 'light' || storedTheme === 'dark')
    ? storedTheme
    : (prefersLight.matches ? 'light' : 'dark');

  var currentAccent = PALETTES.some(function (p) { return p.id === storedAccent; })
    ? storedAccent
    : DEFAULT_ACCENT;

  var switchTimer = null;

  function suppressTransitions() {
    root.classList.add('theme-switching');
    window.clearTimeout(switchTimer);

    switchTimer = window.setTimeout(function () {
      root.classList.remove('theme-switching');
    }, 60);
  }

  function applyTheme(theme, options) {
    currentTheme = theme;
    if (!options || !options.silent) suppressTransitions();
    root.setAttribute('data-theme', theme);
    if (metaThemeColor) metaThemeColor.setAttribute('content', theme === 'dark' ? '#0b0b10' : '#fbfbfd');
    syncModeUI();
  }

  function applyAccent(accent) {
    currentAccent = accent;
    root.setAttribute('data-accent', accent);
    syncSwatchUI();
  }

  function syncModeUI() {
    var isDark = currentTheme === 'dark';
    if (modeSwitch) modeSwitch.setAttribute('aria-checked', String(isDark));
    if (modeLabel) modeLabel.textContent = isDark ? 'Escuro' : 'Claro';
  }

  function syncSwatchUI() {
    if (!swatchList) return;
    var buttons = swatchList.querySelectorAll('.swatch');
    for (var i = 0; i < buttons.length; i++) {
      var isCurrent = buttons[i].dataset.accent === currentAccent;
      buttons[i].setAttribute('aria-checked', String(isCurrent));
      buttons[i].tabIndex = isCurrent ? 0 : -1;
    }
  }

  function buildSwatches() {
    if (!swatchList) return;
    var frag = document.createDocumentFragment();

    PALETTES.forEach(function (palette) {
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'swatch';
      btn.setAttribute('role', 'radio');
      btn.setAttribute('aria-checked', 'false');
      btn.setAttribute('aria-label', palette.label);
      btn.title = palette.label;
      btn.dataset.accent = palette.id;
      btn.style.setProperty('--swatch', palette.color);
      frag.appendChild(btn);
    });

    swatchList.appendChild(frag);

    swatchList.addEventListener('click', function (event) {
      var btn = event.target.closest('.swatch');
      if (!btn) return;
      applyAccent(btn.dataset.accent);
      writeStore(STORAGE_ACCENT, btn.dataset.accent);
    });

    swatchList.addEventListener('keydown', function (event) {
      var keys = ['ArrowRight', 'ArrowDown', 'ArrowLeft', 'ArrowUp'];
      if (keys.indexOf(event.key) === -1) return;
      event.preventDefault();

      var step = (event.key === 'ArrowRight' || event.key === 'ArrowDown') ? 1 : -1;
      var index = PALETTES.findIndex(function (p) { return p.id === currentAccent; });
      var next = PALETTES[(index + step + PALETTES.length) % PALETTES.length];

      applyAccent(next.id);
      writeStore(STORAGE_ACCENT, next.id);
      swatchList.querySelector('[data-accent="' + next.id + '"]').focus();
    });
  }

  function isPanelOpen() {
    return panel && panel.classList.contains('is-open');
  }

  function openPanel() {
    if (!panel || !fab) return;
    panel.classList.add('is-open');
    panel.removeAttribute('inert');
    fab.setAttribute('aria-expanded', 'true');
    document.addEventListener('click', onDocumentClick, true);
    document.addEventListener('keydown', onDocumentKeydown);
  }

  function closePanel(returnFocus) {
    if (!panel || !fab) return;

    if (panel.contains(document.activeElement)) fab.focus();
    else if (returnFocus) fab.focus();

    panel.classList.remove('is-open');
    panel.setAttribute('inert', '');
    fab.setAttribute('aria-expanded', 'false');
    document.removeEventListener('click', onDocumentClick, true);
    document.removeEventListener('keydown', onDocumentKeydown);
  }

  function onDocumentClick(event) {
    if (!isPanelOpen()) return;
    if (panel.contains(event.target) || fab.contains(event.target)) return;
    closePanel(false);
  }

  function onDocumentKeydown(event) {
    if (event.key === 'Escape') closePanel(true);
  }

  buildSwatches();
  applyTheme(currentTheme, { silent: true });
  applyAccent(currentAccent);
  writeStore(STORAGE_ACCENT, currentAccent);

  if (fab) {
    fab.addEventListener('click', function () {
      if (isPanelOpen()) closePanel(true);
      else openPanel();
    });
  }

  if (modeSwitch) {
    modeSwitch.addEventListener('click', function () {
      var next = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      writeStore(STORAGE_THEME, next);
    });
  }

  var onSystemChange = function () {
    if (readStore(STORAGE_THEME)) return;
    applyTheme(prefersLight.matches ? 'light' : 'dark');
  };

  if (typeof prefersLight.addEventListener === 'function') {
    prefersLight.addEventListener('change', onSystemChange);
  } else if (typeof prefersLight.addListener === 'function') {
    prefersLight.addListener(onSystemChange);
  }
})();
