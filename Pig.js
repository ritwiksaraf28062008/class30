class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.visiblity = 255;
  }



  display(){

    if(this.body.speed<3){

      super.display();
    
    }

else{

   this.visiblity = this.visiblity - 10;
   push();
       tint(255,this.visiblity);
    image(this.image,this.body.position.x,this.body.position.y,50,50)
    World.remove(world,this.body);
    pop();
}

  }
};