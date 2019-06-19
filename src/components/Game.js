import React, { Component } from 'react';
import './Game.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';
import FinalPoem from './FinalPoem';
import RecentSubmission from './RecentSubmission';
import { thisTypeAnnotation } from '@babel/types';

class Game extends Component {

  constructor(props) {
    super(props);

    this.state ={
      poem: [],
      poemRevealed: false,
    }
  };

  addLine = (poemVerse) => {
    // const poemVerse = this.state.
    let updatedState = {...this.state};
    let updatedPoem = updatedState.poem

    updatedPoem.push(poemVerse)
    this.setState({
      updatedPoem,
    });
    console.log(this.poem)
  };

  revealPoem = () => {
    this.setState({
      poemRevealed: true
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
          { exampleFormat }
        </p>

        {/* <RecentSubmission line={ this.state.poem.pop()}/>   */}
        <RecentSubmission lastVerse={this.state.poem[this.state.poem.length - 1]} />
 
        <PlayerSubmissionForm addLineCallback={ this.addLine } playerNumber={ this.state.poem.length } fields={FIELDS}/>

        <FinalPoem poem={ this.state.poem } onRevealPoemCallback={ this.revealPoem } poemRevealed={this.state.poemRevealed} />

      </div>
    );
  }
}

const FIELDS = [
  "The",
  {
    key: 'adjective',
    placeholder: 'adjective',
  },
  {
    key: 'noun',
    placeholder: 'noun',
  },
  {
    key: 'adverb',
    placeholder: 'adverb',
  },
  {
    key: 'verb',
    placeholder: 'verb',
  },
  "the",
  {
    key: 'adjective2',
    placeholder: 'adjective',
  },
  {
    key: 'noun2',
    placeholder: 'noun',
  },
  ".",
];

export default Game;
