/**
 * lol J
 */
//noinspection JSCheckFunctionSignatures,JSCheckFunctionSignatures,JSCheckFunctionSignatures

// (sadly) declare global variables
var phaserGame; // GUI for game
var GameLogic; // underlying logic for GUI
var gameFunctions; // extra functions for GameLogic
var Client; // client.js
var audioSocket; // audio-client.js
var audioConstraints; // audio-client.js
var username = ''; // modal-functions.js
var loggedIn = false; // modal-functions.js

function cleanUpGame() {
  deleteClient();
  initClient();
  deleteGame();
  initGameVars();
}

function createGame() {
  cleanUpGame();
  initGame();
  document.getElementById('welcome-text').innerHTML = '<h1>Hello ' + username + '!</h1>';
  showOrHideGame(true);
}

function tellMainToCheckLogin() {
  if (loggedIn) createGame();
}

function main() {
  // createGame(); // initially don't create a game - only make one if a user actually "joins" a room
  showOrHideGame(false);
}

main();
