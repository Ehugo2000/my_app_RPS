import React, { Component } from "react";
import PlayButtons from "./Components/PlayButtons";

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>Play RPS</h1>
        </header>
        <p>Select your weapon:</p>
        <PlayButtons></PlayButtons>
      </div>
    );
  }
}

export default App;
