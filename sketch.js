var recordPI = 0;
var pointInCircle = 0;
var pointOutOfCircle = 0;

function setup() {
    createCanvas(2000, 2000);
    background(0);
    ellipse(width / 2, width / 2, width, width);
    stroke(180, 252, 0);
    strokeWeight(2);
}

function draw() {
    for (var i = 1; i < 1000; i++) {
        var coordX = random(width);
        var coordY = random(width);
        point(coordX, coordY);
        if (pow((coordX - width / 2), 2) + pow((coordY - width / 2), 2) <= pow(width / 2, 2)) {
            point(coordX, coordY);
            pointInCircle++;
        } else {
            pointOutOfCircle++;
        }
    }
    var piCalculated = pointInCircle / (pointInCircle + pointOutOfCircle) * 4;

    var recordDiff = Math.abs(Math.PI - recordPI);
    var diff = Math.abs(Math.PI - piCalculated);
    if (diff < recordDiff) {
        recordDiff = diff;
        recordPI = piCalculated
        console.log(recordPI);
    }
}