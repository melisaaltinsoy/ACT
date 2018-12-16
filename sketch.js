var inc = 0.07;
var scl = 8; //scale
var cols, rows;

var zoff=0;

var particle = [];

function setup() {
  createCanvas(screen.width, screen.height);
  
  //pixelDensity(1); //we did for mac retina WHEN WE USE PIXEL FUNCTION
  cols = floor((width)/scl);
  rows = floor((height)/scl);
  
  //particle[0] = new Particle();
}

function draw() {
  background(0);
  
  var yoff = 0;
  
 
  for(var x = 0; x<rows; x++) {
      var xoff = 0;
      for(var y = 0; y<cols; y++) {
        var index = (x + y*width)*4;
        var angle = noise(xoff,yoff,zoff)*TWO_PI;
        //var v = createVector();
        var v = p5.Vector.fromAngle(angle);
        xoff += inc;
        //fill(random(255));
        //fill(r);
        //rect(x*scl, y*scl, scl, scl);
        stroke(255);
        push();
        translate(x*scl,y*scl);
        rotate(v.heading());
        line(0,0,scl,0);
        
        pop();
      }
    yoff += inc;
    
    zoff += 0.001;
  }  
  
  //particle[0].update();
  //particle[0].show();
 
  
}
