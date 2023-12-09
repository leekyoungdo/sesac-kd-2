import {useState} from "react"
import {useRef} from "react"

function Practice3 () {
    const input = useRef();
    const input1 = useRef();
    const userList = [
    ]

    const [list, setList] = useState (userList)
    const [text, setText] = useState ("")
    const [name, setName] = useState ("")

    const addUser = (e) => {
        if (input.current.value == "") {
            input.current.focus();
        }else if (input1.current.value == "") {
            input1.current.focus();
        }
        else {
        const newList =list.concat({
            id: list.length+1,
            text: text,
            name: name
        });
        setList(newList);
        setText("");
        setName("")
}
}
    return(
        <>
        <h1>실습 3</h1>
        <fieldset>
            작성자 : <input 
                    type="text"
                    value={name}
                    ref={input}
                    onChange={(e)=>{
                        setName(e.target.value)
                    }}
                    >
                    </input>
            제목 :   <input 
                    type="text"
                    value={text}
                    ref={input1}
                    onChange={(e)=> {
                        setText(e.target.value)
                    }}
                    >
                    </input>
            <button onClick={addUser}>작성</button>
        </fieldset>

        <table border={1} style={{marginTop:"30px", width:"500px"}} >
            <tr>
                <th>번호</th>
                <th>제목</th>
                <th>작성자</th>
            </tr>
            {list.map((value) => {
            return (
            <tr key={value.id}>
                <td>{value.id}</td>
                <td>{value.text}</td>
                <td>{value.name}</td>
            </tr>
                )
             })}
        </table>
        <form>
        <select name="type" onChange={selectSearchType}>
          <option value="writer">작성자</option>
          <option value="title">제목</option>
        </select>
        <input
          type="text"
          name="search"
          placeholder="검색어"
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
        />
        <button type="button" onClick={searchComment}>
          검색
        </button>
        </form>
        </>
    )
}

export default Practice3