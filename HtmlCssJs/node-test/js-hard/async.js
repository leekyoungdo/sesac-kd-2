// function goMart () {
//     console.log("마트에 가서 어떤 음료를 살지 고민한다.")
// }


// let product
// let price


// function pickDrink(cb){
//     setTimeout(function(){
//         console.log("고민끝!!");
//         product = "제로콜라";
//         price = 2000;
//         cb(product, price)
//     }, 3000)
// }

// function pay (product, price){
//     console.log(`상품명: ${product}, 가격: ${price}`)
// }

// goMart();
// pickDrink(pay);
// // pay(product, price);
// -----------------------promise------------------------


// function goMart () {
//     console.log("마트에 가서 어떤 음료를 살지 고민한다.")
// }


// let product
// let price


// function pickDrink(){
//     return new Promise(function(resolve, reject){
//         setTimeout(function(){
//             console.log("고민끝!!");
//             product = "제로콜라";
//             price = 2000;
//             resolve();
//         }, 3000);
//     })

// }

// function pay (product, price){
//     console.log(`상품명: ${product}, 가격: ${price}`)
// }

// goMart();
// pickDrink().then(() => {
//     pay(product, price);
// });
// pay(product, price);

// --------------------------콜백지옥 예시 ----------------------------
// function add(n1, n2, cb) {
//     setTimeout(function () {
//       let result = n1 + n2;
//       cb(result);
//     }, 1000);
//   }
  
//   function mul(n, cb) {
//     setTimeout(function () {
//       let result = n * 2;
//       cb(result);
//     }, 700);
//   }
  
//   function sub(n, cb) {
//     setTimeout(function () {
//       let result = n - 1;
//       cb(result);
//     }, 500);
//   }
  
//   add(4, 3, function (x) {
//     console.log("1: ", x);
//     mul(x, function (y) {
//       console.log("2: ", y);
//       sub(y, function (z) {
//         console.log("3: ", z);
//       });
//     });
//   });

//   -----------------------------promise 변경------------------------------------

//   function add(n1, n2) {
//     return new Promise((resolve)=>{
//         setTimeout(function () {
//             let result = n1 + n2;
//             resolve(result)
//           }, 1000);
//     })
//   }
  
//   function mul(n) {
//     return new Promise((resolve)=>{
//         setTimeout(function () {
//             let result = n * 2;
//             resolve(result)
//           }, 700);
//     })
//   }
  
//   function sub(n) {
//     return new  Promise((resolve)=>{
//         setTimeout(function () {
//             let result = n - 1;
//             resolve(result)
//           }, 500);
//     })
//   }
  
//   add(4,3).then((result) => {
//     console.log("1:", result);
//     return mul(result)
//   })
//   .then((result) => {
//     console.log("2:", result)
//     return sub(result)
//   })
//   .then((result)=>{
//    console.log("3:", result) 
//   })
//   .catch((err) =>{
//     console.log(err);
//   });


//   ----------------------Promise 기반 (async / await) ------------------------

//   async function add(n1, n2) {
//     return new Promise((resolve)=>{
//         setTimeout(function () {
//             let result = n1 + n2;
//             resolve(result)
//           }, 1000);
//     })
//   }
  
//   async function mul(n) {
//     return new Promise((resolve)=>{
//         setTimeout(function () {
//             let result = n * 2;
//             resolve(result)
//           }, 700);
//     })
//   }
  
//   async function sub(n) {
//     return new  Promise((resolve)=>{
//         setTimeout(function () {
//             let result = n - 1;
//             resolve(result)
//           }, 500);
//     })
//   }

  
//   add(4,3).then((result) => {
//     console.log("1:", result);
//     return mul(result)
//   })
//   .then((result) => {
//     console.log("2:", result)
//     return sub(result)
//   })
//   .then((result)=>{
//    console.log("3:", result) 
//   })
//   .catch((err) =>{
//     console.log(err);
//   });

// 1. async 함수는 Promise를 return.
// 2. await 키워드는 async 함수 내부에서만 사용이 가능하다.
// async function exec() {
//     const x = await add(4, 3); // x = 7
//     console.log("1:", x)
//     const y = await mul(x) // x = 14
//     console.log("2:", y)
//     const z = await sub(y) // z = 13
//     console.log("3:", z)
    
    
// }

// exec()

// function test() {
//     await
// }

// function goMart () {
//     console.log("마트에 가서 어떤 음료를 살지 고민한다.")
// }


// let product
// let price


// async function pickDrink(){
//     return new Promise(function(resolve, reject){
//         setTimeout(function(){
//             console.log("고민끝!!");
//             product = "제로콜라";
//             price = 2000;
//             resolve();
//         }, 3000);
//     })

// }

// function pay (product, price){
//     console.log(`상품명: ${product}, 가격: ${price}`)
// }

// goMart();
// pickDrink().then(() => {
//     pay(product, price);
// });
// pay(product, price);


// async function exec(){
//     goMart()
//     await pickDrink()
//     pay(product,price)
// }
// exec();