import {useRef} from "react"

function FuncRef () {
        const input = useRef();
        const loaclVar = useRef(0);

        const focusInput = () => {
            input.current.focus();
        };
        
        const plusLocalVar = () => {
            loaclVar.current ++;
            console.log(loaclVar.current)
        }

    return(
        <>
        <input type="text" ref={input}/>
        <button type="button" onClick={focusInput}>버튼</button>
        <div>{loaclVar.current}</div>
        <button type="button" onClick={plusLocalVar}>버튼</button>
        </>
    )
}

export default FuncRef;