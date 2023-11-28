import { Component } from "react";
import PropTypes from "prop-types";

class FoodComponent extends Component {
  render() {
    return (
      <>
        좋아하는 과일 순서는
        <div className="test-css3">
          {this.props.food},{this.props.food1},{this.props.food2}
        </div>
      </>
    );
  }
}

FoodComponent.defaultProps = {
  food: "사과",
  food1: "바나나",
  food2: "배",
};

FoodComponent.propType = {
  food: PropTypes.string,
  food1: PropTypes.string,
  food2: PropTypes.string,
};

export default FoodComponent;
