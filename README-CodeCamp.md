# Code camp Angular crash course walkthrough

Overview on this session and what is covered.
- This is basically Angular 101.  Marvel themed, for the new Avengers: Infinity war movie.
- We are going to use the default project Angular's CLI creates, explore basic mechanics of the framework, and expand out the application to showcase each area we cover.

1. Project Creation - Run through of how to install software needed and creating a new project.
2. CLI introduction - Using Angular's command line interface (CLI)
3. Architecture - Explain the directory structure and files within a new Angular project.
### EXERCISE:
Find an image from the Infinity War movie online, save it to the assets folder, and replace the angular logo in the AppComponent's HTML template with this image.

## Components
4. High level breakdown - The TypeScript class, it's HTML template, it's SCSS styling file, and the class's unit testing spec file.
5. Binding - Cover the relationship on how the HTML the in the component dynamically updates from the component's support class.
6. Inputs - Cover how a component can accept inputs from the parent.
6. Hierarchy from the root - index.html/main.ts->app.module.ts->app.component->...
### EXERCISE:
- Remove the unordered list in the AppComponent's HTML template that displays links.
- Create a array of a handful of Avengers from the Infinity war movie.  Each avenger needs to have a name and any random quote you can find online for them.  Store this array as a public variable in the AppComponent class.
- Use the CLI to create a new "avenger" component.  The component will display the name of the avenger as well as the quote that is available.

## Routing

### EXERCISE:
When clicking on any of the avengers in the listing (clicking on a given avengers component), show an image of the given avenger on an area of the page.  The URL at the top of the browser should state: 
http://localhost:4200/avenger/<The Avenger's name here>
Test: when you reload the screen, the avenger selected should still have their image displayed.
