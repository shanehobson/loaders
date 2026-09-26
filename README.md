# LoaderGallery.com

A gallery of CSS loading animations. Pick a color, click an animation, and copy ready-to-use HTML and CSS into your own site or app. This is the source for LoaderGallery.com.

> Built in 2018 with [Alex Totheroh](https://github.com/alextotheroh). This project is not actively maintained, and the LoaderGallery.com domain no longer hosts it.

## Features

- A paginated gallery of 32 CSS loading animations, 24 per page
- A color picker (react-color's `SketchPicker`) that recolors every animation live. You can choose a color visually or type a hex or RGB(A) value.
- Clicking an animation opens a dialog with HTML and CSS tabs. The CSS is generated in the selected color.
- A one-click "Copy" button for each snippet

## Tech stack

- React 16 and Redux (with redux-thunk)
- Material-UI v1
- react-color, react-paginate, react-copy-to-clipboard
- Sass, Webpack 3, and Babel 6

## How it works

Each animation is defined twice under `src/spinners-data/`:

- `components/SpinnerN.js`: the React component rendered in the gallery
- `source/SpinnerNSource.js`: the HTML snippet, plus a function that takes the selected color and returns the CSS

`SpinnerDTOs.js` combines the two into a list keyed by the current color from the Redux store. `HomePage` slices that list for the current page.

## Getting started

The app lives in `loaders-app/`. It depends on `node-sass` 4.5, so it needs an older Node.js release (Node 8 era).

```bash
cd loaders-app
npm install

# Development server
npm run dev-server

# Production build to public/dist
npm run build:prod
```

The production build is a static bundle. Serve `loaders-app/public/` with any static file host.

## Project structure

```
loaders-app/
  src/
    components/        # Gallery, color picker, pagination, source dialog
    spinners-data/
      components/      # Spinner1 ... Spinner32 (rendered previews)
      source/          # Copyable HTML and color-parameterized CSS
      SpinnerDTOs.js
    actions/, reducers/, store/  # Color and pagination state
prototype/             # Early static HTML/CSS mockup
notes.md               # Planning notes
```

## Related

- Portfolio: https://www.shanehobson.me
