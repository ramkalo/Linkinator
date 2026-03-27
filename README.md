# My Projects

A simple, mobile-friendly portfolio for hosting links to your projects.

## Quick Start

1. **Edit links**: Open `data.json` and add your projects
2. **Test locally**: Open `index.html` in your browser, or run:
   ```bash
   npx serve .
   ```
3. **Deploy to GitHub Pages**:
   - Push to a GitHub repository
   - Go to Settings → Pages
   - Set Source to "main branch" and save

## Adding Projects

Edit `data.json` to add categories and links:

```json
{
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
}
```

## File Structure

- `index.html` - Main page (don't need to edit)
- `data.json` - All your links and categories (edit this!)
- `styles.css` - Styling (optional customization)
- `script.js` - Loads and renders data (don't need to edit)
