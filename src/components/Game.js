import React, { Component } from 'react';
import './Game.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';
import FinalPoem from './FinalPoem';
import RecentSubmission from './RecentSubmission';

class Game extends Component {

  constructor(props) {
    super(props);
    this.state = {
      submissions: [],
      isSubmitted: false,
      counter: 1,
    }
  }

  addSubmission = (newSentence)=> {
    console.log(newSentence)
    let nextSubmission = this.state.submissions
    nextSubmission.push(newSentence)
    this.setState({
      submissions: nextSubmission,
      counter: this.state.counter + 1
    }) 
    console.log(this.state.submissions)

  }
  setSubmitted=()=> {
    this.setState({
      isSubmitted: true,
      counter: 1,
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
    const playersubmissionform = this.state.isSubmitted? '' : <PlayerSubmissionForm onSubmissionCallback={this.addSubmission} Counter={this.state.counter}/>
    const recentsubmission = this.state.isSubmitted? '' : <RecentSubmission recentSubmission= {this.state.submissions[this.state.submissions.length - 1]}  />


    return (
      <div className="Game">
        <h2>Game</h2>

        <p>Each player should take turns filling out and submitting the form below. Each turn should be done individually and <em>in secret!</em> Take inspiration from the revealed recent submission. When all players are finished, click the final button on the bottom to reveal the entire poem.</p>

        <p>Please follow the following format for your poetry submission:</p>

        <p className="Game__format-example">
          { exampleFormat }
        </p>
        {recentsubmission}
        {playersubmissionform}
        

        <FinalPoem  poemCallback={this.setSubmitted} submissions={this.state.submissions} isSubmitted={this.state.isSubmitted} />
        

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
