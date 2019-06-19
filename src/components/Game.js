import React, { Component } from 'react';
import './Game.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';
import FinalPoem from './FinalPoem';
import RecentSubmission from './RecentSubmission';

class Game extends Component {

  constructor(props) {

    super(props);
    this.state = {
      mostRencentSubmission: '',
      finalPoem: [],
      poem: '',
      finalPoemClicked: false,
      finalPoemButtonValue: "We are finished: Reveal the Poem",
    }

  }

  renderRecentSubmission() {
    if(this.state.mostRencentSubmission !== '' && this.state.finalPoemClicked === false) {
      return (
        <RecentSubmission mostRecentSubmission={this.state.mostRencentSubmission}/>
      )
    }
  }

  renderPlayerSubmissionForm(){
    if(this.state.finalPoemClicked === false){
      return (
        <PlayerSubmissionForm onPlayerFormButtonCallback={this.onPlayerFormButton}/>
      )
    }
  }

  onPlayerFormButton = (event, full) => {

    event.preventDefault();
    
    let finalPoem = this.state.finalPoem
    finalPoem.push(full)

    let last  = this.state.finalPoem[this.state.finalPoem.length - 1]

    this.setState({
      finalPoem,
      mostRencentSubmission: last,
    })

  }

  onFinalPoemButton = () => {

    let clicked = ''
    let value = ''
    let poemBuilt = ''
    if (this.state.finalPoemClicked === false){
      poemBuilt = ""
      poemBuilt += this.state.finalPoem.map((line) => {
      return (line + "\n")
    }).join(" ")

      clicked = true
      value = "Play again!"
    
    } else {
      clicked = false
      value = "We are finished: Reveal the Poem"
    }

    this.setState({
      mostRencentSubmission: '',
      finalPoem: [],
      poem: poemBuilt,
      finalPoemClicked: clicked,
      finalPoemButtonValue: value,
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

        {this.renderRecentSubmission()}

        {this.renderPlayerSubmissionForm()}

        <FinalPoem value={this.state.finalPoemButtonValue} onFinalPoemButtonCallback={this.onFinalPoemButton} poem={this.state.poem} />

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
