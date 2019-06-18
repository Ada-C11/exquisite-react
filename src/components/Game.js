import React, { Component } from 'react';
import './Game.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';
import FinalPoem from './FinalPoem';
import RecentSubmission from './RecentSubmission';
import { throwStatement } from '@babel/types';

class Game extends Component {

  constructor(props) {
    super(props);

    this.state = {
      recentSubmission: '',
      finalPoem: [],
      player: 1,
      showFinal: false,
    };
  };

  addSubmission = (submission) => {
    const final = [...this.state.finalPoem]
    const recent = `The ${submission.adjective} ${submission.noun} ${submission.adverb} ${submission.verb} the ${submission.adjective2} ${submission.noun2}.`
    final.push(recent);

    const number = this.state.player + 1;

    this.setState({
      recentSubmission: recent,
      finalPoem: final,
      player: number
    });
  }

  showFinalPoem = () => {
    this.setState({
      showFinal: true,
    });
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
          { exampleFormat }
        </p>

        <RecentSubmission recent={this.state.recentSubmission}/>

    {!this.state.showFinal && <PlayerSubmissionForm newSubmissionCallback={this.addSubmission} playerNumber={this.state.player}/> }

        <FinalPoem final={this.state.finalPoem} show={this.state.showFinal} showFinalCallback={this.showFinalPoem}/>

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
