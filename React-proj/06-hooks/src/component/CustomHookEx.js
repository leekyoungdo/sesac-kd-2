import useToggle from "../hooks/useToggle";

export default function CustomHookEx () {
    const [isPopup, togglePopup] = useToggle(false)
    return (
        <>
            <h3>costom hook 공부</h3>
            {isPopup && <div>보여요</div>}
            <button onClick={togglePopup}>버튼</button>
        </>
    )
}