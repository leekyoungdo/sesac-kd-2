class Shape{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    getArea(){
        console.log(`넓이는${this.width* this.height} 입니다.`)
    }
}

let rec1 = new Shape(3, 4);
rec1.getArea();



class Rectangle extends Shape {
    constructor(width, height){
        super(width, height)
    }
    diagonal(){
        const ares = this.width ** 2 + this.height **2
        console.log(`직사각형의 대각선 길이는 ${Math.sqrt(ares)} 입니다.`)
    }
}
const rec2 = new Rectangle(3, 4)
rec2.diagonal();



class Triangle extends Shape {
    constructor(width, height){
        super(width, height)
    }
    diagonal(){
        const ares = this.width * this.height / 2
        console.log(`삼각형의 넓이는 ${ares} 입니다.`)
    }
}
const rec3 = new Triangle(3, 4)
rec3.diagonal();