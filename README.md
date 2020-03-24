# Snake

## Summary
Snake is one of the first mobile games in development. We will be creating a browser based version using our understanding of OOP and DOM manipulation. This will be your first dynamic, single-page app. It's a game, so have some fun and get creative once the basic functionality is created!

## Learning objectives
  - Using JavaScript to change the look and behavior of the DOM
  - React to user input
  - Utilize object-oriented programming

### NPM
![](https://www.npmjs.com/static/images/npm-logo.svg)

npm stands for **N**ode **P**ackage **M**anager.
It is a way to manage and install your **Server**-side dependencies. We'll get more into this later in the course because there is some technicalities and overlap but for now, `bower` is for client side, `npm` is for server.

## Getting Started

1. First, load the external dependencies with the following commands:
````
npm install
````
**Dependencies are files that other developers have written that you plan to use in your code.**

## Challenges

### Building Snake

1. Three classes have been provided to you

    - Head
    - Body
    - Apple

Because each of the files is included in a script tag on index.html, these three classes are available to our main.js file (which is included AFTER the other script tags). If you need to access classes (or instances of classes) from other classes, you may need to experiment leaving out the `var`, `let`, or `const` keywords. Always be careful when messing with the global scope!

1. Head Class

    - [ ] make the head of the snake be able to turn based on the arrow keys
    - [ ] when the head of the snake reaches a border, end the game

1. Apple Class

    - [ ] the apple should appear randomly on the screen
    - [ ] the apple should appear within the size of the board
    - [ ] remove the apple when the head of the snake reaches the apple
    - [ ] another apple should appear on the screen
    - [ ] the apple should not appear on the snake

## Extension Challenges

1. Head Class
    - [ ] the head of the snake should not be able to move backwards

1. Body Class
    - [ ] add a segment to the snake when the head of the snake reaches an apple
    - [ ] end the game when the snake runs into its own segment

1. Make it your own!
    - [ ] once you've gotten the core functionality down, feel free to have fun! Modify the functionality, look, even sound of your game. Get creative!

## Testing
While we can certainly write tests for this unit, the more intuitive approach is to try playing the game by opening `index.html` in your browser.
