import {useMemo, useState} from "react"

export default function UseMemoHook () {

    const [text, setText] = useState("")
    const [search, setSearch] = useState("")

    const wordCount = useMemo(() => {
          // 입력받은 문자열와 찾고자 하는 단어가 빈 문자열이 아닌 경우에만 계산
          if (text.trim() && search.trim()) {
            const words = text.split(" ");
            return words.filter((w) => w.includes(search)).length;
          }
          // 빈 문자열인 경우 0 반환
          return 0;
        },[text, search]);
    return (
        <>
        <h4>useMemo 실습</h4>

        <input 
        type="text"
        value={text}
        onChange={(e)=> setText(e.target.value)}
        placeholder="내용"
        />
        <br />
        <input 
        type="text"
        value={search}
        onChange={(e)=> setSearch(e.target.value)}
        placeholder="찾을단어"
        />
        <p>
        "{search}" 단어의 빈도수: {wordCount}
        </p>
        </>
    )

}