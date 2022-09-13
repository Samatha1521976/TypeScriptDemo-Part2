interface IPoint{
    x: number,
    y: number
    
}

let drawPoint14 = (point: IPoint) =>{
    console.log('x is  ' ,point.x)
    console.log('y  is ',point.y)
}

drawPoint14({ x : 1,y : 2})

