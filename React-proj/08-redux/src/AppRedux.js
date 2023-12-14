import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import "./App.css";

// function AppRedux() {
//   return (
//     <div>
//         <Box1 />
//     </div>
//   );
// }
// function Box1() {
//     const number = useSelector((state)=> state.number)
//     return(
//         <div className="box">
//             <h3>number: {number}</h3>
//             <Box2 />
//         </div>
//     )
// }

// function Box2() {
//     const number = useSelector((state)=> state.number)

//     return(
//         <div className="box">
//             <h3>number: {number}</h3>
//             <Box3 />
//         </div>
//     )
// }

// function Box3() {
//     return(
//         <div className="box">
//             <Box4 />
//         </div>
//     )
// }

// function Box4() {
//     const number = useSelector((state)=> state.number)
//     const dispatch = useDispatch ()
//     return(
//         <div className="box">
//             <h3>number: {number}</h3>
//             <button onClick={()=>dispatch({type: "INCREMENT"})}>Plus</button>
//             <button onClick={()=>dispatch({type: "DECREMENT"})}>Minus</button>

//         </div>
//     )
// }


function AppRedux() {
    const [number, setNumber] = useState(0)
    const money = useSelector((state)=> state.money.money)
    const dispatch = useDispatch ();

  return (
    <div>
        <h1>코딩온 은행</h1>
        <h3>잔액 :{money}</h3>
        <input
        type="number"
        onChange={(e)=> setNumber(e.target.value)}
        />
        <button onClick={()=>dispatch({type: "INCREMENT"})}>입금</button>
        <button onClick={()=>dispatch({type: "DECREMENT"})}>출금</button>

    </div>
  );
}

export default AppRedux;