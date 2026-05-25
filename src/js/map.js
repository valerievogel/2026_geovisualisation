let glMap;
let markerList = []; // [{ project, marker }, ...]

function initMap(projects) {
  glMap = new maplibregl.Map({
    container: 'map',
    style: 'https://api.maptiler.com/maps/dataviz-v4-light/style.json?key=hJ1lxUKcMo0eAhcUqiOL',
    center: [15, 15],
    zoom: 1.5,
    minZoom: 1,
  });

  glMap.on('load', () => {
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

      const popup = new maplibregl.Popup({
        offset: 25,
        closeButton: false,
        closeOnClick: false,
        anchor: 'bottom',
        className: 's4d-tooltip',
      }).setHTML(
        `<strong>${project.name}</strong><br>${project.organisation}<br><em>${project.sport.join(', ')}</em>`
      );

      el.addEventListener('mouseenter', () => {
        popup.setLngLat([project.longitude, project.latitude]).addTo(glMap);
      });
      el.addEventListener('mouseleave', () => popup.remove());
      el.addEventListener('click', () => showProjectCard(project));

      return { project, marker };
    });
  });

  document.getElementById('close-panel').addEventListener('click', closeSidePanel);
  document.getElementById('close-sheet').addEventListener('click', closeBottomSheet);
}

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
    tags.length ? `<div class="proj-meta-row">${tags.map(t => `<span class="tag ${cls}">${t}</span>`).join('')}</div>` : '';

  return `
    <p class="proj-name">${p.name}</p>
    <p class="proj-org">${p.organisation} &mdash; ${p.organisation_type}</p>
    <p class="proj-org">${p.city}, ${p.country}</p>
    <div class="proj-meta">
      ${row(p.sport,         'accent')}
      ${row(p.topic,         '')}
      ${row(p.target_group,  '')}
    </div>
    <p class="proj-description">${p.description}</p>
    <a href="${p.website_url}" target="_blank" rel="noopener noreferrer" class="proj-link">
      Visit organisation website &#8594;
    </a>
  `;
}

function updatePins(filteredProjects) {
  const visibleIds = new Set(filteredProjects.map(p => p.id));
  markerList.forEach(({ project, marker }) => {
    marker.setOpacity(visibleIds.has(project.id) ? '1' : '0.15');
  });
}

function closeSidePanel() {
  document.getElementById('side-panel').classList.add('hidden');
}

function closeBottomSheet() {
  document.getElementById('bottom-sheet').classList.remove('open');
}
