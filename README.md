# PizzaOrder

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.3.

## Project Description

This project is a frontend app demo for using animations between component views and within one view, including sliding to another view, fades, fades up, trajectory move, scales down, and etc.

Specifically, there are two main views: Home and Results view, and Results view has two states: New Result view and Empty Result view. User could order a pizza in the Home view, or preview the pizza order from Home view using "Tell us" and "Results" buttons, respectively.

When "Tell us" button is clicked in the Home view, it will slide to the New Result view, and It's pizza circle and text will fades, then Pizza images will scales down and move to the location where the small pizza icon is in the toolbar. Meanwhile, the number besides the pizza icon in the toolbar is increased by 1.

When "Results" button is clicked in the Home view, it will slide to the Empty Result view, and the tip text will fades up.

When clicking the "Picker" button in either New Result view or Empty Result view, the Home view will slide back.

It is an interesting and fun project to show the beautiful animations and data communication in an Angular project.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
