class Paper{
    constructor(x,y,d){
        var options={
            isStatic:false
        }
        this.d=d;
        this.body=Bodies.circle(x,y,this.d/2,options)
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        push()
        translate (pos.x,pos.y)
        fill("red");
        ellipse(0,0,this.d,this.d);
        pop()
    }

}