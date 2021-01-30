import "core-js/stable";
import "regenerator-runtime";

import React from "react";
import { render } from "react-dom";
import "style.css";
import "font-awesome/css/font-awesome.css";
import App from "pages/App";
import {Provider} from 'react-redux'
import store from 'redux/store'
render(
<Provider store={store}>
    <App />
</Provider>
, document.getElementById("root"));
