import React, { Component } from 'react';
import './Game.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';
import FinalPoem from './FinalPoem';
import RecentSubmission from './RecentSubmission';

class Game extends Component {
  constructor() {
    super();
    this.state = {
      recentSubmission: null,
      finalSubmission: { poemComplete: false, poem: [] },
      currentPlayer: 1,
    };
  }

  onPoemSubmission = lastLine => {
    let poem = this.state.finalSubmission.poem;
    poem.push(lastLine);
    console.log(poem);
    this.setState({
      recentSubmission: lastLine,
      finalSubmission: { poemComplete: false, poem: poem },
      currentPlayer: this.state.currentPlayer + 1,
    });
    console.log(this.state);
  };

  onFinalPoemDisplay = () => {
    this.setState({
      finalSubmission: { ...this.state.finalSubmission, poemComplete: true },
    });
    console.log(this.state.finalSubmission);
  };

  render() {
    const { recentSubmission, finalSubmission, currentPlayer } = this.state;
    const exampleFormat = FIELDS.map(field => {
      if (field.key) {
        return field.placeholder;
      } else {
        return field;
      }
    }).join(' ');
    return (
      <div className="Game">
        <h2>Game</h2>

        <p>
          Each player should take turns filling out and submitting the form
          below. Each turn should be done individually and <em>in secret!</em>{' '}
          Take inspiration from the revealed recent submission. When all players
          are finished, click the final button on the bottom to reveal the
          entire poem.
        </p>

        <p>Please follow the following format for your poetry submission:</p>

        <p className="Game__format-example">{exampleFormat}</p>
        {!finalSubmission.poemComplete &&
          (recentSubmission && (
            <RecentSubmission recentSubmission={recentSubmission} />
          ))}
        {!finalSubmission.poemComplete && (
          <PlayerSubmissionForm
            currentPlayer={currentPlayer}
            format={FIELDS}
            onPoemSubmissionCallback={this.onPoemSubmission}
          />
        )}

        <FinalPoem
          {...finalSubmission}
          finalPoemDisplayCallback={this.onFinalPoemDisplay}
        />
      </div>
    );
  }
}

const FIELDS = [
  'The',
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
  'the',
  {
    key: 'adj2',
    placeholder: 'adjective',
  },
  {
    key: 'noun2',
    placeholder: 'noun',
  },
  '.',
];

export default Game;
