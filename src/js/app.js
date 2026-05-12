async function fetchProjects() {
  const response = await fetch('data/projects.json');
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  return response.json();
}

document.addEventListener('DOMContentLoaded', async () => {
  if (!document.getElementById('map')) return;

  try {
    const projects = await fetchProjects();
    initMap(projects);
    initFilters(projects, (filtered) => updatePins(filtered));
  } catch (err) {
    console.error(err);
    document.getElementById('map').insertAdjacentHTML(
      'beforebegin',
      `<p style="padding:1rem;color:red;">Error: ${err.message}</p>`
    );
  }
});
