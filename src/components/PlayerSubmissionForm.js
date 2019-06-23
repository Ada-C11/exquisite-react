import React, { Component } from 'react';
import './PlayerSubmissionForm.css';
import RecentSubmission from './RecentSubmission';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      adj1: '',
      noun1: '',
      adv: '',
      verb: '',
      adj2: '',
      noun2: '',

      playerNumber: 1,
      lastPoemLine: '',

      updatePoemLinesCallback: props.updatePoemLines,
      incrementPlayerNumberCallback: props.incrementPlayerNumberCallback
    }
  }

incrementPlayerNumber = () => {
    const newPlayerNumber = this.state.playerNumber + 1;
    this.setState({
      playerNumber: newPlayerNumber
    })
  }

onFieldTyping = (event) => {
  const field = {};
  field[event.target.name] = event.target.value;
  event.target.className=''
  this.setState(field);
}

// CURRENTLY THE FEILD WON'T TURN BACK TO WHITE IF YOU TYPE THEN DELETE ITS CONTENTS
// check that the state of the field matches /[x-y]/
// assign a class name to a variable
// update class on input field based on conditional

onSubmitLine = (event) => {
  event.preventDefault();

  const newPoemLine = `The ${this.state.adj1} ${this.state.noun1} ${this.state.adv} ${this.state.verb} the ${this.state.adj2} ${this.state.noun2}.`;

  this.setState ({
    adj1: '',
    noun1: '',
    adv: '',
    verb: '',
    adj2: '',
    noun2: '',
    lastPoemLine: newPoemLine,
  })

  this.incrementPlayerNumber();

  this.props.updatePoemLinesCallback(newPoemLine);
}
// variable name for class of pink and for empty string
// ternary for each input Line

  render() {


    return (
      <div className="PlayerSubmissionForm">

        {this.state.lastPoemLine !== "" && (
          <RecentSubmission
          lastPoemLine = {this.state.lastPoemLine} />)}

        <h3>Player Submission Form for Player #{ this.state.playerNumber }</h3>

        <form
          className="PlayerSubmissionForm__form"
          onSubmit={this.onSubmitLine} >

          <div className="PlayerSubmissionForm__poem-inputs">
            The
            <input
              className='PlayerSubmissionFormt__input--invalid'
              placeholder="adjective"
              name="adj1"
              type="text"
              onChange={this.onFieldTyping}
              value={this.state.adj1}/>

            <input
              className='PlayerSubmissionFormt__input--invalid'
              placeholder="noun"
              name="noun1"
              type="text"
              onChange={this.onFieldTyping}
              value={this.state.noun1} />

            <input
              className='PlayerSubmissionFormt__input--invalid'
              placeholder="adverb"
              name="adv"
              type="text"
              onChange={this.onFieldTyping}
              value={this.state.adv} />

            <input
              className='PlayerSubmissionFormt__input--invalid'
              placeholder="verb"
              name="verb"
              type="text"
              onChange={this.onFieldTyping}
              value={this.state.verb} />

              the

            <input
              className='PlayerSubmissionFormt__input--invalid'
              placeholder="adjective"
              name="adj2"
              type="text"
              onChange={this.onFieldTyping}
              value={this.state.adj2} />

            <input
              className='PlayerSubmissionFormt__input--invalid'
              placeholder="noun"
              name="noun2"
              type="text"
              onChange={this.onFieldTyping}
              value={this.state.noun2} />

          </div>

          <div className="PlayerSubmissionForm__submit">
            <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
          </div>
        </form>
      </div>
    );
  }
}

export default PlayerSubmissionForm;
