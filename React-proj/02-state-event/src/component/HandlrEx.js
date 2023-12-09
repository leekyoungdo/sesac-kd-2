import { Component } from "react";


class HandlrEx extends Component{
        constructor (props) {
            super(props)
            this.state = {
                msg: "hello world"  
            };
            this.handleOnClick = this.handleOnClick.bind(this)
        }
        handleOnClick () {
            this.setState({msg: "goodBye world"})
        }
    
        render() {
            return(
                <>
                <h1>이벤트 핸들링 실습 1</h1>
                {this.state.msg}
                <button onClick={this.handleOnClick}>
                    버튼
                </button>
                </>
            )
        }
}

export default HandlrEx;