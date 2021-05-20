let img;
let imgClone;
let textMask;


class AText {
  constructor() {
    this.x = 50;
    this.y = 50;
  }
  
  display() {
    fill(0);
    textSize(20);
    textStyle(BOLD);
    text("47 promotions presents", 580 + (this.x*0.05), 30 + mouseY*0.2);
    text("the jam", 720 + (this.x*0.07)%width, 55 + mouseY*0.2);
    
    text("friday / july 15, 1977", 655 + (this.x*0.02)%width, 100 + mouseY*0.25);
    text("from 9:00 pm to 1:00 am", 625 +  (this.x*0.05)/width, 125 + mouseY*0.25);
        
    text("with special guests", 655 + (this.x*0.02)%width, 750 + (-mouseY*0.15));
    text("the rezillos & the jolt / $1.50", 550 + (this.x*0.06)%width, 780 + (-mouseY*0.15));
    
  }
  
  
  move(posX, posY, damping) {
    let dif = this.x - posX;
    if (abs(dif) > 1) {
      this.x -= dif/damping;
    }
    dif = this.y - posY;
    if (abs(dif) > 1) {
      this.y -= dif/damping;
    }
  } 
}


class A {
  constructor() {
    this.x = 50;
    this.y = 50;
  }
  
  display() {
    img.fill(0);
    img.textSize(700);
    img.textStyle(BOLD);
    img.text("a", (this.x), (mouseY)%width);
  }
  
  
  move(posX, posY, damping) {
    let dif = this.x - posX;
    if (abs(dif) > 1) {
      this.x -= dif/damping;
    }
    dif = this.y - posY;
    if (abs(dif) > 1) {
      this.y -= dif/damping;
    }
  }
}


class BG {
  constructor() {
    this.x = 50;
    this.y = 50;
  }

  display() {
    img.noStroke();
    img.fill(75, 20, 20); // 55, 20, 50 // 5, 20, 20
    img.ellipse((this.x) + 400, (mouseY*0.5)%height, 300, 300);
  }
  
  move(posX, posY, damping) {
    let dif = this.x - posX;
    if (abs(dif) > 1) {
      this.x -= dif/damping;
    }
    this.dif = this.y - posY;
    if (abs(dif) > 1) {
      this.y -= dif/damping;
    }
  }
}



class MText {
  constructor() {
    this.x = 50;
    this.y = 50;
  }


  move(posX, posY, damping) {
    let dif = this.x - posX;
    if (abs(dif) > 1) {
      this.x -= dif/damping;
    }
    dif = this.y - posY;
    if (abs(dif) > 1) {
      this.y -= dif/damping;
    }
  }



  display() {
    colorMode(HSB);
    background(this.y*0.5, 10, 50); // this.y*0.1);

    translate(mouseX*0.07, mouseY*0.07);
    textMask.textSize(600);
    textMask.textStyle(BOLD);
    textMask.blendMode(DIFFERENCE);
    textMask.text("jm", 100, (height*0.6)-70);
    img.background(255);    
  }
}



let mt1 = new MText(1, 134.0, 10.0, 60.0);
let bg1 = new BG();
let a1 = new A();
let atext1 = new AText();



function setup() {
  createCanvas(windowWidth, windowHeight);
  //background(150);
  textMask = createGraphics(width, height);
  img = createGraphics(width, height);
}

function draw() {
   mt1.display();
   bg1.display();
   a1.display();
   atext1.display();
   
   
   bg1.move(mouseX-(width/2), mouseY+(height*0.1), 30);
   mt1.move(mouseX-(width/2), mouseY+(height*0.1), 30);
   a1.move(mouseX%(width*0.25) - 50, mouseY+(height*0.025), 50);
   atext1.move(mouseX-(width*5)%width, mouseY+(height*0.5), 130);

   // blendMode(DIFFERENCE); 
   // blendMode(REPLACE);
   
  (imgClone = img.get()).mask(textMask.get());
  image(imgClone, 100, 200);
  
}
