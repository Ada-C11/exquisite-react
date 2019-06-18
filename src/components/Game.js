import React, { Component } from "react";
import "./Game.css";
import PlayerSubmissionForm from "./PlayerSubmissionForm";
import FinalPoem from "./FinalPoem";
import RecentSubmission from "./RecentSubmission";

class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      finalPoem: [],
      iscomplete: false
    };
  }

  onPoemComplete = () => {
    this.setState({ finalPoem: this.state.finalPoem });
  };

  addLine = line => {
    const newState = this.state;
    newState.finalPoem.push(line);

    this.setState(newState);

    console.log(this.state.finalPoem);
  };

  render() {
    const poem = this.state.finalPoem
      .map(field => {
        if (this.state.iscomplete === true) {
          return (
            field.adjective1 +
            " " +
            field.noun1 +
            " " +
            field.adverb1 +
            " " +
            field.adjective2 +
            " " +
            field.noun2 +
            " " +
            field.verb1
          );
        } else {
          return field;
        }
      })
      .join(" ");

    return (
      <div className="Game">
        <h2>Game</h2>

        <p>
          Each player should take turns filling out and submitting the form
          below. Each turn should be done individually and <em>in secret!</em>{" "}
          Take inspiration from the revealed recent submission. When all players
          are finished, click the final button on the bottom to reveal the
          entire poem.
        </p>

        <p>Please follow the following format for your poetry submission:</p>

        <p className="Game__format-example">{}</p>

        <RecentSubmission />

        <PlayerSubmissionForm addLineCallback={this.addLine} />

        <FinalPoem
          wholePoem={this.finalPoem}
          onPoemCompleteCallback={this.onPoemComplete}
        />
      </div>
    );
  }
}

// const FIELDS = [
//   "The",
//   {
//     key: "adj1",
//     placeholder: "adjective"
//   },
//   {
//     key: "noun1",
//     placeholder: "noun"
//   },
//   {
//     key: "adv",
//     placeholder: "adverb"
//   },
//   {
//     key: "verb",
//     placeholder: "verb"
//   },
//   "the",
//   {
//     key: "adj2",
//     placeholder: "adjective"
//   },
//   {
//     key: "noun2",
//     placeholder: "noun"
//   },
//   "."
// ];

export default Game;
