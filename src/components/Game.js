import React, { Component } from 'react';
import './Game.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';
import FinalPoem from './FinalPoem';
import RecentSubmission from './RecentSubmission';

class Game extends Component {

  constructor(props) {
    super(props);

    this.state = {
      finalPoem: [],
      isFinal: false,
    };
  }

  recentSubmission = (poem) => {
    const poemLength = poem.length - 1
    const lastLine = poem[poemLength]
    return lastLine
  }

  addSubmission = (line) => {
    const currentPoem = this.state.finalPoem;
    currentPoem.push(line);
    this.setState({
      finalPoem: currentPoem,
    })
  }

  displayFinalPoem = (event) => {
    event.preventDefault();
    this.setState({
      isFinal: true,
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

    const displaySubmission = this.state.finalPoem.length > 0 && !this.state.isFinal ? <RecentSubmission recentLine={this.recentSubmission(this.state.finalPoem)}/> : '';

    return (
      <div className="Game">
        <h2>Game</h2>

        <p>Each player should take turns filling out and submitting the form below. Each turn should be done individually and <em>in secret!</em> Take inspiration from the revealed recent submission. When all players are finished, click the final button on the bottom to reveal the entire poem.</p>

        <p>Please follow the following format for your poetry submission:</p>

        <p className="Game__format-example">
          { exampleFormat }
        </p>

        { displaySubmission }

        <PlayerSubmissionForm fields={FIELDS} addSubmissionCallback={this.addSubmission}/>

        <FinalPoem poem={ this.state.finalPoem } finalPoemCallback={this.displayFinalPoem} isFinal={this.state.isFinal}/>
        
        {/* <FinalPoem poem={this.state.finalPoem} finalPoemCallback={this.displayFinalPoem}/> */}

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
