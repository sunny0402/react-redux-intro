import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// 1) need react-redux. Provider Component about everything.
import { Provider } from "react-redux";
// 2) Create a store for the provider.
import { createStore } from "redux";
// 3) Reducers to populate the store. Start with rootReducer.
import rootReducer from "./reducers/rootReducer";
// 4) Create the store
const theStore = createStore(rootReducer);

// Provider connects redux and react
ReactDOM.render(
  <Provider store={theStore}>
    <App />
  </Provider>,

  document.getElementById("root")
);
