function ColorSelect ({mode}) {
    return(
        <>
        <label>{mode} 색</label>
            <select onChange={onChangeHandler}>
                    <option value={"red"}>빨강색</option>
                    <option value={"blue"}>파랑색</option>
                    <option value={"yellow"}>노랑색</option>
                    <option value={"white"}>흰색</option>
                    <option value={"black"}>검정색</option>
            </select>

        </>
    )
}

export default ColorSelect;