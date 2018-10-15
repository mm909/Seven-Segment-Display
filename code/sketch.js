// Mikian Musser
// https://p5js.org/reference/

var display;
var x = 0;
var y = 0;
var segWidth = 100;
var segHeight = 25;
var buffer = 20;
var displayNum = 3;
var startNum = 0x0;

function setup(){
  createCanvas(600,500);
  display = new Display(x,y,segWidth,segHeight,buffer,displayNum,startNum);
  frameRate(5);
}

function draw(){
  background(151);
  display.show();
  display.incValue();
}

function Display(x_,y_,w_,h_,b_,numSegs_,startNum) {
  this.x = x_;
  this.y = y_;
  this.width = w_;
  this.height = h_;
  this.buffer = b_;
  this.numSegs = numSegs_;
  this.digets = [];
  this.startNum = startNum;
  this.num = startNum;

  for(var i = 0; i < this.numSegs; i++){
    this.digets[i] = new sevenSeg(this.buffer + (this.width + this.height * 2 + this.buffer) * i, this.buffer, this.width, this.height,"0")
  }

  this.incValue = function(){
    this.num++;
    this.setValues(this.num)
  }

  this.setValues = function(num){
    var j = 0;
    for(var i = this.numSegs - 1; i >= 0; i--){
      this.digets[i].setArrayIndex((num >> (4 * j)) & 0xf);
      j++;
    }
  }
  this.setValues(this.startNum);


  this.show = function() {
    for (var i = 0; i < this.digets.length; i++) {
      this.digets[i].show();
    }
  }
}

function sevenSeg(x_,y_,w_,h_,s_) {
  this.x = x_;
  this.y = y_;
  this.width = w_;
  this.height = h_;
  this.numArray = [0x3F,0x06,0x5B,0x4F,0x66,0x6D,0x7D,0x07,0x7F,0x6F,0x77,0x7C,0x39,0x5E,0x79,0x71];
  this.numArrayIndex = 0;
  this.offsets = [[this.height,0,0],
                  [this.width + this.height,this.height,1],
                  [this.width + this.height,this.height * 2 + this.width,1],
                  [this.height, this.height * 2 +this.width *2,0],
                  [0,this.height *2 + this.width,1],
                  [0,this.height,1],
                  [this.height,this.height + this.width,0],
                  [0,0,0]];

  if(s_){
    switch (s_) {
      case "0":
        this.numArrayIndex = 0;
        break;
      case "1":
        this.numArrayIndex = 1;
        break;
      case "2":
        this.numArrayIndex = 2;
        break;
      case "3":
        this.numArrayIndex = 3;
        break;
      case "4":
        this.numArrayIndex = 4;
        break;
      case "5":
        this.numArrayIndex = 5;
        break;
      case "6":
        this.numArrayIndex = 6;
        break;
      case "7":
        this.numArrayIndex = 7;
        break;
      case "8":
        this.numArrayIndex = 8;
        break;
      case "9":
        this.numArrayIndex = 9;
        break;
      case "a":
      case "A":
        this.numArrayIndex = 10;
        break;
      case "b":
      case "B":
        this.numArrayIndex = 11;
        break;
      case "c":
      case "C":
        this.numArrayIndex = 12;
        break;
      case "d":
      case "D":
        this.numArrayIndex = 13;
        break;
      case "e":
      case "E":
        this.numArrayIndex = 14;
        break;
      case "f":
      case "F":
        this.numArrayIndex = 15;
        break;
      default:
        this.numArrayIndex = 0;
    }
  }
  this.key = this.numArray[this.numArrayIndex];

  this.incKey = function(){
    this.numArrayIndex++;
    this.key = this.numArray[this.numArrayIndex % this.numArray.length]
  }

  this.setKey = function(num){
    this.key = num;
  }

  this.setArrayIndex = function(num){
    this.numArrayIndex = num;
    this.key = this.numArray[this.numArrayIndex];
  }

  this.getState = function(num) {
    return((this.key >> num) & 1);
  }

  this.show = function() {
    noStroke();
    for(var i = 0; i < 7; i++){
      var tx = this.x + this.offsets[i][0]
      var ty = this.y + this.offsets[i][1]
      var tw = this.width;
      var th = this.height;
      if(this.offsets[i][2] == 1) {
        var tt = tw;
        tw = th;
        th = tt;
      }
      if(this.getState(i)){
        fill(255,50,50);
      } else {
        fill(255,100,100,25);
      }
      rect(tx,ty,tw,th)
    }
    // noFill()
    // rect(this.x,this.y,this.height * 2 + this.width,this.height * 3 + this.width * 2)
  }
}
