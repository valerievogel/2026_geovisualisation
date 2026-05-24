let leafletMap;
let markerList = []; // [{ project, marker }, ...]

function initMap(projects) {
  leafletMap = L.map('map', { minZoom: 2 }).setView([20, 10], 2);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 18,
    minZoom: 2,
    noWrap: true,
  }).addTo(leafletMap);

  markerList = projects.map(project => {
    const marker = L.marker([project.latitude, project.longitude]);

    marker.bindTooltip(
      `<strong>${project.name}</strong><br>${project.organisation}<br><em>${project.sport.join(', ')}</em>`,
      { className: 's4d-tooltip', direction: 'top', offset: [0, -10] }
    );

    marker.on('click', () => showProjectCard(project));

    marker.addTo(leafletMap);
    return { project, marker };
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
    marker.setOpacity(visibleIds.has(project.id) ? 1 : 0.15);
  });
}

function closeSidePanel() {
  document.getElementById('side-panel').classList.add('hidden');
}

function closeBottomSheet() {
  document.getElementById('bottom-sheet').classList.remove('open');
}
