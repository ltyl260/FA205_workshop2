function setup() {
  createCanvas(400, 400);
  background(200,200,200);
  duck1 = new Duck(random(width),random(height),random(100));
  duck2 = new Duck(random(width),random(height),random(100));
  duck3 = new Duck(random(width),random(height),random(100));
  duck4 = new Duck(random(width),random(height),random(100));
  duck5 = new Duck(random(width),random(height),random(100));
  duck6 = new Duck(random(width),random(height),random(100));
  duck7 = new Duck(random(width),random(height),random(100));
}

class Duck {
  constructor(x,y,size){
    // duck pos x and y
    this.x = y;
    this.y = x;
    // duck movement gradient
    this.t = random(10);
    this.u = random(10);
    // ducks rgb colour variables
    this.r = 255;
    this.g = 255;
    this.b = 0;
    this.l = size;// unit length to standardise the size of the ducks
    this.grows = 1; //operator to control zoom fucntion
    this.z = random(width/6); //zoom variable for duck zoom rate
  }
  show(){
    // body
    stroke(this.r,this.g,this.b);
    fill(this.r,this.g,this.b);
    circle(this.x,this.y,this.l);
    circle(this.x+(4.5*this.l/5),this.y+(4*this.l/5),this.l);
    ellipse(this.x+(2*this.l/5),this.y+this.l,this.l*2,this.l+(this.l/5));
    //bill
    stroke(this.g, this.b, abs(this.r+100));
    fill(this.g, this.b, abs(this.r+100));
    ellipse(this.x-(2*this.l/5),this.y,(3*this.l/5),this.l/5);
    ellipse(this.x-(1.5*this.l/5),this.y-(this.l/10),(1.5*this.l/5),this.l/10);
    // duck eyes
      //eye white
    stroke(0,0,0);
    fill(0,0,0);
    circle(this.x+(this.l/5),this.y-(this.l/10),(1.1*this.l/5));
      // eye black
    stroke(255,255,255);
    fill(255,255,255);
    circle(this.x+(1.2*this.l/5),this.y-(1*this.l/5),this.l/10);
  }
  move(){
    // movement conditions duck 1
    this.x += this.t;
    if (this.x > width || this.x < 0){
      this.t = this.t * -1;
    }
    this.y += this.u;
    if ((this.y > height || this.y < 0)){ 
      this.u = this.u * -1;
    }
   }
  colour(){
    if ((this.x > width || this.x < 0) || (this.y > height || this.y < 0)){ 
      this.r = random(255);
      this.g = random(255);
      this.b = random(255);
    }
  }
  size (g){
    this.l = g;
  }
  grow(increment, max){
    if (this.l < max){
      this.l += increment;     
    }    
  }
  shrink(increment, min){
    if (this.l > min){
      this.l += -increment;  
    }
  }
  zoom(a,b, increment = 1){ 
    // start size (a) must be smaller than stop size (b)
    if (this.grows == 1){
      this.grow(1,b);
    } 
    if (this.grows == -1) {
     this.shrink(1,a); 
    }
    if (this.l >= b || this.l <= a){
      this.grows = this.grows * -1;
    }
  }
  animate(){
    this.move();
    this.colour();
    this.zoom(this.z,this.z+100);
    this.show();
  }
}

function draw(){  
  // background(200,200,200);
  duck1.animate();
  duck2.animate();
  duck3.animate();
  duck4.animate();
  duck5.animate();
  duck6.animate();
  duck7.animate();
}

