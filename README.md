# React Checker Challenge
This is my implementation of a React and Electron coding challenge. It is based on [https://github.com/wwlib/programming-challenge](https://github.com/wwlib/programming-challenge)

# Prerequisites
Install [node.js](https://nodejs.org) on your system.

# Installing dependencies

In the project root run `npm install`. This will download and install into a folder called `node_modules`
all the dependencies listed in
[`package.json`](https://github.com/golgobot/programming-challenge/blob/master/package.json).

# Running using Electron

This project's runtime is [Electron](http://electron.atom.io/). Electron is sort of like Chrome and node.js combined
into one runtime. It allows developers to create desktop applications using web technologies.

`npm install electron-prebuilt -g`

Go to the project root and run `electron .`

# Running the test suite

This implementation comes with a test suite for the components leveraging technologies such as Mocha, Expect, Sinon and React TestUtils.

`npm test`

# The Challenge

Consider a checkerboard of unknown size. On each square is an arrow that randomly points either up, down,
left, or right. A checker is placed on a random square. Each turn the checker moves one square in the direction
of the arrow. Visualize 1) an algorithm that determines if the checker moves off the edge of the board and 2) an algorithm that determines when the checker enters a cycle.

  - Include UI controls to play, stop, and reset the game.
  - Include UI controls to change the size of the board and to shuffle the arrows.
  - Include UI indicators for the checker 1) moving off the board and 2) entering a cycle
  - Include audio to make things more interesting.
  - Add some style to make it look good.
