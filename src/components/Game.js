import React, { Component } from 'react';
import './Game.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';
import FinalPoem from './FinalPoem';
import RecentSubmission from './RecentSubmission';


class Game extends Component {

  constructor(props) {
    super(props);
    this.state = INITIAL_STATE;
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
        <PlayerSubmissionForm onPlayerFormButtonCallback={this.onPlayerFormButton} fields={FIELDS}/>
      )
    }
  }

  renderFinalPoem(){
   
    console.log(this.state.finalPoem)
    return(
      <FinalPoem value={this.state.finalPoemButtonValue} onFinalPoemButtonCallback={this.onFinalPoemButton} poem={this.state.finalPoem} clicked={this.state.finalPoemClicked}/>
    )
  }

  onPlayerFormButton = (event, submission) => {

    event.preventDefault();
    
    let last = ''

    Object.keys(submission).map(function(key){

      if(key === 'adj1'){
        last += 'The '
      } else if (key === 'adj2') {
        last += 'the'
      }
      return (last += submission[key] + ' ')

    })

    const newFinalPoem = [
      ...this.state.finalPoem,
      last
    ];
    this.setState({
      finalPoem: newFinalPoem,
      mostRencentSubmission: last,
    })

    this.renderPlayerSubmissionForm()

  }

  onFinalPoemButton = () => {

    console.log(this.state.finalPoem)

    let clicked;
    let value = ''
    

    if (this.state.finalPoemClicked === false) {

      clicked = true
      value = "Play again!"
    
    }

    this.setState(!clicked ? INITIAL_STATE : {
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

        {this.renderFinalPoem()}

      </div>
    );
  }
}

const INITIAL_STATE = {
  mostRencentSubmission: '',
  finalPoem: [],
  poem: '',
  finalPoemClicked: false,
  finalPoemButtonValue: "We are finished: Reveal the Poem",
};

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
