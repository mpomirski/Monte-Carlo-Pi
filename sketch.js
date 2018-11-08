function setup() {
  createCanvas(1000, 1000);
  frameRate(60);
  background(0);
  ellipse(width/2,height/2,width,height);
  stroke(180,252,0);
  strokeWeight(5);
}
var pointInCircle = 0;
var pointOutOfCircle = 0;

function draw() {
  var coordX = random(width);
  var coordY = random(height);
  point(coordX, coordY);
  if (
    pow((coordX-width/2), 2) + 
    pow((coordY-height/2), 2) <= 
    pow(width/2, 2)
    )
    {
    point(coordX, coordY);
    pointInCircle++;
  }
  else{
    pointOutOfCircle++;
  }
var piCalculated = pointInCircle/(pointInCircle+pointOutOfCircle)*4;


  

console.log(piCalculated);
}
