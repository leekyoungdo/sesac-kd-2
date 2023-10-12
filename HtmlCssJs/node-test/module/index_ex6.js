// const {add} = require("./math_ex6.js")


// import add from "./math_ex6.js"
// math_es6파일에서 default로 export 하고 있는 식별자를 add2라는 식별자로 받아옴
//console.log(add2(2, 3));


// import{ add, minus } from "./math_ex6.js"
// console.log(add(2, 3));
// console.log(minus(4, 3));
// console.log(minus(1, 3));

// es6 문법에서 모듈 import할 때, 구조분해 없이 식별자를 만들 만들어서 받아오는 방법은
// module 파일(math_es6.js) 에 default로 export 하는 값이 있어야 함
// import math from "./math_ex6.js";
// console.log(math) //= PI값


import math from "./math_ex6.js";
console.lol(math.add(2, 3))