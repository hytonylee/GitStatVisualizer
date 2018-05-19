import "./index.css";

import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import { Route, BrowserRouter as Router } from "react-router-dom";

import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
