let glMap;
let markerList = []; // [{ project, marker }, ...]

function initMap(projects) {
  glMap = new maplibregl.Map({
    container: 'map',
    style: 'https://api.maptiler.com/maps/dataviz-v4-light/style.json?key=hJ1lxUKcMo0eAhcUqiOL',
    center: [10, 20],
    zoom: 2,
    minZoom: 2,
  });

  glMap.on('load', () => {
    markerList = projects.map(project => {
      const marker = new maplibregl.Marker()
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

      const el = marker.getElement();
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
  const sports  = p.sport.map(s => `<span class="tag accent">${s}</span>`).join('');
  const topics  = p.topic.map(t => `<span class="tag">${t}</span>`).join('');
  const targets = p.target_group.map(g => `<span class="tag">${g}</span>`).join('');

  return `
    <p class="proj-name">${p.name}</p>
    <p class="proj-org">${p.organisation} &mdash; ${p.organisation_type}</p>
    <p class="proj-org">${p.city}, ${p.country}</p>
    <div class="proj-meta">${sports}${topics}${targets}</div>
    <p class="proj-description">${p.description}</p>
    <a href="${p.website_url}" target="_blank" rel="noopener noreferrer" class="proj-link">
      Visit organisation website &#8594;
    </a>
  `;
}

function updatePins(filteredProjects) {
  const visibleIds = new Set(filteredProjects.map(p => p.id));
  markerList.forEach(({ project, marker }) => {
    marker.getElement().style.opacity = visibleIds.has(project.id) ? '1' : '0.15';
  });
}

function closeSidePanel() {
  document.getElementById('side-panel').classList.add('hidden');
}

function closeBottomSheet() {
  document.getElementById('bottom-sheet').classList.remove('open');
}
