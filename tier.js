class Tier{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.3,
            length: 10
        }
        this.pointB=pointB;
        this.tier = Constraint.create(options);
        World.add(world, this.tier);
    }
    fly()
    {
        this.tier.bodyA= null;
    }
    display(){
        if(this.tier.bodyA)
        {
        var pointA = this.tier.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        fill(3,4,6)
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}
    
}