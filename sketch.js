function setup() {
    createCanvas(400, 400, WEBGL);
      background(0);
  }
  
  function draw() {
    background(0);
    stroke("white");
    fill(18, 53, 36);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.09);
    box(150);
  }
    
  