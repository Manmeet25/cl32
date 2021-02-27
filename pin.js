class Pin
{
constructor(x,y,width,height)
{
var options=
{

    restitution:0.1,
    friction:0.3,
    density:0.3,
}
this.body= Bodies.rectangle(x,y,width,height,options);
this.width=width;
this.height=height;
this.image = loadImage("pin.jpg")
World.add(world, this.body);
}

display()
{ 
    var pos= this.body.position;
    var angle= this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill (128, 147, 171);
   image(this.image,0,0, this.width, this.height);
    pop();
}

}