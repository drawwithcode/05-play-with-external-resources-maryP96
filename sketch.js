var myImage;
var interno;
var esterno;
var mySong;

function preload(){
  // put preload code here
  myImage = loadImage('./assets/mandala-senzadentro.png');
    esterno = loadImage('./assets/mandala_esterno.png');
    interno = loadImage('./assets/fiore_interno.png');
    mySong = loadSound('./assets/Mid-Air_Machine_-_The_Crimson_Trials.mp3');
}

function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES);

  mySong.setVolume(0.5);
  mySong.loop();
  analyzer = new p5.Amplitude();
  analyzer.setInput(mySong);

  button = createButton('pause');
  button.position(width/9, height/9);
  button.mousePressed(stop);

  button = createButton('play');
  button.position(width/30, height/9);
  button.mousePressed(Replay);
}

function draw() {
  // put drawing code here
 background(60);

   var volume = analyzer.getLevel();
      console.log(volume);
     var volume1 = map(volume,0,1,0,600)
     var volume2 = map(volume,0,1,0,height/5)

  push();
  translate(width/2,height/2);
  imageMode(CENTER);
  image(myImage,0,0,myImage.width/3+volume2,myImage.height/3+volume2)
  pop();

push();
fiori1(width/2,height/2,volume1);
pop();

push();
translate(width/2,height/2);
imageMode(CENTER);
image(esterno,0,0,esterno.width/3-volume2,esterno.height/3-volume2)
pop();


  }
  function fiori1(posX, posY, rotation) {
    angleMode(DEGREES); // Change the mode to DEGREES
    push();
      // posX and posY will be used as coordinates for the ellipse
    translate(posX, posY);
    // rotation will be use to set rotation
    rotate(rotation);
    imageMode(CENTER);
    image(interno,0,0,interno.width/3,interno.height/3)
    pop();
  }



  function stop() {
    if(mySong.isPlaying()) {
     mySong.pause();
     }
  }

  function Replay() {
    if (mySong.isPaused()){
     mySong.loop();
     }
   }


  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }
