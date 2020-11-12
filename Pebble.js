class Pebble{
    constructor(x,y,radius){
        var options={
            isStatic:true
        }
        this.body=Bodies.circle(x,y,radius,options);
        this.radius=radius;
        World.add(world,this.body);
    }
    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(RADIUS); 
        fill("green");
        strokeWeight(2);
        ellipse(0, 0, this.radius, this.radius);
        pop();
      }
  }
