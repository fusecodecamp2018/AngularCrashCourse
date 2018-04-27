# Code camp - Angular crash course walkthrough

## Overview on this session and what is covered.
- This is basically Angular 101.  Marvel themed, for the new Avengers Infinity war movie.
- We are going to use the default project Angular's CLI creates, explore basic mechanics of the framework, and expand out the application to showcase each area we cover.

## 1 - Orientation
- What is Angular?
- Project Creation - Run through of how to install software needed and creating a new project.
- CLI introduction - Using Angular's command line interface (CLI).
- Architecture - Explain the directory structure and files within a new Angular project.
- Component hierarchy - index.html/main.ts->app.module.ts->app.component->...
### Exercise:
- Use the Angular CLI to create a new application for yourself.
- Find an image from the Infinity War movie online.
- Save the image to the assets folder.
- Replace the angular logo in the AppComponent's HTML template with this image.
- (+1) Adjust the size of the new image and change the background color if you desire.

## 2 - Basics
- High level breakdown - The TypeScript class, it's HTML template, it's SCSS styling file, and the unit testing spec file.
- Data binding - Cover how the HTML template the in the component dynamically updates via bindings the component's support class.
https://angular.io/guide/architecture-components#data-binding
- Repeaters/Iterators - https://angular.io/api/common/NgForOf 
### Exercise:
- Create a TypeScript class named Avenger with the properties of "name", "realName".
- In your the AppComponent Typescript class, create an array for a handful of Avengers from the Infinity war movie.
##### Example:
```
avengers: Avenger[] = [
  new Avenger('Hulk', 'Bruce Banner'),
  new Avenger('Thor', 'Thor Odinson')
];
```
- In AppComponent's HTML template, replace the unordered list (`<ul>...</ul>`) with an unordered listing of Avengers.  Use a Repeater with the array of Avengers from the previous step to achieve this.

## 3 - Components (inputs)
- Rehash the CLI on component generation and also the artifacts that a component is composed of.
- Cover how to embed components in the HTML template of a parent component.
- Input parameters - Cover how a component can accept inputs from the parent.
### Exercise:
- Use the CLI to create a new "avenger" component.
- In AppComponent's HTML template, embed this new component in the the unordered list (`<ul>...</ul>`) repeater you created earlier.
- Pass the given Avenger as an input parameter to the component.
- Update the HTML template for the avenger component so that is displays the name and realName for the given Avenger.

## 4 - Bindings
- We have bindings in place now which sends the avengers array down into a repeated Avenger component.  Tons of events can happen in web applications which would trigger these bindings to change.  Here we're going to cover scenariwhen someone clicks on one of these avengers.
- Event binding (click) - Cover how you can bind events in your HTML template to interact with logic in the component's TypeScript file.
https://angular.io/guide/user-input#user-input
- Property bindings - We've covered Input and Event bindings so far.  The third is property bindings and this is where the changes from these other two events can radiate to the page the changes they try to affect.  The bottom line is you can use the data made public in your typescript and the event bindings in your HTML templates to really affect change in what is seen on screen when you tie them into property bindings.
https://toddmotto.com/ng-class-angular-classes
### Exercise
- Update the avenger listing `li` list item in your AppComponent with a click binding.  When the click event fires, set in the AppComponent TypeScript class, a "selectedAvenger" class variable to the avenger that the user clicked on.
- Update the same list item so that if the avenger it is handling is the same as the selectedAvenger from the previous step, the display this avenger differently than the rest.


## 4 - Component (outputs/emitters)
- Event parameters - Cover how as a practice any data changes you need to emit from a component should be through event parameters.
https://angular.io/guide/component-interaction#parent-listens-for-child-event








4. Common Angular additions to add into your HTML templates.

- Conditionals (to show or hide an HTML element and its children): https://angular.io/api/common/NgIf


## Routing

### Exercise:
When clicking on any of the avengers in the listing (clicking on a given avengers component), show an image of the given avenger on an area of the page.  The URL at the top of the browser should state: 
http://localhost:4200/avenger/<The Avenger's name here>
Test: when you reload the screen, the avenger selected should still have their image displayed.
