var man;
let img, img2;
// let rock;
let rocks = [];
let muzac;

function preload() {

  soundFormats('mp3', 'ogg');
  muzac = loadSound('assets/yt1s.com - engineer gaming.mp3');
}

function setup() {
  mode = 0;
  createCanvas(400, 400);
  
  img = loadImage("eng.jpg");
  img2 = loadImage("metal.png");
  bgrnd = loadImage("assets/2fort.png")
  man = new Person(img);
  // rock = new Obstacle(img2);

  //obstacles
  for (let i = 0; i < 10; i++) {
    rocks[i] = new Obstacle(img2, random(20));
  }
}

function keyPressed() {
  if (keyCode === ENTER) {
    mode = 1;
  }

  if (key == ' ') {
    let force = createVector(0, -20);
    man.applyForce(force);
  }
}

function draw() {
  clear();
  if (mode == 0) {
    background(30, 40, 70)
    textSize(35)
    text('Engineer needs metal,', 25, 200);
    text('press ENTER to start', 32, 250);
  }

  if (mode == 1) {
    background(bgrnd);

    //point of view around "man"
    translate(-man.pos.x + 50, 0);

    let gravity = createVector(0, 1);
    man.applyForce(gravity);



    //the player
    man.update();
    man.display();
    man.edges();

    //an obstacle as a rock
    // rock.update();
    // rock.display();
    // rock.edges();


    //obstacles

    for (let i = 0; i < 10; i++) {
      rocks[i].update();
      rocks[i].display()
      rocks[i].edges();
      man.hits(rocks[i])
    }
    // for (let i = 0; i < 10; i++) {
    //   fill(10);
    //   rect(250+i*160, 350+i, 100, 100);
    // }

  }
  if (mode == 2) {
    background(30, 40, 70);
    textSize(35)
    text("metal packs collected" + '\n' + man.score, 25, 250)
    text("nice going partner", 50, 150)
  }
     if (man.pos.x > 2500) {
    mode = 2;
  } else if (man.pos.x == 15) {
    mode = 1;
  } 
}
