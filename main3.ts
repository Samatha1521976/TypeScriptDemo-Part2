{
class Point{
    
   constructor(public x? : number,public y? : number){
        this.x=x;
        this.y=y;
    }
    draw(){
        console.log('x : ' + this.x + 'y: ' + this.y)
    }
    getDistance(anotherpoint : Point)
    {
        console.log('x is  ' ,anotherpoint.x)
    console.log('y  is ',anotherpoint.y)
    }
}

let point :Point = new Point();
point.x=35
point.y=345
point.draw();
point.getDistance(point);

}