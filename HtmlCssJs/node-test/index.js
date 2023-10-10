//--------------case 3)-----------------
//파일에서 여러 개의 식별자를 객체 형태로 내보내는 경우
//특정의 식별자만 필요한 경우(add,PI) 모듈을 받아올 때
//
const { add,PI } = require("./math.js");

const sum = add(1, 3);
console.log(sum);
console.log(PI) // 오류

//--------------case 2)------------------
//파일에서 여러 개의 식별자를 객체 형태로 내보내는 경우
//모듈에서 받아올 때 객체를 그대로 math라는 식별자로 받음
// const math = require("./math.js")

// const sum = math.add(3, 5);
// const minus = math.minus(4, 8)
// console.log(sum)
// console.log(math.PI)
// console.log(minus)




//--------------case 1)-----------------
// 파일에서 한개의 식별자만 내보내는 경우
// const add =  require("./math.js")
// 모듈을 불러오는 함수  그 값을  add 에 담는다
// const sum = add(2, 3);
// console.log(sum);