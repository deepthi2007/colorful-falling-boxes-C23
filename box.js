class Box{
    constructor(x,y,w,h,color){
        var option1 = {
           friction:0.5,
           restitution:0.6,
           density:1
        }
        this.body = Bodies.rectangle(x,y,w,h,option1);
        this.width = w;
        this.height = h;
        this.color = color;
        World.add(world,this.body);
    }
    drawing(){
        var position = this.body.position;
        rectMode(CENTER);
        fill(this.color);
        rect(position.x,position.y,this.width,this.height);
    }
}

