import "./App.css";
// import FuncComponent from "./components/FuncCompon";
// import ClassComponent from "./components/ClassComponent";
// import FuncPropsEx from "./components/FuncPropsEx";
// import Section from "./components/Section";
// import ClassPropsEx from "./components/ClassPropsEx";
// import FoodComponent from "./components/FoodsComponent";
// import BestSellerCpn from "./components/BestSellerCpn";
import ButtonCpn from "./components/ButtonCpn";

// const name = "바둑이";
// const animal = "시고르자브종";

// const first = 3;
// const second = 5;

// const a = 5;
// const b = 4;

function App() {
  return (
    <div>
      {/* <FuncComponent /> */}
      {/* <FuncComponent></FuncComponent> */}
      {/* <ClassComponent /> */}
      {/* <FuncPropsEx title="SeSAC" content="hello world" number={5} />
      <FuncPropsEx content="hello world" number={5} />
      <FuncPropsEx number={5} /> */}
      {/* <ClassPropsEx title="SeSAC class" content="hello world" number={5} />

      <Section title="SeSAC 영역">
        <div>SeSAC 영역의 content 입니다.</div>
      </Section>
      <Section title="코딩온 영역">
        <h5>코딩온 영역의 content 입니다.</h5>
      </Section>

      <FoodComponent food="사과" food1="바나나" food2="귤" /> */}

      {/* <BestSellerCpn
        title="나의 하루는 4시 40분에 시작된다"
        author="김유진"
        price="13,500"
        type="자기계발서"
      /> */}
      <ButtonCpn valid="" />
      {/* <h2>
        제 반려동물의 이름은 {name}입니다.
        <br />
        {name}는 {animal}입니다.
      </h2>
      <h4>{first + second === 8 ? "정답입니다!" : "오답입니다!"}</h4>
      <h3>{a > b && "a가 b보다 큽니다."}</h3>

      <div className="test-css1">hello world</div>
      <div className="test-css2">
        아이디: <input></input>
        <br />
        <br />
        비밀번호: <input></input>
      </div> */}
    </div>
  );
}

export default App;
