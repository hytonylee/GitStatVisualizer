import React, { Component } from "react";



class App extends Component {
  render() {
    return (
      <div className="main-app">
        <header className="main-header">
          <h1>
            React GitHub Project
          </h1>
        </header>
        <main className="main-content">{this.props.children}</main>
      </div>
    );
  }
}

export { App };
