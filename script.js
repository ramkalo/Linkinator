const projectData = {
  "title": "My Projects",
  "description": "A collection of my work across music, coding, and art",
  "categories": [
    {
      "name": "Ram Kalo Music",
      "links": [
        {
          "title": "Youtube Channel",
          "url": "https://www.youtube.com/@ramkalomusic",
          "description": "stuuuff"
        },
        {
          "title": "Bandcamp",
          "url": "https://ramkalo.bandcamp.com/",
          "description": "bandcamp stuuuufffff"
        },
        {
          "title": "SoundCloud",
          "url": "https://on.soundcloud.com/d8szPdu5brCmBwFP7",
          "description": "soundcloud stuuuufffff"
        }
      ]
    },
    {
      "name": "Hadean Lights Music",
      "links": [
        {
          "title": "Youtube Channel",
          "url": "https://www.youtube.com/@ramkalomusic",
          "description": "stuuuff"
        },
        {
          "title": "Bandcamp",
          "url": "https://ramkalo.bandcamp.com/",
          "description": "bandcamp stuuuufffff"
        },
        {
          "title": "SoundCloud",
          "url": "https://on.soundcloud.com/d8szPdu5brCmBwFP7",
          "description": "soundcloud stuuuufffff"
        }
      ]
    },
    {
      "name": "Coding Projects",
      "links": [
        {
          "title": "Retroinator",
          "url": "https://github.com/username/linkinator",
          "description": "Photo Editor"
        },
        {
          "title": "Tunnelinator",
          "url": "https://github.com/username/linkinator",
          "description": "Visual Synth"
        },
        {
          "title": "Obeyinator",
          "url": "https://ramkalo.github.io/Tunnelinator",
          "description": "MIDI Generator"
        }
      ]
    }
  ]
};

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
    container.innerHTML = '<p style="text-align:center;color:var(--text-muted)">No categories yet. Edit script.js to add projects!</p>';
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

render(projectData);
