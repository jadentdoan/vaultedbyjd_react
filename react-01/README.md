# VAULTED by JD

React conversion of the Part 7 site, following the class frontend example.

Run `npm install` and `npm start` from `react-01`. Run `npm run build` for the production build.

## Organization

- `src/pages/`: Home, Services, Grading, Vault, Live, About, and three collection previews.
- `src/components/`: shared header, navigation, footer, hero, home sections, contact panel, headings, cards, collection tiles, and card previews.
- Each page/component imports its own CSS. Images are in the `images/` folder of their owning page/component; shared theme and layout utilities live in `src/index.css`.
- `src/App.jsx` defines hash routes, so links and refreshed pages work on GitHub Pages. `Layout.jsx` supplies the shared header/footer and scrolls to collection sections.

## Project features

All nine Part 7 pages are included. Card lists use reusable components with static props, following the instructor example; no JSON fetching is required. Navigation has a JavaScript mobile menu toggle. The home slideshow is coded from scratch with React state, without a slideshow library. The calendar retains its September 2026 sample label.

## Part 10 additions

- The Services contact form matches Part 7, posts to Web3Forms without leaving the page, and reuses Part 7's public access key. The key's existing Web3Forms configuration controls the recipient. Name, email, and message are required; phone is optional. Failed submissions retain the entered details for retry.
- React Hot Toast (`react-hot-toast`) shows sending, success, and error notifications. Success is shown only after Web3Forms confirms acceptance.
- Radix React Dropdown Menu (`@radix-ui/react-dropdown-menu`) provides Services links to the servicing area and Grading, with keyboard support. These are the two additional React libraries for Part 10.
- The About page includes Part 7's lazy-loaded Columbia map iframe, styled for desktop and mobile.

Validation: `npm run build` and `npm test -- --watchAll=false --runInBand`. Contact tests mock the endpoint, so they do not send real emails. Inbox delivery still needs a manual check with the existing Web3Forms account.

Reference style: https://github.com/portiaportia/frontend/tree/main/src
