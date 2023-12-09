import { useState } from "react";

function StateNum () {
    const [increase, setNumber] = useState(0);
    const [decrease, setNumber1] = useState(0);


    return (
        <>
        <h1>함수형 컴포넌트 실습</h1>
        <div>1씩 증가{increase} <button onClick={()=>{
            setNumber(( prevNumber )=> prevNumber + 1)
        }}>
            +1</button></div>

            <div>-2씩 감소{decrease} <button onClick={()=>{
            setNumber1(( prevNumber )=> prevNumber - 2)
        }}>
            -2</button></div>
        </>
    )
}

export default StateNum;