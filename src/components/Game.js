import React, { Component } from 'react';
import './Game.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';
import FinalPoem from './FinalPoem';
import RecentSubmission from './RecentSubmission';

class Game extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sentences: [],
      revealed: false
    }
  }

  addSentence = (sentence) => {
    const newSentences = this.state.sentences;
    newSentences.push(sentence);
    this.setState(newSentences)
  }

  finishPoem = () => {
    this.setState({ revealed: true });
  }

  makePoem = () => {
    const poem = this.state.sentences.map((sentence) => {
      console.log(sentence)
      return (<p>{sentence}</p>)
    });
    console.log(poem);
    return poem
  }

  render() {
    const submissionForm = (<PlayerSubmissionForm
      addSentenceCallback={this.addSentence}
      fields={FIELDS}
    />)

    const submissionSection = this.state.revealed ? <div></div> : submissionForm

    // chains words together from form 
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

        <RecentSubmission />

        {/* <PlayerSubmissionForm 
          addSentenceCallback = {this.addSentence}
          fields = {FIELDS}
        /> */}

        {submissionSection}

        <FinalPoem
          finishPoemCallback={this.finishPoem}
          sentences = {this.state.sentences}
          revealed = {this.state.revealed}
        />
        

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
