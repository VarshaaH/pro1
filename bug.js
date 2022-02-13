class Bug
{
  constructor(x, y, w,h) 
  {
    let options = {
     isStatic:false,
     restitution :0,
     density:1.5,
     friction:1.5

    };
    
    this.body = Bodies.rectangle(x, y, w, h,options);
    this.x =x
    this.y =y
    this.w = w;
    this.h = h;
    this.image = loadImage('bugStanding.png')
    World.add(world, this.body);
  }
  
  
   

  show() {

    /*if (keyIsDown(RIGHT_ARROW) ) {
      this.x += 2;
    }

    if (keyIsDown(LEFT_ARROW) ) {
      this.x -= 2;
    }*/

    let pos = this.body.position;
    push();
    translate(pos.x,pos.y)
   
    imageMode(CENTER);
    
    image(this.image,0,0, this.w, this.h);
    pop();
  
}}
