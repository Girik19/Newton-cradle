class Rope{
    constructor(bodyA,bodyB,offsetX,offsetY){
        offsetX=this.offsetX
        offsetY= this.offsetY
            var options={
            bodyA:bodyA,
            bodyB:bodyB,
            pointB:{x:offsetX, y:offsetY}
        }
        //console.log(options)
        this.rope=Constraint.create(options)
        World.add(world,this.rope)
    }
display(){
    var pointA=this.rope.bodyA.position;
    var pointB=this.rope.bodyB.position;

    strokeWeight(4);

    var Anchor1X=pointA.x
    var Anchor1Y=pointA.y

    var Anchor2X=pointB.x+this.offsetX
    var Anchor2Y=pointB.y+this.offsetY

    line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
}
        
}