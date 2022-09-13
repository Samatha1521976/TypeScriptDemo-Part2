{
class Point{
    
    constructor(private _x?:number,private _y?:number){
         }

    draw=()=> console.log(`x : ${this._x} y : ${this._y}`)

    /*
    getX(){
        return this.x;
    }
    setX(value){
        if(value===0){
            throw new Error('value cannot be less than 0');
        }
        this.x = value;
    }*/

    get x(){
        return this._x;
    }
    set x(value){
        if(value===0){
            throw new Error('value cannot be less than 0');
        }
        this._x = value;
    }
    
}

let point1:Point = new  Point();
//property
point1.x=100//set
console.log(point1.x)//get
let point2:Point = new  Point(1);
let point3 =new Point(30,40);


point1.draw();
point1.x =30
point1.draw();


point2.draw();
point3.draw();
}