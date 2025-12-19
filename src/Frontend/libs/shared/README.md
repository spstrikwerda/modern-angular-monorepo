# shared

This library contains shared components used across the application.

## Components

### ButtonComponent
A standalone button component that navigates to a specified route when clicked.

**Inputs:**
- `title` (string): The text displayed on the button
- `route` (string): The route to navigate to when clicked

**Usage:**
```html
<lib-button [title]="'Click Me'" [route]="'/some-route'"></lib-button>
```

### ButtonContainerComponent
A standalone container component that provides a flex layout for buttons with content projection.

**Usage:**
```html
<lib-button-container>
  <lib-button [title]="'Button 1'" [route]="'/route1'"></lib-button>
  <lib-button [title]="'Button 2'" [route]="'/route2'"></lib-button>
</lib-button-container>
```

## Running unit tests

Run `nx test shared` to execute the unit tests.
