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
      iscomplete: false,
      recentSubmission: ""
    };
  }

  onPoemComplete = () => {
    this.setState({ iscomplete: true });
  };

  joinWords = field => {
    return (
      field.the +
      " " +
      field.adjective1 +
      " " +
      field.noun1 +
      " " +
      field.adverb1 +
      " " +
      field.verb1 +
      " " +
      field.the2 +
      " " +
      field.adjective2 +
      " " +
      field.noun2 +
      " " +
      field.end
    );
  };

  addLine = line => {
    const currentState = this.state;

    this.setState({
      finalPoem: [...currentState.finalPoem, line],
      recentSubmission: this.joinWords(line)
    });
  };

  render() {
    if (this.state.iscomplete) {
      const poem = this.state.finalPoem.map(field => {
        return <p>{this.joinWords(field)}</p>;
      });

      return (
        <div className="Game">
          <h2>Game</h2>

          <p>
            Each player should take turns filling out and submitting the form
            below. Each turn should be done individually and <em>in secret!</em>{" "}
            Take inspiration from the revealed recent submission. When all
            players are finished, click the final button on the bottom to reveal
            the entire poem.
          </p>

          <FinalPoem
            wholePoem={poem}
            onPoemCompleteCallback={this.onPoemComplete}
          />
        </div>
      );
    } else {
      const recentSubmission =
        this.state.finalPoem.length === 0 ? null : (
          <RecentSubmission recentSubmission={this.state.recentSubmission} />
        );

      return (
        <div className="Game">
          <h2>Game</h2>

          <p>
            Each player should take turns filling out and submitting the form
            below. Each turn should be done individually and <em>in secret!</em>{" "}
            Take inspiration from the revealed recent submission. When all
            players are finished, click the final button on the bottom to reveal
            the entire poem.
          </p>

          <p>Please follow the following format for your poetry submission:</p>

          <p className="Game__format-example">
            {"The adjective noun adverb verb the adjective noun"}
          </p>

          {recentSubmission}

          <PlayerSubmissionForm addLineCallback={this.addLine} />

          <FinalPoem onPoemCompleteCallback={this.onPoemComplete} />
        </div>
      );
    }
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
