import {useState} from "react"

function Practice1 () {

    const userList = [
        {id: 1, name:"이경도", email:"flrudeh@naver.com"},
        {id: 2, name:"아무개", email:"123@naver.com"}
    ]
    const [user, setUser] = useState(userList)
    const [name,setName] = useState("") 
    const [email,setEmail] = useState("")
    

    const addUser = (e) => {
        const newList = userList.concat({
            id: user[user.length-1].id +1,
            name:name,
            email:email
    }); 
    setUser(newList);
    setName("");
    setEmail("");
    }

    const enterPress = (e) => {
        if(e.key === "Enter") {
            const newList = userList.concat({
                id: user[user.length-1].id +1,
                name:name,
                email:email
        }); 
        setUser(newList);
        setName("");
        setEmail("");
        }
    }
    

    const deletePro  = (id) => {
        const newList = user.filter((value) =>value.id != id)
        setUser(newList)
    }

    return (
        <>
        <h1>map 실습</h1>
        <input 
        type="text"
        value={name}
        placeholder="이름"
        onChange={(e)=> {
            setName(e.target.value)
        }}
        />
        <input
        type="email"
        value={email}
        placeholder="이메일"
        onKeyDown={enterPress}
        onChange={(e) => {
            setEmail(e.target.value)
        }}
        />
        <button onClick={addUser} >등록</button>
        <br />
        <ul>
            {user.map((value, i) => {
                return(
                 <li key={i} onDoubleClick={()=>{
                    deletePro(value.id)
                 }}>
                    이름: {value.name} 메일: {value.email}
                </li>
                );
            })}
        </ul>
        </>
    )
}

export default Practice1