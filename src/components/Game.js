import React, { Component } from 'react';
import './Game.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';
import FinalPoem from './FinalPoem';
import RecentSubmission from './RecentSubmission';

class Game extends Component {

  constructor(props) {
    super(props);
    this.state = {
      submissionList: [],
      hidden: false,
    }
  }

  addSentence = (sentence) => {
    const submissionList = this.state.submissionList;
    submissionList.push(sentence);
    this.setState({submissionList});
  }

  displayFinalPoem = (poem) => {
    this.setState({hidden:true})
  }
  
  render() {
    const exampleFormat = FIELDS.map((field) => {
      if (field.key) {
        return field.placeholder;
      } else {
        return field;
      }
    }).join(" ");

    const poem = this.state.submissionList.map((submission) => {
      return FIELDS.map((field) => {
        if (field.key) {
          return submission[field.key];
        } else {
          return field;
        }
      }).join(" ");
    });
    
    const displayType = this.state.hidden? 'hidden' : '' 
    return (
      <div className="Game">
        <h2>Game</h2>

        <p>Each player should take turns filling out and submitting the form below. Each turn should be done individually and <em>in secret!</em> Take inspiration from the revealed recent submission. When all players are finished, click the final button on the bottom to reveal the entire poem.</p>

        <p>Please follow the following format for your poetry submission:</p>

        <p className="Game__format-example">
          { exampleFormat }
        </p>
        <div className={displayType}>
          <RecentSubmission recentSubmission={poem[poem.length-1]} />

          <PlayerSubmissionForm  addSentenceCallback={this.addSentence}/>
        </div>

          <FinalPoem poem={poem} displayButton={this.state.hidden} displayFinalPoemCallback={this.displayFinalPoem}/>
        
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
