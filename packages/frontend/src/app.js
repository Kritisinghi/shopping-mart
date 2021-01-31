import "core-js/stable";
import "regenerator-runtime";
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import App from "pages/App";
import store from "redux/store";

import "font-awesome/css/font-awesome.css";
import "style.css";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
