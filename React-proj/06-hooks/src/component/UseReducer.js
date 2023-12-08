import {useReducer , useCallback, useState} from "react"

const initialValue = { value : 0 };
const reducer = (prevState, action) => {
    switch(action.type) {
        case "PLUS":
            return {value : prevState.value + 1};
        case "MINUS":
            return {value : prevState.value - 1};
        case "MULTIFLY":
            return {value : prevState.value * action.number };
        case "HARF":
            return {value : prevState.value / action.number };
        case "RESET":
            return initialValue;
        default : 
            return {value : prevState.value};
    }
}
// state : 상태
// dispath : 액션을 발생시키는 함수
// reducer: 실질적으로 상태를 업데이트 하는 함수 (결국 dispatch가 실행시키는 함수)
export default function UseReducer () {

    const [state, dispatch] = useReducer(reducer, initialValue);
    const [number, setNumber] = useState (0);
    const [number2,setNumber2] = useState (0)

    const handeleChangeNumber = useCallback ((e) => setNumber(e.target.value), [])
    const handeleChangeNumber2 = useCallback ((e) => setNumber2(e.target.value), [])

    const plus = () => dispatch({type: "PLUS"})
    const minus = () => dispatch({type: "MINUS"})
    const reset = () => dispatch({type: "RESET"})
    const multifly = () => dispatch({type: "MULTIFLY", number: number})
    const harf = () => dispatch({type: "HARF", number:number2})

    // 지금은 + - 초기화만 하고 있지만,
    // 만약에 곱하기, 나누기 등등 더많은 연산을 이용한다고 하면 ?
    // 또 컴포넌트 자체가 복잡해져서 코드가 길어진다
    // state 변화를 추적하고 싶음  => setState를 일일이 찾아가면서 +1도 되구나 -1도 되구나
    // reducer를 사용한다면 ? => reducer함수만 읽으면 ,+1 할수 있고, -1도 할수있고
    // const [state, setState] = useState(initialValue)
    // const plus = () => setState ({value: state.value+1});
    // const minus = () => setState ({value: state.value-1});
    // const reset = () => setState (initialValue);

    return (
        <>
        <h2>UserReducer 공부</h2>
        <div>{state.value}
        <button onClick={plus}>+1</button>
        <button onClick={minus}>-1</button>
        <button onClick={reset}>RESET</button>
        <br />
        <input type="number" value={number} onChange={handeleChangeNumber} />
        <button onClick={multifly}>곱하기</button>
        <br />
        <input type="number" value={number2} onChange={handeleChangeNumber2} />
        <button onClick={harf}>나누기</button>

        </div>
        </>
    );
}