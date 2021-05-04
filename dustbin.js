class DustBin {  
    constructor( x, y, width, height){
        var options = {
            'isStatic' : true
        }
        this.image=loadImage("dustbingreen.png")

        this.bodyb = Bodies.rectangle(x,y, width, height,options );
	    World.add(world, this.bodyb);
        
	 
        
   }
   display(){
       fill("white");
       image(this.image,this.bodyb.position.x, this.bodyb.position.y,this.bodyb.width, this.bodyb.height)
     
   }
}