# README.md

DESCRIPTION
“Approv.d” is an interactive dating site where friends and family of the user can “swipe”
for potential matches for the user.  The user has the ability to say yes or no to potential matches
for themselves, but the main feature is that other people swipe for the user.  The application
would be available on iOS, Android, and desktop. It would be a “freemium” service. Users get
five “links” that they can send to whomever they choose via SMS.  Users can pay for more links
in sets of five. Links can be taken away and reallocated however the user feels.

FEATURES
Currently, a user has the ability to login if they already have an account.  If the user does not have an account, they can create one.  The first step is for them to choose whether they are a matchee (person being matched) or a matcher (person who makes matches for a matchee).  If a user comes to the application via a link, they would automatically enter the matcher registration page.
The maybes component displays all other users who match their search criteria and the user is given a chance to click/swipe left for “no” and no match is made, or click/swipe right for “yes” and a half-match is made.  If no is selected, the maybe will not reappear in the maybes list. If yes is selected, the user and the maybe will be logged to the matches table.  The two parties will not be able to communicate with each other unless the maybe also says yes to the original user, and they become a match.  This is a standard feature of dating applications.  
All user types have the chance to navigate to a bio page and upload or change a picture of themselves and edit their bio information.  This information would be available to other users unless the user was blocked.  The Matchers tab shows who has been sent an active link and whether that user has registered. Messaging would be available between matches only.

TEST
The components all come with basic tests generated with the ng n c <component name> call.  I added a test for the matchee-signup component that should validate that what is coming from the DOM submission matches what is being sent to the signUpService and ultimately the database, and that nothing has manipulated the data between the form and the database.


# Approvd

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.17.

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
