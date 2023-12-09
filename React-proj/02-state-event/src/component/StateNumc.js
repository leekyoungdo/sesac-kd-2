import { Component } from "react";
class StateNumc extends Component {
    state = {
        number: 0,
        number2 :0,
      };
      render () {
        return(
            <>
                <h1>state 클래스형 컴포넌트 실습</h1>
              <div>2씩 증가 {this.state.number}{" "}
                  <button onClick={()=>{
                    this.setState((prevState)=>{
                      return {number : prevState.number + 2 } 
                    });
                  }}>
                    +2
                  </button>
                  
                <div>-1 씩 감소{this.state.number2}{" "}
                  <button onClick={()=>{
                    this.setState((prevState)=>{
                        return{number2: prevState.number2 -1 }
                    })
                  }}>-1
                  </button>
                </div>
                  
                  
              </div>
              
            </>
            )
      }
}

      export default StateNumc