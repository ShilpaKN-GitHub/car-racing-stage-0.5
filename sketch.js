var canvas, backgroundImage;
var gameState = 0, playerCount = 0;
var form, player, game;
var database;

function setup()
{
  scanvas = createCanvas(400, 400);
  database = firebase.database();

  game = new Game();
  game.getState();
  game.start();
}

function draw()
{
}