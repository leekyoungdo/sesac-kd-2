import { useState } from "react";
import ColorSelect from "./ColorSelect";


function ChangePCB () {

    const [img, setImg] = useState("") 
    const [color,setColor] = useState("white")
    const [background,setBackground] = useState ("black")
    const [content,setContent] = useState("text")


    return(
        <>
        <h1>이벤트 핸들링 실습 4</h1>
            <label>사진</label>
            <select
            onChange={(e)=> {
                setImg(e.target.value)
            }}         
            >
                <option value="다운로드 (1)">사진1</option>
                <option value="다운로드 (2)">사진2</option>
                <option value="다운로드">사진3</option>
            </select>


      <ColorSelect
        mode="배경"
        onChangeHandler={(e) => {
          setBackground(e.target.value);
        }}
      />

      <ColorSelect
        mode="글자"
        onChangeHandler={(e) => {
          setColor(e.target.value);
        }}
      />
        <br />

            <img src={`${img}`} width={200}></img>
            <br />
            <div style={{backgroundColor:"black", color:"white"}}>{content}</div>
        </>
    )
}

export default ChangePCB;