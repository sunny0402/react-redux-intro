import React, { Component } from "react";
import { connect } from "react-redux";

class ProduceDept extends Component {
  render() {
    console.log("this.props.produceData", this.props.produceData);

    const produceInventory = this.props.produceData.map((item, index) => {
      return (
        <li key={index}>
          {item.food}: {item.quantity}
        </li>
      );
    });
    console.log("produceInventory", produceInventory);
    return (
      <div>
        <h1>The Produce Department</h1>
        <ul>{produceInventory}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    produceData: state.produce,
  };
}

export default connect(mapStateToProps)(ProduceDept);
