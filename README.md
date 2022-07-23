# Andys-text-editor-challenge19
## Purpose
The purpose of this challenge was to add methods to the starter code for getting and storing data to an indexedDB database. The appliction is to be a single page installable application which functions offline. And the application was to be deployed on Heroku.
## Installation
To run the application from the terminal just enter **npm start** and the *Now listening on port: 3001* prompt will log in the console. To install the app from the page just click the install tab then click install on the prompt.
## Description
When the editor opens the user is presented with the JATE logo, an install link, and a flashing cursor in the editor. When the user enters text in the editor certain words are presented in a bright red color. These words have significance in Javascript. After the user is finished entering text and the page is refreshed the text is entered into the local storage and the editor is cleared. When the dev tools are opened and the application tab is opened the user can navigate to the indexedDB tab in storage. There the user can find the jate database where the key and value pairs can be found. In the Application tab the user can find the generated manifest and the service worker.

## Technology
- npm             - IndexDB
- Webpack         - Javascript
- WorkBox         - Service Worker
## Lessons
This challenge was a lesson in debugging for me. Most of the code was provided but adding my own code and working through the errors in the terminal was difficult. We covered PWA's in one week but having a semi functioning app to reverse engineer gave me a better understanding of how they work. I intend to add post and delete functionality to this app in the future so I can further my understanding of IndexedD CRUD functions.