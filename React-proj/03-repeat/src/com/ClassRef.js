import React, {Component, createRef} from "react"
class ClassRef extends Component {
    input2 =React.createRef()
    // 콜백함수를 이용하여 ref를 지정했을 때 , ref변수를 사용하는 방법
    fucusInput = () => {
        this.input.focus()
    }

    fucusInput2 = () => {
        this.input2.current.focus();
    }
    render() {
        return(
            <>
                {/* 콜백함수를 이용하여 ref 지정 */}
                <input type="text" ref={(ref)=>{
                    // ref에 콜백함수를 넘길 때 첫번째 매개변수는
                    // ref 걸려 있는 요소를 담고 있다.
                    this.input = ref
                }}/>
                <button type="button" onClick={this.fucusInput}>버튼</button>
                <br />
                <input type="text" ref={this.input2}/>
                <button type="button" onClick={this.fucusInput2}>버튼</button>
                
            </>
        )
    }
}

export default ClassRef;