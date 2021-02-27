class Ball
{
constructor(x,y,radius)
{
var options=
{
    restitution:0.1,
    friction:3,
    density:5
}
this.body= Bodies.circle(x,y,radius,options);
this.radius=radius;
this.image = loadImage("toop.png")
World.add(world, this.body);
}

display()
{
 push ()
    ellipseMode(RADIUS);
    strokeWeight(4);
    stroke("green")
    fill ("green");
   image(this.image,this.body.position.x,this.body.position.y,this.radius,this.radius);
   pop ()
}

}