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
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    h1 = floor(h / 10)
    h2 = h % 10
    m1 = floor(m / 10)
    m2 = m % 10
    s1 = floor(s / 10);
    s2 = s % 10;
    this.digets[0].setArrayIndex(h1)
    this.digets[1].setArrayIndex(h2)
    this.digets[2].setArrayIndex(m1)
    this.digets[3].setArrayIndex(m2)
    this.digets[4].setArrayIndex(s1)
    this.digets[5].setArrayIndex(s2)

    // var j = 0;
    // for (var i = this.numSegs - 1; i >= 0; i--) {
    //   this.digets[i].setArrayIndex((num >> (4 * j)) & 0xf);
    //   j++;
    // }
  }
}