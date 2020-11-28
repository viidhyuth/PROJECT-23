class Box{
    constructor(x,y,w,h){
       
        this.box=Bodies.rectangle(x,y,w,h,{isStatic:true});
          this.w=w
          this.h=h
          World.add(world,this.box)
    }
    display(){
        var pos=this.box.position
        var angle=this.box.angle
        push()
        translate(pos.x, pos.y)
        angleMode(RADIANS)
        rotate(angle)
        rectMode(CENTER)
       fill(255,0,0)
        rect(0,0,this.w,this.h)
        
        pop()
    }
}