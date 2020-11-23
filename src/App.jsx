import React, { Component } from "react";

class App extends Component {
  render() {
    return ( 
      <div>
      <header><h1>Play RPS</h1></header>
      <p>Choose your weapon:</p>
      <button id="rock">Rock</button>
      <button id="paper">Paper</button>
      <button id="scissor">Scissor</button>
      </div>
    )
  }
}

export default App;