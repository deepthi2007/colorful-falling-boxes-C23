class Ground{
    constructor(){
        this.body= Bodies.rectangle(200,350,400,50,{isStatic:true});
        this.width = 400;
        this.height = 50;
        World.add(world,this.body);
    }
    display(){
        var position = this.body.position;
        rectMode(CENTER);
        fill(219, 183, 72);
        rect(position.x,position.y,this.width,this.height);
    }
}