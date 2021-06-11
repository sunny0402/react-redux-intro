import React, { Component } from "react";
import { connect } from "react-redux";

class MeatDept extends Component {
  render() {
    console.log("this.props.meatData", this.props.meatData);

    const meatInventory = this.props.meatData.map((item, index) => {
      return (
        <li key={index}>
          {item.food}: {item.quantity}
        </li>
      );
    });
    console.log("meatInventory", meatInventory);
    return (
      <div>
        <h1>The Meat Department</h1>
        <ul>{meatInventory}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    meatData: state.meat,
  };
}

export default connect(mapStateToProps)(MeatDept);
