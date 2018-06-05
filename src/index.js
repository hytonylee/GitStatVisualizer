import "./index.css";

import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";

import App from "./components/App";
import User from "./components/User";

ReactDOM.render(<User />, document.getElementById("root"));
registerServiceWorker();
