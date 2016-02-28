# Mamooplate

Boilerplate that I used often for my future projects.

Included:
- Project folder structure
- Bourbon
- sass-boilerplate
- Mamoo (For now only bootstrap responsive mixins)
- Bootstrap
- jQuery
- Font Awesome
- HTML Ipsum
- Gulp task and moreeeee just look at gulpfile.js

## Note for Gulp Users
Yeay!! Let the gulp do the magic for you!
Don por get to install node-js first and `npm install` of course

## Ideal usage

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
