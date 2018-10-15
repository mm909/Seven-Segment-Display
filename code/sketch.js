// Mikian Musser
// https://p5js.org/reference/

var display;
var x = 100;
var y = 100;
var segWidth = 50;
var segHeight = 10;
var buffer = 20;
var displayNum = 4;
var startNum = 0x00;

function setup() {
  createCanvas(600, 500);
  frameRate(10);
  display = new Display(
    x,
    y,
    segWidth,
    segHeight,
    buffer,
    displayNum,
    startNum);
}

function draw() {
  background(151);
  display.show();
  display.showRect();
  display.incValue();
}