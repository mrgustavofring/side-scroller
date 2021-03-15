// Daniel Shiffman
// https://www.kadenze.com/courses/the-nature-of-code
// http://natureofcode.com/
// Session 2: Array of Particles, multiple forces

function Person(img) {
  this.pos = createVector(10, height - 700);
  this.vel = createVector(0, 0);
  this.acc = createVector(1, 0);
  this.pic = img;
  this.score = 0;
  // this.mass = m;

  this.applyForce = function(force) {
    this.acc.add(force);
  }

  this.update = function() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }

  this.display = function() {
    fill(25, 150, 30);
    stroke(255);
    textSize(50);
    text("Metal: " + this.score, this.pos.x, 100);
    rect(this.pos.x, this.pos.y, 50, 40);
    image(this.pic, this.pos.x, this.pos.y, 50, 40);
  }

  this.edges = function() {
    if (this.pos.y > height - 50) {
      this.vel.y = -10;
      this.pos.y = height - 50;
    }

    // if (this.pos.x > width) {
    //   this.vel.x *= -1;
    //   this.pos.x = width;
    // }
  }

  this.hits = function(obs) {
    if ((obs.pos.x >= this.pos.x && obs.pos.x <= (this.pos.x + 40)) &&
      (obs.pos.y >= this.pos.y && obs.pos.y <= (this.pos.y + 40))) {
      obs.pos.y = -400;
      this.score++;
    }
  };

}
