// src/component/Variable.js 파일에 아래의 코드를 작성해주세요.
import { useState, useRef } from 'react';

export default function Variable() {
  const [stateCount, setStateCount] = useState(0); // 일반적으로 사용하는 state
  let localVariable = 0; // 일반 지역 변수
  const refVariable = useRef(0); // useRef로 생성된 참조 변수

  const incrementStateCount = () => {
    setStateCount(stateCount + 1);
  };

  const incrementLocalVariable = () => {
    localVariable++; // 이 값은 리렌더링 때마다 초기화됨
    console.log(`일반적인 지역 변수: ${localVariable}`);
  };

  const incrementRefVariable = () => {
    refVariable.current++;
    console.log(`useRef로 생성된 참조 변수: ${refVariable.current}`);
  };

  return (
    <>
      <p>State 사용: {stateCount}</p>
      <button onClick={incrementStateCount}>State 1 증가</button>
      <p>일반적인 지역 변수: {localVariable}</p>
      <button onClick={incrementLocalVariable}>
        일반적인 지역 변수 1 증가
      </button>
      <p>useRef로 생성된 참조 변수: {refVariable.current}</p>
      <button onClick={incrementRefVariable}>
        useRef로 생성된 참조 변수 1 증가
      </button>
    </>
  );
}