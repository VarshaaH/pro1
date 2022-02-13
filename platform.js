class Platform {
    constructor(x, y, width, height) {
     var options ={
         restitution:0.8,
         friction:1,
         density:1

     }
      //this.animation = boatAnimation;
      this.speed = 0.05;
      this.body = Bodies.rectangle(x, y, width, height,options);
      this.width = width;
      this.height = height;
  
      
      
  this.image = loadImage('Platform.png')
      World.add(world, this.body);
    }
    //animate() {
      //this.speed += 0.05;
    //}
  
    
  
    display() {
      var angle = this.body.angle;
      var pos = this.body.position;
     
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, this.boatPosition, this.width, this.height);
      
      pop();
    }
  }
  
  