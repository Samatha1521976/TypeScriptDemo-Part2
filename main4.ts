export class Point{
    constructor(private _x? : number,private _y? : number){
         this._x=_x;
         this._y=_y;
     }
     get x(){
         return this._x;
     }

     set x(value){
         if(value<0)
         {
             throw new Error('value cannot be less than zero')
         }
         this._x=value
     }
     draw(){
        console.log('x : ' + this._x)
        console.log('y : ' + this._y)
     }
     getDistance(anotherpoint : Point)
     {
      console.log('x is  ' ,anotherpoint._x)
     console.log('y  is ',anotherpoint._y)
     }
 }
   
 


