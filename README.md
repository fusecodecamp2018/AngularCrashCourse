# Code camp - Angular crash course walkthrough

## Overview on this session and what is covered.
- This is basically Angular 101.  Marvel themed, for the new Avengers Infinity war movie.
- We are going to use the default project Angular's CLI creates, explore basic mechanics of the framework, and expand out the application to showcase each area we cover.

## Orientation
1. What is Angular?
2. Project Creation - Run through of how to install software needed and creating a new project.
3. CLI introduction - Using Angular's command line interface (CLI).
4. Architecture - Explain the directory structure and files within a new Angular project.
### Exercise:
- Use the Angular CLI to create a new application for yourself.
- Find an image from the Infinity War movie online.
- Save the image to the assets folder.
- Replace the angular logo in the AppComponent's HTML template with this image.
- (+1) Adjust the size of the new image and change the background color if you desire.

## Components (Part 1)
1. High level breakdown - The TypeScript class, it's HTML template, it's SCSS styling file, and the unit testing spec file.
2. Data binding - Cover how the HTML template the in the component dynamically updates via bindings the component's support class.
https://angular.io/guide/architecture-components#data-binding
3. Event binding - Cover how you can bind events in your HTML template to interact with logic in the component's TypeScript file.
4. Common Angular additions to add into your HTML templates.
- Repeaters/Iterators: https://angular.io/api/common/NgForOf 
- Conditionals (to show or hide an HTML element and its children): https://angular.io/api/common/NgIf
### Exercise:
- In your the AppComponent Typescript class, create an array for a handful of Avengers from the Infinity war movie.  Each Avenger needs to have their name and their real name in the world of Marvel.
##### Example:
```
avengers: any[] = [
  {"name": "Hulk", "realName": "Bruce Banner"},
  {"name": "Thor", "realName": "Thor Odinson"}
];

```
- In AppComponent's HTML template, replace the unordered list (`<ul>...</ul>`) with an unordered listing of Avengers.  Use a Repeater with the array of Avengers from the previous step to achieve this.
- (+1) Create a class named Avenger with the properties of "name" and "realName".  Update the array created earlier to be an array of the Avenger class rather than an array of raw JavaScript objects.

## Components (Part 2)
1. Component hierarchy - index.html/main.ts->app.module.ts->app.component->...
2. Cover how to embed components in the HTML template of a parent component.
- Input parameters - Cover how a component can accept inputs from the parent.
- Event parameters - Cover how as a practice any data changes you need to emit from a component should be through event parameters.
### Exercise:
- Use the CLI to create a new "avenger" component.
- In AppComponent's HTML template, embed this new component in the the unordered list (`<ul>...</ul>`) repeater you created earlier.
- Pass the given Avenger as an input parameter to the component.
- Update the HTML template for the avenger component so that is displays the name and realName for the given Avenger.

## Routing

### Exercise:
When clicking on any of the avengers in the listing (clicking on a given avengers component), show an image of the given avenger on an area of the page.  The URL at the top of the browser should state: 
http://localhost:4200/avenger/<The Avenger's name here>
Test: when you reload the screen, the avenger selected should still have their image displayed.
