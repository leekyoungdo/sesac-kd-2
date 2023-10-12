const add = (a,b)=>a + b;
const minus = (a,b)=>a - b;
const PI =  3.14;

// 1) 1개만 내보낼 경우
// module.export = add
// export default add

// 2) 여러개 내보낼 경우
// module.export = {
//     add,
//     minus,
// };


// export default PI
export {add, minus} 