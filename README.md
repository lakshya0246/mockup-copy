# MockupCopy

## Known issues & improvements

I've taken some liberty with the designs, so the reproduction is not 100% accurate.

### Known issues:

**1. All components are loaded into memory on all screen sizes**
Some components are are not needed on mobile but are needed on desktop and vice-versa. However, they're only visually hidden using `display:none`.

**2. Browser compatibility**
Due to time constraints, I only tested it properly on Google Chrome.

**3. Pagination is not implemented**
None of the card lists support pagination

**4. Angular routing not integrated**

**5. Filters are not wired up**
The filter UI for the card lists has not been implemented

**6. Notification count doesn't show up on mobile**

**7. Components do not accept data**
Due to time constraints, I didn't bother to add public APIs to most components and also since because data is hard-coded.

**8. Different notifications types do not have different visual variants/types**

### Improvements:

1. A generic directive or Higher-order-component can be created to add pagination where needed
2. Collapsing and expanding of the applications card can be animated
3. Abstraction of style elements in the form of mixins to allow extension and reduce duplication
4. Better adherence to accessiblity standards in terms of document structure and element attributes

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
