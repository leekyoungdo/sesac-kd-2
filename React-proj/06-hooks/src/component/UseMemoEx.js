import {useMemo, useState} from "react"

// useMemo 는 불필요한 연산을 방지
export default function UseMemoEx () {
    const [count, setCount] = useState(0);
    const [text, setText] = useState("");
    // [before]
    // count state 가 변경되지 않아도 , rendering 될때마다 다시 연산을 함. => 비효율적
    // => count 가 변경될때만  연산을 하도록 하고싶음 ! => useMemo
    // const calc = () => {
    //     console.log("calc.......")
    //     return count * 2 ;
    // }

    // [after]
    // useMemo (콜백함수, 의존성 배열)
    // useMemo : 불필요한 연산을 방지 , 값을 기억함 . count 변경이 있을때만 다시 연산하여 clac에 담음
    const calc = useMemo (()=> {
        console.log("calc.......")
        return count * 2 ;
    }, [count])
    return (
        <>
        <h3>useMemo 공부</h3>
        <div>count: {count}
        <button onClick={()=> setCount(count + 1)}> +1</button>
        </div>
        {/* useMemo를 사용하지 않을 경우 */}
        {/* <div>clac : {calcValue} </div>*/}
        <div>clac : {calc}</div>
        <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        />
        </>
    )
}