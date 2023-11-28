// const FuncComponent = () => {
//     return <div>함수형 컴포넌트입니다.</div>
// }

import image from "./다운로드 (3).png";

function FuncComponent() {
  const text = "hello?";
  const name = "lee";

  const ifrenderTest = () => {
    if (name === "lee") {
      return <div>안녕하세요!</div>;
    } else if (name === "richard") {
      return "안녕하세요...";
    } else return "누구세요 ?";
  };
  const style = { fontSize: "20px", color: "red" };
  //   if (조건1 && 조건2)
  return (
    <>
      {/* 1. 하나의 태그로 감싸서 return */}
      <div>함수형 컴포넌트 입니다.1</div>
      <div>함수형 컴포넌트 입니다.2</div>

      {/* 2. js 문법 사용 가능(변수) */}
      <h3>코딩온 {text}</h3>

      {/* 2-1. js 문법 사용 가능(삼항 연산자를 조건에 따른 랜더링 (간단)) */}
      <h4>{name === "lee" ? "안녕하세요!" : "누구세요?"}</h4>

      {/* 2-1. 복잡한 조건을 이용하고 싶다면 ? -> 위에서 함수로 만들어 사용 */}
      {ifrenderTest()}

      {/* 2-2. 조건에 따른 랜더링 (&&) */}
      <h5>{name === "lee" && "안녕하세요!"}</h5>

      {/* 3. inline style 적용방법 > style 속성값으로 객체 전달*/}
      {/* <div style="font-size: 20px"></div> */}
      <div style={{ fontSize: "20px", color: "red" }}>뭘봐</div>
      <div style={style}>뭘봐</div>

      {/* class 와 onclick을 jsx 에서 사용하기 */}
      {/* <div class="" onclick="함수()">원래 html에서 하던방식</div> */}
      <div className="test-css">jsx에서 css 사용하기</div>

      {/* html에서 함수를 "호출", jsx에는 함수를 "선언" */}
      <button
        onClick={() => {
          //함수();
          console.log("hello");
        }}
      >
        버튼
      </button>

      {/* 5. 종료 태그 필수! */}
      <br />
      {/* / 경로가 public 폴더 안! */}
      <img src="/다운로드 (3).png" alt="사진" />

      {/* src 내부의 이미지 사용할 경우 -> 위에서 이미지를 import 해오기 */}
      <img src={image} alt="사진" />
    </>
  );
}

export default FuncComponent;
