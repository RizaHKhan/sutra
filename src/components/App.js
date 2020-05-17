import React, { Component } from "react";
import Landing from "./landing/Landing";

class App extends Component {
 // If not logged in, render the landing page.
  render() {
    return <Landing />;
  }
  // If logged in, render the dashboard
}

export default App;
