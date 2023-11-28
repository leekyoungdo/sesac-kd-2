import { Component } from "react";
import PropTypes from "prop-types";

class ButtonCpn extends Component {
  render() {
    return (
      <>
        <div>
          <h3>{this.props.text}</h3>
          <button onClick={valid}>버튼</button>
        </div>
      </>
    );
  }
}
ButtonCpn.defaultProps = {
  text: "이건 기본 text props입니다.",
};

ButtonCpn.propType = {
  text: PropTypes.string,
  valid: PropTypes.string,
};
function valid() {
  console.log("콘솔 띄우기 성공");
}
export default ButtonCpn;
