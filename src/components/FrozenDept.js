import React, { Component } from "react";

// we want this component to know about redux
// need react-redux
import { connect } from "react-redux";

// console.log(connect);

class FrozenDept extends Component {
  render() {
    console.log(this.props.frozenData);
    return <h1>The Frozen Department</h1>;
  }
}

// when function is run it is replaced by whatever the return value is.
// x(1)(2) ...
// function x(n) {
//   return (m) => {
//     console.log(n + m);
//   };
// }
// now:
// x(1)(2);

// here we reach into redux store to map a peice of state to this components props
// so go to redux store and then hand to the component
// mapStateToProps takes one argument which is the root reducer
// state.frozen because in rootReducer, combineReducers have the key frozen
// and each key in combineReducers will be a peice of state in the redux store
function mapStateToProps(state) {
  return {
    frozenData: state.frozen,
  };
}

// connect (part of redux) returns a function.
// the first argument which connect takes is:
// a function which is going to map a peice of redux to this component's props
export default connect(mapStateToProps)(FrozenDept);
