# K-Craft Weaves storefront landing page

Responsive furniture/home-living landing page built with HTML, CSS, Bootstrap 5, and vanilla JavaScript.

## Run locally
1. Extract the ZIP archive.
2. Open `index.html` in a browser, or open the folder in VS Code and use Live Server.
3. Internet is needed for Bootstrap, Bootstrap Icons, Google Fonts, and the sample Unsplash photos.

## Project structure
- `index.html` — navigation, page sections, product cards, images, and links.
- `css/styles.css` — brand palette, typography, layout, effects, and responsive breakpoints.
- `js/main.js` — mobile navigation, navbar shadow, product filters, review slider, copyright year.
- `assets/logo-placeholder.svg` — replaceable woven K logo.
- `assets/favicon.svg` — matching browser tab icon.

## Customise
- Replace `assets/logo-placeholder.svg` with your own SVG logo. Update image paths in `index.html` if using PNG/JPG.
- Replace `assets/favicon.svg` with your own square favicon.
- Edit the CSS variables at the top of `css/styles.css` to change the palette.
- Use the section comments in `index.html` to find content.
- Replace sample images, names, prices, reviews, email, and social URLs before launch.
- Duplicate a `.product-column` in the Featured Products section. Set `data-category` to `seating`, `tables`, or `decor` for filters to work.

## Brand settings
Brown `#8b5e3c`, black `#000000`, beige `#e8dcc6`; Cormorant Garamond for the wordmark/headings and Inter for body text/captions. The navigation links are bold and at least 20px at common desktop widths, with responsive adjustments at narrower breakpoints.

## Note
This is a static front-end template. The contact CTA opens an email app; checkout, payments, and form submissions are not connected to a backend. Product photography, prices, and reviews are sample content.
