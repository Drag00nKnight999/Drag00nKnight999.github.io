# Drag00nKnight999.Github.io

A responsive, multi-page personal developer hub built with plain HTML, CSS, and JavaScript for GitHub Pages.

## Pages

- `index.html` — landing page and featured projects
- `projects.html` — searchable, filterable project directory
- `about.html` — profile and interests
- `updates.html` — project milestones and changelog
- `resources.html` — useful documentation and profile links
- `404.html` — custom not-found page

## Design and features

- Dark background with cyan and purple neon accents
- Responsive desktop and mobile navigation
- Project search and category filters (client-side only)
- Accessible skip link, labels, focusable controls, and reduced-motion support
- No framework, build step, server, or external JavaScript dependency

## Publish on GitHub Pages

1. Create a repository named exactly `YOUR-USERNAME.github.io` under your GitHub account.
2. Upload the contents of this folder to the repository root. Do not upload the ZIP file itself as the only repository file.
3. In **Settings → Pages**, choose **Deploy from a branch**, select your default branch (usually `main`) and the root (`/`) folder.
4. Save and wait for GitHub Pages to publish the site.
5. Replace `YOUR-USERNAME` in `robots.txt` and `sitemap.xml` with your actual GitHub username.
6. Visit `https://YOUR-USERNAME.github.io/`.

If the account username is `Drag00nKnight999`, the expected URL is `https://Drag00nKnight999.github.io/` (GitHub URLs are case-insensitive in practice).

## Customize before publishing

- Check every project URL and status in `projects.html`.
- Update the milestones in `updates.html` whenever dates or status change.
- Add a public BloxdVids URL when one is ready.
- Replace or remove any project description that no longer reflects the current state.
- Add screenshots in `assets/images/` if you want project thumbnails later.

## Important hosting limitations

GitHub Pages serves static files. This site does not include a server, database, secure login, or real-time chat. Do not put passwords, API secrets, private admin links, or sensitive information in this repository. Anything committed to a public repository should be treated as public.

## To Do list

1. Add project screenshots and alt text.
2. Add per-project case-study pages for larger projects.
3. Automate project status data with a generated JSON file if the list grows.
4. Consider a privacy-friendly analytics option only if you actually need usage metrics.
