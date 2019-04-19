// Mikian Musser
// https://p5js.org/reference/

var display;
var x = 20;
var y = 150;
var segWidth = 50;
var segHeight = 10;
var buffer = 20;
var displayNum = 6;
var startNum = Math.floor(Date.now() / 1000);

function setup() {
  createCanvas(600, 500);
  display = new Display(
    x,
    y,
    segWidth,
    segHeight,
    buffer,
    displayNum,
    startNum
  );
}

function draw() {
  background(151);
  display.show();
  display.showRect();
  display.setValues();
}