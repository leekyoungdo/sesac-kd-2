import {useState} from "react"

// toggle 기능이 자주 쓰이는데, true -> false, false -> true 변회시켜
// 이에따라 처리를 할일이 자주 쓰인다라고 가정
export default function useToggle (initialValue) {
    const [value, setValue] = useState (initialValue);
    const toggle = () => {
        setValue(!value)
    }

    return [value, toggle];
}