class Box2{
    constructor(x,y,width,height){
        var options = {
            isStatic : false,
            restitutions : 0.7,
            friction:0.6
        }
        this.body = Bodies.rectangle(x,y,width,height,options)
        this.width = width
        this.height = height
        World.add(world,this.body)
    }
    display(){
      var pos = this.body.position
      //var angle = this.body.angle
      push()
      rectMode(CENTER)
      //rotate(angle)
      translate(pos.x,pos.y)
      fill("red")
      stroke("white")
      strokeWeight(4)
      rect(0,0,this.width,this.height)
      pop()
    }
}