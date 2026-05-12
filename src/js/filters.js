const FILTER_KEYS = [
  { key: 'region',            label: 'Region' },
  { key: 'country',           label: 'Country' },
  { key: 'topic',             label: 'Topic' },
  { key: 'target_group',      label: 'Target Group' },
  { key: 'sport',             label: 'Sport' },
  { key: 'skills_required',   label: 'Skills Required' },
  { key: 'language',          label: 'Language' },
  { key: 'organisation_type', label: 'Org. Type' },
  { key: 'organisation',      label: 'Organisation' },
];

let allProjects    = [];
let activeFilters  = {}; // { key: Set([...selected values]) }
let onFilterChange = null;

function initFilters(projects, callback) {
  allProjects    = projects;
  onFilterChange = callback;

  const clearBtn = document.getElementById('clear-filters');

  FILTER_KEYS.forEach(({ key, label }) => {
    const values = collectValues(projects, key);
    if (values.length === 0) return;
    const dropdown = buildDropdown(key, label, values);
    document.getElementById('filter-bar').insertBefore(dropdown, clearBtn);
  });

  document.addEventListener('click', e => {
    if (!e.target.closest('.filter-dropdown')) closeAllDropdowns();
  });

  clearBtn.addEventListener('click', clearAllFilters);
}

function collectValues(projects, key) {
  const seen = new Set();
  projects.forEach(p => {
    const val = p[key];
    if (Array.isArray(val)) val.forEach(v => seen.add(v));
    else if (val) seen.add(val);
  });
  return [...seen].sort();
}

function buildDropdown(key, label, values) {
  const wrapper = document.createElement('div');
  wrapper.className = 'filter-dropdown';
  wrapper.dataset.key = key;

  const btn = document.createElement('button');
  btn.className = 'filter-btn';
  btn.setAttribute('aria-haspopup', 'listbox');
  btn.setAttribute('aria-expanded', 'false');
  btn.innerHTML = `${label} <span class="caret">&#9660;</span>`;

  const panel = document.createElement('div');
  panel.className = 'filter-panel';
  panel.setAttribute('role', 'listbox');
  panel.setAttribute('aria-multiselectable', 'true');
  panel.setAttribute('aria-label', label);

  values.forEach(value => {
    const lbl = document.createElement('label');
    lbl.className = 'filter-option';
    lbl.setAttribute('role', 'option');

    const cb = document.createElement('input');
    cb.type = 'checkbox';
    cb.value = value;

    cb.addEventListener('change', () => {
      syncFilterState(key, wrapper);
      applyFilters();
      refreshButtonBadge(btn, key);
    });

    lbl.appendChild(cb);
    lbl.appendChild(document.createTextNode(value));
    panel.appendChild(lbl);
  });

  btn.addEventListener('click', e => {
    e.stopPropagation();
    const wasOpen = panel.classList.contains('open');
    closeAllDropdowns();
    if (!wasOpen) {
      panel.classList.add('open');
      btn.classList.add('open');
      btn.setAttribute('aria-expanded', 'true');
    }
  });

  wrapper.appendChild(btn);
  wrapper.appendChild(panel);
  return wrapper;
}

function syncFilterState(key, wrapper) {
  const checked = [...wrapper.querySelectorAll('input[type="checkbox"]:checked')].map(cb => cb.value);
  if (checked.length > 0) activeFilters[key] = new Set(checked);
  else delete activeFilters[key];
}

function refreshButtonBadge(btn, key) {
  const count = activeFilters[key] ? activeFilters[key].size : 0;
  const oldBadge = btn.querySelector('.filter-count');
  if (oldBadge) oldBadge.remove();

  if (count > 0) {
    btn.classList.add('active');
    const badge = document.createElement('span');
    badge.className = 'filter-count';
    badge.textContent = count;
    btn.insertBefore(badge, btn.querySelector('.caret'));
  } else {
    btn.classList.remove('active');
  }
}

function applyFilters() {
  if (Object.keys(activeFilters).length === 0) {
    onFilterChange(allProjects);
    return;
  }

  const filtered = allProjects.filter(project =>
    // AND across all active filter categories
    Object.entries(activeFilters).every(([key, selectedValues]) => {
      const val = project[key];
      // OR within the same category
      if (Array.isArray(val)) return val.some(v => selectedValues.has(v));
      return selectedValues.has(val);
    })
  );

  onFilterChange(filtered);
}

function clearAllFilters() {
  activeFilters = {};
  document.querySelectorAll('#filter-bar input[type="checkbox"]').forEach(cb => { cb.checked = false; });
  document.querySelectorAll('#filter-bar .filter-btn').forEach(btn => {
    btn.classList.remove('active');
    const badge = btn.querySelector('.filter-count');
    if (badge) badge.remove();
  });
  onFilterChange(allProjects);
}

function closeAllDropdowns() {
  document.querySelectorAll('.filter-panel.open').forEach(p => p.classList.remove('open'));
  document.querySelectorAll('.filter-btn.open').forEach(b => {
    b.classList.remove('open');
    b.setAttribute('aria-expanded', 'false');
  });
}
