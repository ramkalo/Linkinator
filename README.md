# My Projects

A cyberpunk-themed, mobile-friendly portfolio for your projects.

## Quick Start

1. **Test locally**: Open `index.html` in your browser
2. **Add/edit links**: Open `script.js` and edit the `projectData` object
3. **Deploy to GitHub Pages**:
   - Push to a GitHub repository
   - Go to Settings → Pages
   - Set Source to "main branch" and save

## Adding Projects

Edit `script.js` to add categories and links. The data is in the `projectData` object at the top of the file:

```javascript
const projectData = {
  "title": "My Projects",
  "description": "A collection of my work",
  "categories": [
    {
      "name": "Category Name",
      "links": [
        {
          "title": "Project Title",
          "url": "https://example.com",
          "description": "Optional description"
        }
      ]
    }
  ]
};
```

## File Structure

- `index.html` - Main page (don't need to edit)
- `script.js` - All your links and categories (edit this!)
- `styles.css` - Styling (optional customization)
- `data.json` - Backup file (not used anymore)
