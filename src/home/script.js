/* §7 Motion System — the exhaustive choreography budget.
   Six items move. Nothing else. */

document.getElementById('year').textContent = new Date().getFullYear();

const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (reduced) document.body.classList.add('reduced');

/* §10 device-capability threshold — lite mode is a specification */
const lite = (navigator.connection && navigator.connection.saveData) ||
             (navigator.deviceMemory && navigator.deviceMemory < 4) ||
             (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4);
if (lite) document.body.classList.add('lite');

/* Navigation — always solid now, no scroll-triggered state needed */
const nav = document.getElementById('nav');
const navToggle = document.getElementById('navToggle');
const navSheet = document.getElementById('navSheet');
const navScrim = document.getElementById('navScrim');
function setSheet(open) {
  navSheet.classList.toggle('open', open);
  navScrim.classList.toggle('open', open);
  document.body.classList.toggle('sheet-open', open);
  navToggle.setAttribute('aria-expanded', String(open));
  navToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
}
navToggle.addEventListener('click', () => setSheet(!navSheet.classList.contains('open')));
navScrim.addEventListener('click', () => setSheet(false));
navSheet.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setSheet(false)));

/* ── HERO MEDIA CHECK — use real video/photo if present, else the
   animated camera-wall texture (built below) stays as the fallback.
   See the HTML comment above #heroVideo for exactly how to add
   your own file — no code changes needed on your end. */
(function heroMediaCheck() {
  const video = document.getElementById('heroVideo');
  const photo = document.getElementById('heroPhoto');
  const wall = document.getElementById('heroTiles');
  let videoWorked = false;

  video.addEventListener('loadeddata', () => {
    videoWorked = true;
    video.style.opacity = '1';
    wall.style.display = 'none';
  });
  video.addEventListener('error', () => {
    if (videoWorked) return;
    const extensions = ['jpg', 'jpeg', 'png'];
    let i = 0;
    function attempt() {
      if (i >= extensions.length) return; /* neither video nor any photo found — camera-wall stays visible */
      const path = `/media/hero-background.${extensions[i]}`;
      const testImg = new Image();
      testImg.onload = () => {
        photo.style.backgroundImage = `url('${path}')`;
        photo.style.opacity = '1';
        wall.style.display = 'none';
      };
      testImg.onerror = () => { i++; attempt(); };
      testImg.src = path;
    }
    attempt();
  });
  video.load();
})();

/* ── ADDITIONAL IMAGE SLOTS — Built for Reality + Where This Fits ──
   Same graceful pattern as the hero: if a file exists, show it; if
   not, the slot stays collapsed (display:none). Tries .jpg, .jpeg,
   and .png automatically, in that order, so it doesn't matter which
   common format your photo happens to be saved as. */
function trySetImage(elementId, baseName) {
  const el = document.getElementById(elementId);
  if (!el) return;
  const extensions = ['jpg', 'jpeg', 'png'];
  let i = 0;
  function attempt() {
    if (i >= extensions.length) return; /* none found — stays hidden */
    const path = `/media/${baseName}.${extensions[i]}`;
    const img = new Image();
    img.onload = () => {
      el.style.backgroundImage = `url('${path}')`;
      el.style.display = 'block';
    };
    img.onerror = () => { i++; attempt(); };
    img.src = path;
  }
  attempt();
}
trySetImage('hardwarePhoto', 'hardware-photo');
trySetImage('environmentPhoto', 'environment-photo');

/* ── PRODUCT MARQUEE — detects whichever camera images actually
   exist (3 named ones + up to 3 additional generic slots), builds
   a track, duplicates it once for a seamless continuous loop. */
(function loadProductMarquee() {
  const marquee = document.getElementById('productMarquee');
  const track = document.getElementById('marqueeTrack');
  if (!marquee || !track) return;

  const candidates = [
    { src: '/media/camera-bullet.png', label: 'Bullet Camera' },
    { src: '/media/camera-varifocal.png', label: 'Varifocal Bullet' },
    { src: '/media/camera-dome.png', label: 'Dome Camera' },
    { src: '/media/camera-turret.png', label: 'Turret Camera' },
    { src: '/media/camera-ptz.png', label: 'PTZ Camera' },
    { src: '/media/equipment-dvr.png', label: 'DVR' },
    { src: '/media/equipment-monitor.png', label: 'Monitor' },
    { src: '/media/equipment-storage.png', label: 'Storage Disk' },
    { src: '/media/camera-product-7.png', label: 'Professional Installation' },
    { src: '/media/camera-product-8.png', label: 'Equipment' },
  ];

  function checkOne(c) {
    return new Promise(resolve => {
      const test = new Image();
      test.onload = () => resolve(c);
      test.onerror = () => resolve(null);
      test.src = c.src;
    });
  }

  Promise.all(candidates.map(checkOne)).then(results => {
    const found = results.filter(Boolean);
    if (found.length === 0) return; /* marquee stays hidden entirely */

    function buildItems(list) {
      return list.map(c =>
        `<div class="product-item"><img src="${c.src}" alt="${c.label}"><p class="mono-s">${c.label}</p></div>`
      ).join('');
    }
    /* Duplicate the set once so the -50% translateX loop is seamless */
    track.innerHTML = buildItems(found) + buildItems(found);
    marquee.style.display = 'block';
  });
})();

/* §7 item 3: hero tiles — 12, staggered; disabled in lite/reduced via CSS */
const tilesEl = document.getElementById('heroTiles');
const tileColors = [
  ['#16233a','#0e1826'], ['#1a2438','#0f1a28'], ['#182b3a','#0c1620'],
  ['#1e2436','#111925'], ['#152230','#0a141e'], ['#1c2a3c','#0d1722'],
];
let tilesHtml = '';
for (let i = 0; i < 12; i++) {
  const pair = tileColors[i % 6];
  tilesHtml += '<div class="tile" style="background:linear-gradient(135deg, ' + pair[0] + ', ' + pair[1] + ');"></div>';
}
tilesEl.innerHTML = tilesHtml;
if (!lite && !reduced) {
  let delayRules = '';
  for (let i = 0; i < 12; i++) {
    delayRules += '#heroTiles .tile:nth-child(' + (i+1) + ')::after { animation-delay: ' + ((i*0.37)%5).toFixed(2) + 's; }\n';
  }
  const st = document.createElement('style');
  st.textContent = delayRules;
  document.head.appendChild(st);
}

/* Camera alert sequence — Point 1 redesign: camera flickers in
   suddenly (not a smooth fade), holds visible for 5+ seconds while
   red alert text blinks continuously beneath it, then disappears
   instantly and loops forever. */
/* Position the camera precisely above the rail-column's REAL
   rendered position — measured directly, not guessed via CSS,
   since the rail is fixed-to-viewport while this sits in normal
   document flow. Only applies at desktop widths where rail-column
   exists at all. */
/* Configure the rail-column's traveling glow outline — measures
   the card's REAL rendered size (it's not a fixed height, content
   determines it) and sets the SVG rect + dash pattern to match
   exactly, so the traveling segment always follows the card's
   actual perimeter precisely, at any width/height. */
function setupRailGlow() {
  const rail = document.getElementById('railColumn');
  const svg = document.getElementById('railGlowSvg');
  const rect = document.getElementById('railGlowRect');
  if (!rail || !svg || !rect || window.innerWidth < 1200) return;

  const w = rail.clientWidth;
  const h = rail.clientHeight;
  if (w === 0 || h === 0) return; /* not rendered yet — try again later */

  const strokeInset = 1; /* keep the stroke just inside the card edge */
  const radius = 8; /* matches --radius-card */

  svg.setAttribute('viewBox', `0 0 ${w} ${h}`);
  rect.setAttribute('x', strokeInset);
  rect.setAttribute('y', strokeInset);
  rect.setAttribute('width', w - strokeInset * 2);
  rect.setAttribute('height', h - strokeInset * 2);
  rect.setAttribute('rx', radius);

  const perimeter = 2 * ((w - strokeInset * 2) + (h - strokeInset * 2));
  const segment = perimeter * 0.3; /* the visible traveling segment is 30% of the loop */
  rect.style.strokeDasharray = `${segment} ${perimeter - segment}`;
  rect.style.setProperty('--glow-travel-end', `${-perimeter}px`);
  rect.style.strokeDashoffset = '0';
}
setupRailGlow();
window.addEventListener('resize', setupRailGlow);
setupRailGlow();
setTimeout(setupRailGlow, 300); /* fonts/content can shift height slightly after first paint */

function positionCameraAboveRail() {
  const frame = document.getElementById('cameraAlertFrame');
  const rail = document.getElementById('railColumn');
  const wrap = document.querySelector('.monitor-wrap'); /* the ACTUAL positioned ancestor — position:absolute on frame resolves against this, not .hero */
  const hero = document.querySelector('.hero'); /* has overflow:hidden — camera must stay within its bounds or it gets clipped */
  if (!frame || !rail || !wrap || !hero) return;

  if (window.innerWidth < 1200) {
    frame.classList.remove('js-positioned');
    frame.style.top = ''; frame.style.right = ''; frame.style.bottom = '';
    return;
  }

  const railRect = rail.getBoundingClientRect();
  const wrapRect = wrap.getBoundingClientRect();
  const heroRect = hero.getBoundingClientRect();
  const gap = 28; /* clear space between camera bottom and rail top */
  const cameraHeight = 190;

  let top = railRect.top - wrapRect.top - gap - cameraHeight;
  /* Clamp so the camera's final position (relative to hero, which
     clips overflow) never goes above hero's own top edge */
  const minTop = (heroRect.top - wrapRect.top) + 20;
  if (top < minTop) top = minTop;

  frame.classList.add('js-positioned');
  frame.style.right = (wrapRect.right - railRect.right) + 'px';
  frame.style.top = top + 'px';
}
positionCameraAboveRail();
window.addEventListener('resize', positionCameraAboveRail);
positionCameraAboveRail();

(function cameraAlertSequence() {
  const empty = document.getElementById('cameraAlertEmpty');
  const content = document.getElementById('cameraAlertContent');
  const img = document.getElementById('cutoutImg');
  if (!empty || !content || !img) return;

  const extensions = ['png', 'jpg', 'jpeg'];
  let i = 0;
  function tryLoad() {
    if (i >= extensions.length) return; /* no file found — placeholder stays */
    const path = `/media/camera-cutout.${extensions[i]}`;
    const test = new Image();
    test.onload = () => {
      img.src = path;
      empty.style.display = 'none';
      content.style.display = 'flex';
      runCycle();
    };
    test.onerror = () => { i++; tryLoad(); };
    test.src = path;
  }

  function runCycle() {
    if (reduced) {
      img.classList.add('cam-visible');
      return;
    }
    function show() {
      img.classList.remove('flicker');
      void img.offsetWidth; /* restart animation each cycle */
      img.classList.add('flicker', 'cam-visible');
      setTimeout(() => {
        img.classList.remove('cam-visible', 'flicker');
        setTimeout(show, 600); /* brief pause before next loop */
      }, 5200); /* hold >= 5 seconds, as required */
    }
    show();
  }

  tryLoad();
})();


/* §7 item 1: STATUS RAIL — scroll-linked via IntersectionObserver */
const railBadge = document.getElementById('railBadge');
const railBadgeStrip = document.getElementById('railBadgeStrip');
const railDetail = document.getElementById('railDetail');
const railColumn = document.getElementById('railColumn');
const RAIL_STATES = {
  normal:    { label: 'NORMAL',    cls: 'badge-normal',    sentence: 'Status normal.' },
  observe:   { label: 'OBSERVE',   cls: 'badge-observe',   sentence: 'Status changed to Observe.' },
  risk:      { label: 'RISK',      cls: 'badge-risk',      sentence: 'Status changed to Risk. Security notified.' },
  emergency: { label: 'EMERGENCY', cls: 'badge-emergency', sentence: 'Status changed to Emergency. Site Manager notified.' },
  resolved:  { label: 'RESOLVED',  cls: 'badge-normal',    sentence: 'Incident resolved, four minutes from first alert.' },
};
let currentRail = 'normal';
function setRail(state, detail) {
  if (reduced) return; /* §7: rail static at NORMAL under reduced motion */
  if (state === currentRail) return;
  currentRail = state;
  const s = RAIL_STATES[state];
  [railBadge, railBadgeStrip].forEach(b => {
    b.textContent = s.label;
    b.className = 'badge ' + s.cls;
    b.classList.remove('tick'); void b.offsetWidth; b.classList.add('tick');
  });
  railDetail.textContent = detail || '';
  railColumn.setAttribute('aria-label', s.sentence);
}
/* Eyebrow underline — draws left-to-right, glows, settles solid,
   triggered once when each eyebrow scrolls into view (Point 3) */
if ('IntersectionObserver' in window) {
  const eyebrowObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('underline-draw');
        eyebrowObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.3 });
  document.querySelectorAll('.eyebrow').forEach(el => eyebrowObserver.observe(el));
} else {
  document.querySelectorAll('.eyebrow').forEach(el => el.classList.add('underline-draw'));
}

const railTargets = document.querySelectorAll('[data-rail]');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) setRail(e.target.dataset.rail, e.target.dataset.railDetail || '');
    });
  }, { rootMargin: '-40% 0px -40% 0px' });
  railTargets.forEach(t => io.observe(t));
}

/* Rail timestamp — ticks every second, tabular numerals, zero reflow */
const railTime = document.getElementById('railTime');
const railTimeStrip = document.getElementById('railTimeStrip');
let sec = 3, min = 0;
setInterval(() => {
  sec++;
  if (sec >= 60) { sec = 0; min++; }
  const t = '01:' + String(min).padStart(2,'0') + ':' + String(sec).padStart(2,'0');
  railTime.textContent = t;
  railTimeStrip.textContent = t;
}, 1000);

/* §7 item 4: ladder breathing — 3s dwell per band, 12s cycle, pausable */
const bands = document.querySelectorAll('.band');
const ladderPause = document.getElementById('ladderPause');
let ladderIdx = 0, ladderPaused = false;
function ladderStep() {
  bands.forEach(b => b.classList.remove('active'));
  bands[ladderIdx].classList.add('active');
  ladderIdx = (ladderIdx + 1) % bands.length;
}
if (!reduced) {
  ladderStep();
  setInterval(() => { if (!ladderPaused) ladderStep(); }, 3000);
}
ladderPause.addEventListener('click', () => {
  ladderPaused = !ladderPaused;
  ladderPause.textContent = ladderPaused ? 'resume' : 'pause';
  ladderPause.setAttribute('aria-pressed', String(ladderPaused));
});

/* §6 Forms — GAP RESOLUTION #4: no backend pre-launch; mailto +
   spec-compliant confirmation state. Swap for real endpoint later. */
const form = document.getElementById('contactForm');
const sendBtn = document.getElementById('sendBtn');
const formConfirm = document.getElementById('formConfirm');
const formError = document.getElementById('formError');
form.addEventListener('submit', e => {
  e.preventDefault();
  formError.classList.remove('show');
  const data = new FormData(form);
  if (!data.get('name') || !data.get('contact')) {
    formError.textContent = 'Error: please fill in your name and a way to reach you.';
    formError.classList.add('show');
    return;
  }
  sendBtn.disabled = true;
  sendBtn.classList.add('btn-sending');
  sendBtn.textContent = 'Sending…';
  const subject = encodeURIComponent('Cognitive Vision consultation — ' + (data.get('name') || ''));
  const body = encodeURIComponent(
    'Name: ' + (data.get('name') || '') +
    '\nInstitution: ' + (data.get('org') || '—') +
    '\nContact: ' + (data.get('contact') || '') +
    '\n\n' + (data.get('message') || '')
  );
  window.location.href = 'mailto:hello@cognitivevision.co.ke?subject=' + subject + '&body=' + body;
  setTimeout(() => {
    form.style.display = 'none';
    formConfirm.classList.add('show');
  }, 900);
});
