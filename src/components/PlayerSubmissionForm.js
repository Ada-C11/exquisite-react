import React, { Component } from 'react';
import './PlayerSubmissionForm.css';
// import PropTypes from 'prop-types';
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
    // this.cleared = {
    //
    // };
    //
    // this.state = {...this.cleared}
  }

incrementPlayerNumber = () => {
    const newPlayerNumber = this.state.playerNumber + 1;
    // console.log(`new player number ${newPlayerNumber}`);
    this.setState({
      playerNumber: newPlayerNumber
    })
  }

onFieldTyping = (event) => {
  // console.log(`field updated: ${event.target.value}`);

  const field = {};
  field[event.target.name] = event.target.value;

  this.setState(field);
}



// console.log('newPoemLine is ' newPoemLine);

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
    // lastPoemLine: `The ${this.state.adj1} ${this.state.noun1} ${this.state.adv} ${this.state.verb} the ${this.state.adj2} ${this.state.noun2}.`,
  })
  // console.log(`last poem line in state ${this.state.lastPoemLine} - might not be done updating!`);
  console.log(`last submited line: ${newPoemLine}`);
  this.incrementPlayerNumber();

  this.props.updatePoemLinesCallback(newPoemLine);
  // this.props.updatePoemLinesCallback(this.state.lastPoemLine);

}

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
              placeholder="adjective"
              name="adj1"
              type="text"
              onChange={this.onFieldTyping}
              value={this.state.adj1}/>

            <input
              placeholder="noun"
              name="noun1"
              type="text"
              onChange={this.onFieldTyping}
              value={this.state.noun1} />

            <input
              placeholder="adverb"
              name="adv"
              type="text"
              onChange={this.onFieldTyping}
              value={this.state.adv} />

            <input
              placeholder="verb"
              name="verb"
              type="text"
              onChange={this.onFieldTyping}
              value={this.state.verb} />

              the

            <input
              placeholder="adjective"
              name="adj2"
              type="text"
              onChange={this.onFieldTyping}
              value={this.state.adj2} />

            <input
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
