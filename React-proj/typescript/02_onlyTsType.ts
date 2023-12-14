// or
type gender = "Men" | "Women";
// const lee : gender = "abcd"
const lee: gender = "Men";

// [상품명 , 가격]
type ProductInfo = [string, number];
const cola: ProductInfo = ["cola", 2500];

// 객체에 대한 타입을 지정할 경우
interface ProductInfo2 {
  productName: string;
  price: number;
}

const cider: ProductInfo2 = { productName: "cider", price: 2500 };
// const cider: ProductInfo2 = {productName: "cider",price:2500, sale: 10};

type ProductInfo3 = {
  productName: string;
  price: number;
  sale?: number;
};

const beer: ProductInfo3 = { productName: "cider", price: 2500 };
console.log(beer.sale);

interface Seller {
  name: string;
}
interface ProductInfo4 {
  productName: string;
  price: number;
  sale?: object;
  seller?: Seller;
}
const soju: ProductInfo4 = {
  productName: "soju",
  price: 2000,
  seller: { name: "lee" },
};

// 옵셔널 체이닝
console.log(soju.seller?.name);
// soju.seller -> seller는 optional한 key -> undefined가 될 수 있음
// undefined에는 aaa 함수 or 속성이 없습니다.

interface Person {
  name: string;
  age: number;
}

interface Student extends Person {
  studentID: string;
  eat: () => void;
}

const person: Person = { name: "lee", age: 31 };
const stu: Student = {
  name: "lee",
  age: 31,
  studentID: "201221437",
  eat: () => console.log("밥을 먹는다."),
};

// 아래 나와 있는 heroGame_A 와 heroGame_B 를 만족할 수 있는 interface Game 만들어보기
let heroGame_A: Game = {
  title: "DC 언체인드",
  price: 50000,
  desc: "DC 히어로 & 빌런 각각의 개성은 물론, 액션의 재미까지!",
  category: "액션",
  platform: "모바일",
};

let heroGame_B: Game = {
  title: "MARVEL 퓨처파이트",
  price: 65000,
  category: "롤플레잉",
  platform: "모바일",
};

interface Game {
  title: string;
  price: number;
  desc?: string;
  category: string;
  platform: string;
}
