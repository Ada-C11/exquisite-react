import React, { Component } from 'react';
import './Game.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';
import FinalPoem from './FinalPoem';
import RecentSubmission from './RecentSubmission';

class Game extends Component {
  constructor() {
    super();
    this.state = {
      inputs: [],
      revealFinalPoem: false,
    }
  }

  storeInputs = (input) => {
    const inputs = this.state.inputs;
    inputs.push(input);
    this.setState({
      inputs,
    })
  }

  displayPoem = (display) => {
    this.setState({
      revealFinalPoem: display,
    })
  }

  render() {
    const { inputs } = this.state;

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
          { exampleFormat }
        </p>

        <RecentSubmission mostRecentInput={this.state.inputs.length === 0 ? '' : this.state.inputs[inputs.length - 1] } hidden={this.state.revealFinalPoem}/>

        <PlayerSubmissionForm fields={FIELDS} inputStorage={this.storeInputs} hidden={this.state.revealFinalPoem}/>

        <FinalPoem allInputs={this.state.inputs} hiddenCallback={this.displayPoem} hidden={this.state.revealFinalPoem}/>

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
