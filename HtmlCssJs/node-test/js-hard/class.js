// const cat = {
//     name: '나비',
//     age: 31,
//     mew: function (){
//         console.log("야옹")
//     }
// }

// const cat2 = {
//     name: '잠자리',
//     age: 1,
//     mew: function (){
//         console.log("야옹")
//     }
// }
// const cat3 = {
//     name: '매미',
//     age: 3,
//     mew: function (){
//         console.log("야옹")
//     }
// }

// //PascalCase 규칙을 이용해서 식별자 생성
// //CamelCase에서 첫글자도 대문자인 방식


// class Cat {
//     // 생성자 : 메소드의 일종
//     // (메소드 중에서) Cat클래스를 이용해서 객체를 만드는 순간에 호출되는 메소드
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     // 메소드
//     mew() {
//         console.log("야 옹~")
//     }
//     // 고양이의 정보를 콘솔로 찍는 메소드
//     info() {
//         console.log(`이름은 : ${this.name}, 나이는 : ${this.age}`);
//         this.name
//     }
// }
// // Cat 클래스를 이용해서 새로운 객체르 만들겠다.
// const cat4 = new Cat("나비", 2)
// const cat5 = new Cat("장화", 80)
// console.log(cat4.name, cat5.name)
// cat4.mew();
// cat4.info();




class House { 
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    age() {
        console.log(`이 건물은 ${new Date().getFullYear() - this.year} 년 되었어요`)
    }
}


const home = new House("새싹",2022);
home.age();



class Apratment extends House{
    constructor(name, year, floor) {
        // 부모(House)의 생성자 호출
        super(name,year);
        this.floor = floor;
    }
        //오버라이딩 : 부모에 있는 메소드를 자식이 다시 정의하는것
        age() {
            //super.age(); 로 쓸수도 있다. (부모의 것을 가져오는)
            console.log(`이 건물은 ${new Date().getFullYear() - this.year} 년 되었어요`)
            
            console.log(`입주는 ${this.year + 1} 부터 시작했습니다.`)
        }
}

    const apart = new Apratment("힐스테이트", 2014, 25)
    console.log(apart.name, apart.year, apart.floor)
    apart.age();

// function test(a, b) {
//   console.log(`a: ${a}, b: ${b}`);
// }
// function test(a, b, c) {
//   console.log(`a: ${a}, b: ${b}, c: ${c}`);
// }
// 오버로딩 : 똑같은 이름으로 여러개의 함수를 선언하는 것 (매개변수가 다르다.)
// test(2, 5); //a: 2, b: 5, c: undefined



// class Personal {
//     constructor(){
//         //이름
//         //나이
//         //주민번호
//     }
// };
//         //밥을 먹는다.
//         //잠을 잔다.
// class Student{
//     constructor(){

//     }
// }


// const p = new Personal();


