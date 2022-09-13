/*let drawPoint = (x,y) => console.log(`x=${x}  y=${y}`) 
drawPoint(10,20)*/

/*let drawPoint = (x:number,y:number) => console.log(`x=${x}  y=${y}`) 
drawPoint(10,20)*/

/*
let point={
x:10,
y:20
}

let drawPoint2 = (point) =>{
   console.log(`x is  ${point.x}`)
   console.log(`y  is ${point.y}`)
}

drawPoint2(point)

drawPoint2({ x : 1, y : 2})


let drawPoint3 = (point: { x: number ,y: number}) =>{
    console.log('x is  ' ,point.x)
    console.log('y  is ',point.y)
}

drawPoint3({ x : 1, y : 2})
*/

let drawPoint8 = (point: { x: number ,y: number,z: number}) =>{
    console.log('x is  ' ,point.x)
    console.log('y  is ',point.y)
    console.log('y  is ',point.z)
}

drawPoint8({x : 1 , y : 2 , z : 3})

