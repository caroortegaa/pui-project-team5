# PuiProjectTeam5

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.2.

## Project Goal

The goal of this project is to develop a newspaper application with the common functionalities needed
to publish/manage a newspaper web page: show the articles in its main page, show the details of
a given article, filter them according to their category, show the newspaper Twitter timeline,
create and update the articles contents, remove them, etc. Similar web pages can be found in
newspapers webs: https://www.nytimes.com/ or https://www.theguardian.com/.

### Content

In this section we will enumerate the characteristics shared among the application.
- An article will be composed by: tittle, subtitle, category, abstract, body
◦ Title, category and abstract are mandatory, that is, when the user is filling the form to
add/modify the article, it must be validated by the different forms.
◦ Additionally, the server returns a field update_date with the timestamp of the last
modification of the given article.
◦ Depending the request, the image associated to each article are returned in two different
fields:
▪ image_data and image_media_type when the request is asking for one concrete news
▪ thumbnail_data and thumbnail_media_type when the request is asking for a list of
news
- Categories available are: National, Economy, Sports and Technology.
- The web and desktop applications follow the typical CRUD pattern, that is, articles can be created,
read, updated and deleted by the users.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

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
