class Rubberband{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.1,
            length: 250,
            damping:0
        }
        this.rubber = Constraint.create(options);
        World.add(world, this.rubber);
        
   }
   display(){
       strokeWeight(10);
       stroke("black")
   }
}