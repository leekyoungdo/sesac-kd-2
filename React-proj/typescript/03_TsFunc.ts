// // function abc () {
// //     console.log("abc")
// // }

// // 함수 자체의 type -> 함수가 실행되어 결국 return 값
// function sum(a: number, b: number): number {
//   return a + b;
//   // return "hello" // error
// }

// console.log(sum(1, 2));

// // optional 매개변수
// const sum1 = (a: number, b?: number): number => {
//   if (b) return a + b;
//   return a;
// };

// interface Calculator {
//   sum: (a: number, b: number) => number;
//   sub?: () => void;
// }

// const calc: Calculator = {
//   sum: sum,
// };

// function goingOn(): never {
//   while (true) {
//     console.log("go");
//   }
// }
// // void: 함수 자체의 return 값이 없을 때 사용
// // 오버로딩 ? -> 함수의 이름은 같으나, 형태가 다른 함수 (매개변수)
// //
// function hello(num: number, num2: number): void;

// function hello(str: string, str2: string): string;

// function hello(param: number | string, param2?: number | string) {
//   console.log(param);
//   console.log(param2);
//   return param;
// }

// hello(1, 2);
// hello("hello", "world");

function sum1(a: number, b: number): number {
  return a + b;
}

console.log(sum1(5, 11)); // 16

function sum2(...numbers: number[]): number {
  return [...numbers].reduce((a, b) => a + b, 0);
}

console.log(sum2(1, 2, 3, 4, 10)); //20
