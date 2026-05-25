let glMap;
let markerList = [];

/* ── Leader-line tooltip ─────────────────────────────────────────────────── */

let _tip  = null;   // tooltip <div>
let _line = null;   // <polyline> inside the SVG overlay

// Position of the pin head circle centre within the 28×36 pin element
const PIN_HEAD_X = 14;
const PIN_HEAD_Y = 14;

const V_STEM = 40;   // vertical segment of the leader line (px)
const H_STEM = 80;   // horizontal segment of the leader line (px)

function _initTooltipOverlay() {
  const container = document.getElementById('map');

  // Full-size SVG overlay – draws the L-shaped leader line
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.style.cssText =
    'position:absolute;top:0;left:0;width:100%;height:100%;' +
    'pointer-events:none;z-index:50;overflow:visible;';
  svg.setAttribute('aria-hidden', 'true');

  _line = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
  _line.setAttribute('fill',             'none');
  _line.setAttribute('stroke',           '#003459');
  _line.setAttribute('stroke-width',     '1.5');
  _line.setAttribute('stroke-linecap',   'round');
  _line.setAttribute('stroke-linejoin',  'round');
  svg.appendChild(_line);
  container.appendChild(svg);

  // Tooltip box
  _tip = document.createElement('div');
  _tip.className = 'map-leader-tooltip';
  container.appendChild(_tip);
}

function _showTooltip(pinEl, html) {
  const mapRect = document.getElementById('map').getBoundingClientRect();
  const pinRect = pinEl.getBoundingClientRect();

  // Connection point: centre of the round pin-head circle
  const hx = pinRect.left - mapRect.left + PIN_HEAD_X;
  const hy = pinRect.top  - mapRect.top  + PIN_HEAD_Y;

  // Measure tooltip first so we know how much space it needs
  _tip.innerHTML = html;
  _tip.style.visibility = 'hidden';
  _tip.style.display    = 'block';
  const tw = _tip.offsetWidth;
  const th = _tip.offsetHeight;

  // Start from the quadrant-based direction…
  let goRight = hx >= mapRect.width  / 2;
  let goUp    = hy <  mapRect.height / 2;

  // …then flip if the full line + tooltip would overflow the map edge
  if ( goRight && hx + H_STEM + tw > mapRect.width  - 4) goRight = false;
  if (!goRight && hx - H_STEM - tw < 4)                   goRight = true;
  if (!goUp    && hy + V_STEM + th / 2 > mapRect.height - 4) goUp = true;
  if ( goUp    && hy - V_STEM - th / 2 < 4)                  goUp = false;

  // Final geometry
  const ey = goUp    ? hy - V_STEM : hy + V_STEM;
  const tx = goRight ? hx + H_STEM : hx - H_STEM;

  _line.setAttribute('points', `${hx},${hy} ${hx},${ey} ${tx},${ey}`);

  // Tooltip: vertically centred on the horizontal segment
  _tip.style.left       = `${goRight ? tx : tx - tw}px`;
  _tip.style.top        = `${Math.max(4, Math.min(ey - th / 2, mapRect.height - th - 4))}px`;
  _tip.style.visibility = 'visible';
}

function _hideTooltip() {
  if (_tip)  _tip.style.display = 'none';
  if (_line) _line.setAttribute('points', '');
}

/* ── Map initialisation ──────────────────────────────────────────────────── */

function initMap(projects) {
  glMap = new maplibregl.Map({
    container: 'map',
    style: 'https://api.maptiler.com/maps/dataviz-v4-light/style.json?key=hJ1lxUKcMo0eAhcUqiOL',
    center: [15, 15],
    zoom: 1.5,
    minZoom: 1,
  });

  glMap.on('load', () => {
    _initTooltipOverlay();
    glMap.on('movestart', _hideTooltip); // hide tooltip when map pans / zooms

    markerList = projects.map(project => {
      const el = document.createElement('div');
      el.className = 'map-pin';
      el.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="36" viewBox="0 0 28 36" aria-hidden="true">
          <path d="M14 1C6.82 1 1 6.82 1 14c0 4.48 2.1 8.47 5.36 11.05L14 35l7.64-9.95C24.9 22.47 27 18.48 27 14 27 6.82 21.18 1 14 1z"
                fill="#003459" stroke="#ffffff" stroke-width="2"/>
          <circle cx="14" cy="14" r="5" fill="#ffffff"/>
        </svg>`;

      const marker = new maplibregl.Marker({ element: el, anchor: 'bottom' })
        .setLngLat([project.longitude, project.latitude])
        .addTo(glMap);

      const tipHTML =
        `<strong>${project.name}</strong><br>${project.organisation}<br>` +
        `<em>${project.sport.join(', ')}</em>`;

      el.addEventListener('mouseenter', () => _showTooltip(el, tipHTML));
      el.addEventListener('mouseleave', _hideTooltip);
      el.addEventListener('click',      () => showProjectCard(project));

      return { project, marker };
    });
  });

  document.getElementById('close-panel').addEventListener('click', closeSidePanel);
  document.getElementById('close-sheet').addEventListener('click', closeBottomSheet);
}

/* ── Project card ────────────────────────────────────────────────────────── */

function showProjectCard(project) {
  const html = buildCardHTML(project);

  if (window.innerWidth >= 1024) {
    document.getElementById('panel-card').innerHTML = html;
    document.getElementById('side-panel').classList.remove('hidden');
  } else {
    document.getElementById('sheet-card').innerHTML = html;
    document.getElementById('bottom-sheet').classList.add('open');
  }
}

function buildCardHTML(p) {
  const row = (tags, cls) =>
    tags.length
      ? `<div class="proj-meta-row">${tags.map(t => `<span class="tag ${cls}">${t}</span>`).join('')}</div>`
      : '';

  return `
    <p class="proj-name">${p.name}</p>
    <p class="proj-org">${p.organisation}</p>
    <p class="proj-org">${p.city}, ${p.country}</p>
    <div class="proj-meta">
      ${row(p.sport,              'accent')}
      ${row([p.organisation_type], 'org-type')}
      ${row(p.topic,              '')}
      ${row(p.target_group,       '')}
    </div>
    <p class="proj-description">${p.description}</p>
    <a href="${p.website_url}" target="_blank" rel="noopener noreferrer" class="proj-link">
      Visit organisation website &#8594;
    </a>
  `;
}

/* ── Filter integration ──────────────────────────────────────────────────── */

function updatePins(filteredProjects) {
  const visibleIds = new Set(filteredProjects.map(p => p.id));
  markerList.forEach(({ project, marker }) => {
    marker.setOpacity(visibleIds.has(project.id) ? '1' : '0.15');
  });
}

/* ── Panel helpers ───────────────────────────────────────────────────────── */

function closeSidePanel() {
  document.getElementById('side-panel').classList.add('hidden');
}

function closeBottomSheet() {
  document.getElementById('bottom-sheet').classList.remove('open');
}
