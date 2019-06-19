import React, { Component } from 'react';
import './Game.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';
import FinalPoem from './FinalPoem';
import RecentSubmission from './RecentSubmission';

class Game extends Component {


  constructor(props) {
    super(props);

    this.state = {
      recentLine: '',
      poem: [],
      finalDisplay: false,
      player: 1
    }
  }

  onSubmitLine = ({ adjective1, noun1, adverb, verb, adjective2, noun2 }) => {

    const newLine = 'The ' + adjective1 + ' ' + noun1 + ' ' + adverb + ' ' + verb + ' the ' + adjective2 + ' ' + noun2 + ".";
    this.state.poem.push(newLine);

    this.setState({
      recentLine: newLine,
      poem: this.state.poem,
      player: this.state.player + 1
    
    })

  }

  onShowPoem = () => {
    console.log(`I am in show poem before: ${this.state.finalDisplay}` );
    
    this.setState({
      finalDisplay: true
    })
    
    console.log(`I am in show poem after: ${this.state.finalDisplay}` );
  }

  render() {
    const { recentLine, poem, finalDisplay, player } = this.state;

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

        {(!finalDisplay && player < 1) && <RecentSubmission
          line={recentLine} />}

        {!finalDisplay && <PlayerSubmissionForm
          onSubmitLineCallback={this.onSubmitLine}
          playerNumber={player} />}

        <FinalPoem
          finalPoem={poem}
          onShowPoemCallback={this.onShowPoem}
          display={finalDisplay} />

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
