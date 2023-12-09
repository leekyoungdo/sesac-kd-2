import { useState } from "react";


function ColorC () {
    const [msg, setMsg] = useState("검정색 글씨")
    const [color, setColor] = useState("black")
    
    const ColorBlue = () => {
        setMsg("파란색 글씨")
        setColor("blue")
    }
    const ColorRed = () => {
        setMsg("빨간색 글씨")
        setColor("red")
    }

    return(
        <>
        <h1>이벤트 핸들링 실습 2</h1>
        <div style={{color}}>{msg}</div>
        <br />
        <button onClick={ColorBlue}>빨간색</button>
        <button onClick={ColorRed}>파란색</button>
        </>
    )
}

export default ColorC;