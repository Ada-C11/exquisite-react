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
      // showPoem: false
    }
  }

  addSubmission = (submission) => {
    // add submission to allSubmissions
    const updatedAllSubmissions = this.state.allSubmissions
    updatedAllSubmissions.push(submission)

    // change recent submission to recentSubmission
    this.setState({
      recentSubmission: submission,
      allSubmissions: updatedAllSubmissions
    })

    console.log('recentSubmission:', this.state.recentSubmission)
    console.log('allSubmissions:', this.state.allSubmissions)
    console.log('updatedAllSubmissions:', updatedAllSubmissions)
  }

  render() {

    const exampleFormat = FIELDS.map((field) => {
      if (field.key) {
        return field.placeholder;
      } else {
        return field;
      }
    }).join(" ");

    // const formatPoems = this.state.allSubmissions.map((poem) => {
    //   return Object.values(poem)
    // }).join();
    

    return (
      <div className="Game">
        <h2>Game</h2>

        <p>Each player should take turns filling out and submitting the form below. Each turn should be done individually and <em>in secret!</em> Take inspiration from the revealed recent submission. When all players are finished, click the final button on the bottom to reveal the entire poem.</p>

        <p>Please follow the following format for your poetry submission:</p>

        <p className="Game__format-example">
          { exampleFormat } 
        </p>

        <RecentSubmission 
        showSubmission={this.state.recentSubmission} />

        <PlayerSubmissionForm 
        submitFormCallback={this.addSubmission}/>

        <FinalPoem 
        allPoems={this.state.allSubmissions}
        allSubmissionsString={this.state.allSubmissions}
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
