import React, { Component } from "react";

class PlayButtons extends Component {
  state = {
    weaponRock: "",
    weaponPaper: "",
    weaponScissor: "",
  };

  rockHandler = () => {
    this.setState({
      weaponRock: "You choose rock!",
      weaponPaper: "",
      weaponScissor: "",
    });
  };

  paperHandler = () => {
    this.setState({
      weaponPaper: "You choose paper!",
      weaponRock: "",
      weaponScissor: "",
    });
  };

  scissorHandler = () => {
    this.setState({
      weaponScissor: "You choose scissor!",
      weaponRock: "",
      weaponPaper: "",
    });
  };

  render() {
    const { weaponRock, weaponPaper, weaponScissor } = this.state;

    let gameLogic = function () {
      const random = Math.random();
      if (random < 0.35) {
        return console.log("rock");
      } else if (random <= 0.65) {
        return console.log("paper");
      } else {
        return console.log("scissor");
      }
    };

    return (
      <div>
        <button
          id="rock"
          onClick={() => {
            gameLogic();
            this.rockHandler();
          }}
        >
          Rock
        </button>
        <button
          id="paper"
          onClick={() => {
            gameLogic();
            this.paperHandler();
          }}
        >
          Paper
        </button>
        <button
          id="scissor"
          onClick={() => {
            gameLogic();
            this.scissorHandler();
          }}
        >
          Scissor
        </button>
        <div>
          {weaponRock} {weaponPaper} {weaponScissor}
        </div>
      </div>
    );
  }
}

export default PlayButtons;
