# VAULTED by JD

React conversion of the Part 7 site, following the class frontend example.

Run `npm install` and `npm start` from `react-01`. Run `npm run build` for the production build.

## Organization

- `src/pages/`: Home, Services, Grading, Vault, Live, About, and three collection previews.
- `src/components/`: shared header, navigation, footer, hero, home sections, contact panel, headings, cards, collection tiles, and card previews.
- Each page/component imports its own CSS. Images are in the `images/` folder of their owning page/component; shared theme and layout utilities live in `src/index.css`.
- `src/App.jsx` defines hash routes, so links and refreshed pages work on GitHub Pages. `Layout.jsx` supplies the shared header/footer and scrolls to collection sections.

## Part 9 scope

All nine Part 7 pages are included. Card lists use reusable components with static props, following the instructor example; no JSON fetching is required. Navigation is vertical and visible on small screens. The home slideshow uses React state. The calendar retains its September 2026 sample label.

Forms and embedded maps are not required yet: the contact panel opens email, and the service-area link opens Google Maps. No form backend or iframe is included.

Reference style: https://github.com/portiaportia/frontend/tree/main/src
