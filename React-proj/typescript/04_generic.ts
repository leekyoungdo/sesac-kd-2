// Generic
// 기본적으로 선언할 때 type을 지정해주는데,
// 사용하다 보면, 다양한 타입에 대해서 처리를 해줘야 할 수 있음.
// 호출하거나 사용할때 타입을 넘겨서 해당 타입으로 지정할 수 있는 방법
function printXY(x: number, y: number): void;
function printXY(x: string, y: string): void;

function printXY(x: number | string | object, y: number | string | object) {
  console.log(x, y);
}

printXY(1, 2);
printXY("a", "b");
// printXY(1, "b")

function printXYByGeneric<T>(x: T, y: T) {
  console.log(x, y);
}

printXYByGeneric<string>("a", "b");
// printXYByGeneric<string>(1,2)
printXYByGeneric<number>(1, 2);

// function numArrLength(arr: number[]): number {
//   return arr.length;
// }

const numArrLength = (arr: number[]): number => arr.length;

function strArrLength(arr: string[]): number {
  return arr.length;
}

// 만약 ? 객체 배열 , 이 외 다른 타입의 배열도 length를 구하는 함수를 만들고 싶다면 ?

function arrLength<T>(arr: T[]): number {
  return arr.length;
}

arrLength<string>(["a", "b"]);
// arrLength<string>([1,"b"])

function exampleGeneric<T, U>(x: T, y: U) {
  console.log(x, y);
}

exampleGeneric<string, number>("a", 1);
// exampleGeneric<string, number>(1, "a")

let a: string[];
let b: Array<string>;

interface Phone<T> {
  company: string;
  model: string;
  option: T;
}

interface SamsungOption {
  a: string;
  b: number;
}

interface IphonOption {
  a: string;
  b: number;
}

const samsung23: Phone<SamsungOption> = {
  company: "samsung",
  model: "S23",
  option: {
    a: "삼엽충",
    b: 100,
  },
};

const iphon15: Phone<IphonOption> = {
  company: "apple",
  model: "15pro",
  option: {
    a: "앱등이",
    b: 200,
  },
};
// Generic  실습 1
function arrElement<T>(arr: T[], index: number) {
  return arr[index];
}
console.log(arrElement<string>(["길다"], 0));

// Generic  실습 2
function arrElement2<T>(arr: T[], index: number) {
  if (arr.length > index) {
    return arr[index];
  } else {
    return false;
  }
}
console.log(arrElement2<string>(["길다"], 0));
