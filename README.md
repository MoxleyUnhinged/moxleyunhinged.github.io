# MoxleyUnhinged — Developer Portfolio

A responsive, dependency-free portfolio website that can be hosted with GitHub Pages.

## Preview locally

Open `index.html` in a browser. The Google Fonts link uses a network connection; the site falls back to system fonts if it is unavailable.

## Publish with GitHub Pages

1. Add these files to the `main` branch of your `MoxleyUnhinged.github.io` repository.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
4. Visit `https://moxleyunhinged.github.io` after the Pages deployment finishes.

## Update projects

Edit the `projects` array near the top of `script.js`. Each entry controls its title, description, technology tags, filter categories, visual mark, and GitHub repository name. Supported filters are `Python`, `C`, and `Web`; use `all` only for the filter button.
