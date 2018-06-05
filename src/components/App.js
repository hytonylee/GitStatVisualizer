import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import User from "./User";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="user/:username" component={User} />
        </div>
      </Router>
    );
  }
}

export default App;
