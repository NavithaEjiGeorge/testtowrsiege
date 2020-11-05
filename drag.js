//class Polygon{
//    constructor(x,y,width,height){
//        var options = {
//            isStatic : false,
//            restitutions : 0.3,
//            density:2,
//            friction:1
//        }
//        this.body = Bodies.rectangle(x,y,width,height,options)
//        this.width = width
//        this.height = height
//        World.add(world,this.body)
//    }
//    display(){
//      var pos = this.body.position
//      var angle = this.body.angle
//      push()
//      rectMode(CENTER)
//      rotate(angle)
//      translate(pos.x,pos.y)
//      stroke("4")
//      fill("yellow")
//      rect(0,0,this.width,this.height)
//      pop()
//    }
//}
class Polygon{
	constructor(x,y,r){
		var options={
			isStatic:false,
			restitution:0,
			friction:1,
			density:1.2
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
		World.add(world, this.body);

	}
	display(){
			var stonepos=this.body.position;
			var angle = this.body.angle;		
			push()
			translate(stonepos.x, stonepos.y);
			rotate(angle)
			fill(255,0,255)
			imageMode(CENTER);
			ellipseMode(RADIUS)
			ellipse(0,0,this.r*2,this.r*2)
			pop()
			
	}

}