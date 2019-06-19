import React, { Component } from 'react';
import './Game.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';
import FinalPoem from './FinalPoem';
import RecentSubmission from './RecentSubmission';

class Game extends Component {

  constructor(props) {
    super(props);

    this.state = {
      mostRecentLine: '',
      finalPoem: [],
      showPoem: false,
      playerTurn: 1,
    }
  }

  onSubmitLine = (submission) => {
    const poemLine = `The ${submission.adjective1} ${submission.noun1} ${submission.adverb} ${submission.verb} the ${submission.adjective2} ${submission.noun2}.`
    const finalPoem = this.state.finalPoem;
    finalPoem.push(poemLine)
    this.setState({
      mostRecentLine: poemLine,
      finalPoem: finalPoem,
      playerTurn: this.state.playerTurn + 1,
    });
  }

  onShowFinalPoem = () => {
    this.setState({
      showPoem: true,
    })
  }

  render() {

    const exampleFormat = FIELDS.map((field) => {
      if (field.key) {
        return field.placeholder;
      } else {
        return field;
      }
    }).join(" ");

    return (
      <div className="Game">
        <h2>Game</h2>

        <p>Each player should take turns filling out and submitting the form below. Each turn should be done individually and <em>in secret!</em> Take inspiration from the revealed recent submission. When all players are finished, click the final button on the bottom to reveal the entire poem.</p>

        <p>Please follow the following format for your poetry submission:</p>

        <p className="Game__format-example">
          {exampleFormat}
        </p>

        {(this.state.mostRecentLine !== '' && !this.state.showPoem) && <RecentSubmission submission={this.state.mostRecentLine} />}

        {!this.state.showPoem && <PlayerSubmissionForm playerTurn={this.state.playerTurn} onSubmitLineCallback={this.onSubmitLine} />}

        <FinalPoem showPoemState={this.state.showPoem} showFinalCallback={this.onShowFinalPoem} finalPoem={this.state.finalPoem} />

      </div>
    );
  }
}

const FIELDS = [
  "The",
  {
    key: 'adj1',
    placeholder: 'adjective',
  },
  {
    key: 'noun1',
    placeholder: 'noun',
  },
  {
    key: 'adv',
    placeholder: 'adverb',
  },
  {
    key: 'verb',
    placeholder: 'verb',
  },
  "the",
  {
    key: 'adj2',
    placeholder: 'adjective',
  },
  {
    key: 'noun2',
    placeholder: 'noun',
  },
  ".",
];

export default Game;
