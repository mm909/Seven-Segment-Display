function Display(x_, y_, w_, h_, b_, numSegs_, startNum_) {

  this.x = x_;
  this.y = y_;
  this.width = w_;
  this.height = h_;
  this.buffer = b_;
  this.numSegs = numSegs_;
  this.startNum = startNum_;

  this.num = this.startNum;
  this.digets = [];

  console.log("Initializing 7 seg display with:");
  console.log("x         : " + this.x);
  console.log("y         : " + this.y);
  console.log("width     : " + this.width);
  console.log("height    : " + this.height);
  console.log("buffer    : " + this.buffer);
  console.log("segments  : " + this.numSegs);
  console.log("start Num : " + this.startNum);

  for (var i = 0; i < this.numSegs; i++) {
    this.digets[i] = new sevenSeg(
      this.x + this.buffer + (this.width + this.height * 2 + this.buffer) * i,
      this.y + this.buffer,
      this.width,
      this.height,
      "0")
  }

  this.show = function() {
    for (var i = 0; i < this.digets.length; i++) {
      this.digets[i].show();
    }
  }

  this.showRect = function() {
    var tw = (this.buffer + this.width + this.height * 2) * this.numSegs + this.buffer;
    var th = (this.buffer + this.width * 2 + this.height * 4);
    noFill();
    stroke(255, 100, 100)
    rect(this.x, this.y, tw, th)
  }

  this.incValue = function() {
    this.num++;
    this.setValues(this.num)
  }

  this.setValues = function(num) {
    var j = 0;
    for (var i = this.numSegs - 1; i >= 0; i--) {
      this.digets[i].setArrayIndex((num >> (4 * j)) & 0xf);
      j++;
    }
  }
}