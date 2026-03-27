async function loadData() {
  try {
    const response = await fetch('data.json');
    if (!response.ok) throw new Error('Failed to load data');
    const data = await response.json();
    render(data);
  } catch (error) {
    console.error('Error loading data:', error);
    document.getElementById('categories').innerHTML = 
      '<p style="text-align:center;color:var(--text-muted)">Failed to load projects. Please check data.json</p>';
  }
}

function render(data) {
  document.title = data.title || 'My Projects';
  
  const titleEl = document.getElementById('page-title');
  titleEl.textContent = data.title || 'My Projects';
  
  const descEl = document.getElementById('page-description');
  if (data.description) {
    descEl.textContent = data.description;
  } else {
    descEl.style.display = 'none';
  }

  const container = document.getElementById('categories');
  
  if (!data.categories || data.categories.length === 0) {
    container.innerHTML = '<p style="text-align:center;color:var(--text-muted)">No categories yet. Add some to data.json!</p>';
    return;
  }

  container.innerHTML = data.categories.map(category => `
    <section class="category">
      <h2 class="category-title">${escapeHtml(category.name)}</h2>
      <div class="links">
        ${category.links.map(link => `
          <a href="${escapeHtml(link.url)}" class="link-card" target="_blank" rel="noopener noreferrer">
            <div class="link-title">${escapeHtml(link.title)}</div>
            ${link.description ? `<div class="link-description">${escapeHtml(link.description)}</div>` : ''}
            ${link.url ? `<div class="link-url">${escapeHtml(link.url)}</div>` : ''}
          </a>
        `).join('')}
      </div>
    </section>
  `).join('');
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

loadData();
