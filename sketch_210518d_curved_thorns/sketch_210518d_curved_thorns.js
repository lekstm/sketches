let noiseMax = 1.5;
let phase = 0;
let zoff = 0;
let fade = 0;


function setup() {
  createCanvas(windowWidth, windowHeight);
  // background(255);

}


function draw() {
  background(0, 11);
  
  noCursor();
  background('rgba(10,10,10,0.1)');
  

  
  fill(0, 12);
  //rect(0, 0, width, height);
  
  
  // fill(0);
  // translate(width/2, height/2);
  
  translate(mouseX, mouseY);
  //colorMode(HSB);
  strokeWeight(3);
  stroke(100, mouseX/15, mouseY);
  noFill();
  let t = 0;
  
  beginShape();
  for(let i = 0; i < TWO_PI; i += 0.1){
    let xoff = map(cos(i), -10, 1, 0, noiseMax); // let xoff = map(cos(i), -1, 1, 0, noiseMax);
    let yoff = map(sin(i + phase*0.05), -1, 1, 0, noiseMax);
    
    //let r = map(noise(xoff, yoff, zoff), 0, -1, 1, 200);
    let r = map(noise(xoff, yoff, zoff), 0, mouseY*0.001, mouseX*0.5, 200);
    let x = r * cos(i);
    let y = r * sin(i);
    
    
    curveVertex(x, y);
    curveVertex(x * 2, y * 2);
    
    
    // curveVertex(x, y);
    //curveVertex(x, y);
    
    // curveVertex(x, y - r);
    // curveVertex(x, y * zoff);
    
    //curveVertex(phase*0.05, y);
    //curveVertex(x, phase*0.05);
    t += 0.01;
    
  }
  endShape(CLOSE);

  
  zoff += 0.01;
  phase += 0.09;
  // noLoop();
  // background(255, 1);
  
}
