class Hammer{
    constructor(x,y){
    
        var option={
            'restitution' : 0.5,
            'friction': 1.0,
            'density': 1
        }
        this.body=Bodies.rectangle(x,y,60,25,option);
        World.add(world,this.body);
        
        this.width=60;
        this.height=25;
    }

    display()
    {
        var pos=this.body.position;
        pos.x=mouseX
        pos.y=mouseY
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("yellow");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();     
    }
}
    