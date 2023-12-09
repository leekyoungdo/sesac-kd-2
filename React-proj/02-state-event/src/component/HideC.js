import { useState } from "react";

function HideC () {

    const [msg, setMsg] = useState("안녕하세요")
    const [btn, setBtn] = useState("사라져라")

    const HideFont = () => {
        setMsg ("")
        setBtn ("보여라")
    }
    return(
        <>
        <h1>이벤트 핸들링 3</h1>
        <button onClick={HideFont}>{btn}</button>
        <h3>{msg}</h3>
        </>
    )
}

export default HideC;