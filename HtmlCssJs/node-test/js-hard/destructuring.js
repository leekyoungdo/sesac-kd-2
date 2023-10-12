// 배열 구조분해
 const fruits = ["ap","ba","or"]

 const [ap2, ba2, or2, st = "st"] = fruits
 console.log(ap2, st);

// 위 코드는 아래의 코드와 동일한 작업을 하고있음.
//  const ap2 = fruits[0]
//  const ba2 = fruits[1]
//  const or2 = fruits[2]

// 치환
// let x = 1, y = 3
// [x,y] = [y,x]
// console.log(x, y)


const obj  = {
   name: "lee",
   gender: "남",
   age: 31,
};


// const { gender, name ,age, test = "test"} = obj

// key 이름 바꾸는 방법
const { gender, name: name2} = obj;


//
//const age = obj.age;
//const name = obj.name;
//const gender = obj.gender;

// console.log(obj)
console.log(obj, name2)



const arr1 = [1, 2, 3, 4, 5];
const arr2 = ["a","b","c","d","e"];

// [1,2,3,4,5 "a","b","c","d","e"]

const arr3 = [...arr1, ...arr2];
console.log("arr3", arr3)

// ...[1, 2, 3, 4, 5] => 1, 2, 3, 4, 5
// ...["a","b","c","d","e"] => "a","b","c","d","e"

const hello = [..."hello"]
// hello = ['h', 'e', 'l', 'l', 'o' ]
console.log(hello)


const word1 = "abc";
const word2 = "xyz";

const word3 = [...word1, ...word2]
console.log("word3", word3)


const obj2 = {
    name: "lee",
    gender: "남",
    age: 31,
 };
 
 const obj3 = {
    ...obj2,
    live: "seoul"
 }

 console.log("obj3", obj3)


const values = [10, 20, 30]; 
function get(a, ...rest){
    console.log("a", a) // 10
    console.log("rest", rest) // [20 , 30]
}

get(...values)

//...[10, 20, 30] => 10, 20, 30
