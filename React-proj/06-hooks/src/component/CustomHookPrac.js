import usePracToggle from "../hooks/usePracToggle"

export default function CustomHookPrac () {
    const {width, height} = usePracToggle()
    return (
        <>
         <h1>너비 :{width ? width: "창크기 정보가 없습니다."}</h1>

         <h1>높이 :{height ? height: "창크기 정보가 없습니다."}</h1>
        </>
    )
}