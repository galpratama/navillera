# Navillera Frontend

Simple and easy to use front-end boilerplate with hot reloading for kickstart your project

## What's included?
- Clean and organized folder structure. (From sass-guidelin.es)
- sass-boilerplate (by HugoGiraudel)
- Bourbon Mixin
- Bootstrap Responsive Mixins (respondto)
- Bootstrap
- jQuery
- Font Awesome
- BrowserSync (autoreload html,css,php)
- SASS compile (using node-sass)
- CSS Minify
- Autoprefixr
- Source maps (css)
- Image minify
- Icon font generator from svg placed in `icons` folder

## How to use?
1. Clone this repo
2. Run `npm install` (you must have node.js and npm installed first).
3. Run `gulp` to start.
4. Done!

## Folder structure

```
styles/
|
|– base/
|   |– _reset.scss       # Reset/normalize
|   |– _typography.scss  # Typography rules
|   …                    # Etc.
|
|– components/
|   |– _buttons.scss     # Buttons
|   |– _carousel.scss    # Carousel
|   |– _cover.scss       # Cover
|   |– _dropdown.scss    # Dropdown
|   …                    # Etc.
|
|– layout/
|   |– _navigation.scss  # Navigation
|   |– _grid.scss        # Grid system
|   |– _header.scss      # Header
|   |– _footer.scss      # Footer
|   |– _sidebar.scss     # Sidebar
|   |– _forms.scss       # Forms
|   …                    # Etc.
|
|– pages/
|   |– _home.scss        # Home specific styles
|   |– _contact.scss     # Contact specific styles
|   …                    # Etc.
|
|– themes/
|   |– _theme.scss       # Default theme
|   |– _admin.scss       # Admin theme
|   …                    # Etc.
|
|– utils/
|   |– _variables.scss   # Sass Variables
|   |– _functions.scss   # Sass Functions
|   |– _mixins.scss      # Sass Mixins
|   |– _helpers.scss     # Class & placeholders helpers
|
|– vendors/
|   |– _bootstrap.scss   # Bootstrap
|   |– _jquery-ui.scss   # jQuery UI
|   …                    # Etc.
|
|
-– main.scss             # Main Sass file
```
