# Code camp Angular crash course walkthrough

## Run through of how to install software needed and creating a new project

Install NodeJS
https://nodejs.org/en/

Install Angular's CLI (using NodeJS)
```
npm install -g @angular/cli
```

Create a new angular project
```
cd <YourProjectDirectoryLocation>
ng new my-app --style=scss
```

(Optional) Create Git repository for the project
```
cd my-app
git init
git add -A
git commit -m "Initial commit of the application"
```

Notes:
- NodeJS isn't just needed to install Angular's CLI, it is also inherently used in Angular projects for importing libraries and local hosting the app for development testing.

## Explain the directory structure and files within a new Angular project

#### e2e folder
Contains all of the project's Protractor tests.  Protractor is an end-to-end test framework for Angular and AngularJS applications. Protractor runs tests against your application running in a real browser, interacting with it as a user would.

#### src folder
This folder is where all of your project's source code will reside.  Things like modules, components, and services will be found here.

### Config files

#### .angular-cli.json
This is a configuration file that tells Angular's CLI how you want your project handled.

#### .editorconfig (http://editorconfig.org/)
EditorConfig helps developers define and maintain consistent coding styles between different editors and IDEs. The EditorConfig project consists of a file format for defining coding styles and a collection of text editor plugins that enable editors to read the file format and adhere to defined styles. EditorConfig files are easily readable and they work nicely with version control systems.

#### .gitignore
Assuming you use Git to manage changes with this source code, this file will inform Git what files here should not be tracked.

#### karma.conf.js
Angular applications by default ship with Karma automatically included to support unit testing with your application.

#### package-lock.json & package.json
These files manage the npm packages you import into your application.  If you ever are looking to implement something very complex it is worth checking npm (https://www.npmjs.com/) to see if you can reuse code from other people to get this done.

#### protractor.conf.js
This is a configuration file for Protractor

#### tsconfig.json
Angular projects typically use TypeScript instead of JavaScript.  This is a configuration file to help your IDE and Angular's built process know how to work with your TypeScript files.

#### tslint.json
This is a TypeScript file to tell your IDE what coding style is preferred.  Out of the gate this config file is populated with the settings that the community of developers who built Angular currently is standard.