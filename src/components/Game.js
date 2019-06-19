import React, { Component } from 'react';
import './Game.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';
import FinalPoem from './FinalPoem';
import RecentSubmission from './RecentSubmission';

class Game extends Component {

  constructor(props) {
    super(props);

    this.state = {
      recentSubmission: undefined,
      allSubmissions: [],
      showPoem: false
    }
  }

  showAllPoems = () => {
    this.setState({
      showPoem: true
    })
  }

  addSubmission = (submission) => {
    const updatedAllSubmissions = this.state.allSubmissions
    updatedAllSubmissions.push(submission)

    this.setState({
      recentSubmission: submission,
      allSubmissions: updatedAllSubmissions
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

        {this.state.recentSubmission && <RecentSubmission 
        showSubmission={this.state.recentSubmission} /> }
        
        {!this.state.showPoem && <PlayerSubmissionForm 
        submitFormCallback={this.addSubmission}/>}

        <FinalPoem 
        allPoems={this.state.allSubmissions}
        allSubmissionsString={this.state.allSubmissions}
        showAllPoemsCallback={this.showAllPoems}
        showPoemStatus={this.state.showPoem}
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
