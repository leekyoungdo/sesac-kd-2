import { Component } from "react";
import PropTypes from "prop-types";

class BestSellerCpn extends Component {
  render() {
    return (
      <>
        <h1>이번주 베스트 셀러</h1>
        <img src="/다운로드 (3).png" alt="책사진" />
        <div>
          <h3>{this.props.title}</h3>
          저자: {this.props.author} <br />
          판매가 :{this.props.price}
          <br />
          구분 :{this.props.type}
          <br />
        </div>
      </>
    );
  }
}

BestSellerCpn.propType = {
  title: PropTypes.string,
  author: PropTypes.string,
  price: PropTypes.string,
  type: PropTypes.string,
};

export default BestSellerCpn;
