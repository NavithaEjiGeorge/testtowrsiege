class Box{
    constructor(x,y,width,height){
        var options = {
            isStatic : false,
            restitution : 0.7,
            friction:0.6
        }
        this.body = Bodies.rectangle(x,y,width,height,options)
        this.width = width
        this.height = height
        this.visiblity=255;
        World.add(world,this.body)
    }
    display(){
        console.log(this.body.speed)
        if(this.body.speed>4){
            push()
            this.visiblity=this.visiblity-1
            tint(255,this.visiblity)
            World.remove(world,this.body)
            pop()
        }
        else {
      var pos = this.body.position
      var angle = this.body.angle
      push()
      rectMode(CENTER)
      rotate(angle)
      translate(pos.x,pos.y)
      stroke("4")
      fill("black")
      rect(0,0,this.width,this.height)
      pop()
        }
    }
}