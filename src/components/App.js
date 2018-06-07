import React, { Component } from "react";
import { Grid, Segment } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css';



class App extends Component {
  
  render() {
    return (
      // <div className="main-app">
      //   <header className="main-header">
      //     <h1>
      //       React GitHub Project
      //     </h1>
      //   </header>
      //   <main className="main-content">{this.props.children}</main>
      // </div>
      <Grid columns={3} divided>
      <Grid.Row stretched>
        <Grid.Column>
          <Segment>1</Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>1</Segment>
          <Segment>2</Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>1</Segment>
          <Segment>2</Segment>
          <Segment>3</Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    );
  }
}

export { App };
