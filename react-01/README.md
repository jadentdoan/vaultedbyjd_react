# VAULTED by JD — React

Part 8 converts the original site's header into React components.

## Run locally

From `react-01`, run `npm install` if dependencies are missing, then `npm start`.
Run `npm run build` to create a production build.

## Components

- `App` renders `Header`.
- `Header` arranges `AnnouncementBar`, `Logo`, and `Navigation`.
- Each component imports its own class-scoped CSS file.
- `src/index.css` contains shared colors, box sizing, and body defaults.

Below 900px the navigation is vertical and always visible. At 900px and above,
the logo and navigation share a row. No menu toggle is needed for Part 8.

All header links use `#` placeholders until the React pages are ready. The rest of the homepage is intentionally outside this header-only assignment.

Check the header at 320px, 540px, 899px, 900px, and desktop widths, and use Tab to
check the visible keyboard focus indicators.
