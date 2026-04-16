# Comparison Between Norse Mythology and Asgard in *Stargate*

A React-based interactive capstone site comparing Old Norse myth with *Stargate*'s Asgard. The project is built as a single-page experience with a centered icon navigation bar and content sections that swap in and out below the divider.

## Live Site

https://ethkissell.github.io/norse-stargate-asgard/

## Repository

https://github.com/ethkissell/norse-stargate-asgard

## Stack

This project uses:

- **React** for UI structure and page content
- **Vite** for local development and production builds
- **GitHub Pages** for hosting
- **GitHub Actions** for automated deployment
- **HTML + CSS** for layout, typography, and visual styling

## Framework Overview

The site is organized as a small React application with a simple content-switching framework:

- `index.html` provides the root mounting point for the app
- `main.jsx` bootstraps React and loads global styles
- `App.jsx` manages the active section and the top-level navigation
- `IconNav.jsx` renders the centered icon bar and the expandable content area
- `src/pages/` contains the main page components such as Home, Asgard, Myth & Culture, Thor, and Citations
- `src/images/` and `src/icons/` store static assets used in the page layouts and navigation bar

The navigation works by storing an active page state in `App.jsx`. Clicking an icon updates the selected section, and the corresponding component renders below the divider line. Clicking the same icon again or the HOME button returns the view to Home and brings the page to the top.

## Project Structure

```text
src/
  components/
    IconNav.jsx
 icons/
    "".svg
    ...
  images/
    "".webp
    ...
  pages/
    Home.jsx
    Asgard.jsx
    Society.jsx
    Thor.jsx
    Citations.jsx
  App.jsx
  main.jsx
  app.css
  icon-nav.css
index.html
```
