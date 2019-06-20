import React, { Component } from 'react';
import './PlayerSubmissionForm.css';
import PropTypes from 'prop-types';


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
      newPoemLine: '',
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

onFieldTyping = (event) => {
  console.log(`field updated: ${event.target.value}`);

  const field = {};
  field[event.target.name] = event.target.value;

  this.setState(field);
}

onFormSubmit = (event) => {
  event.preventDefault();
  console.log(this.state);

  // const newPoemLine = `The ${this.state.adj1} ${this.state.noun1} ${this.state.adv}`;
  this.setState({
    newPoemLine: `The ${this.state.adj1} ${this.state.noun1} ${this.state.adv}`
  })

  this.setState ({
    adj1: '',
    noun1: '',
    adv: '',
    verb: '',
    adj2: '',
    noun2: '',
    lastPoemLine: this.state.newPoemLine
  })
}

  render() {

    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{ this.props.playerNumber }</h3>

        <form
          className="PlayerSubmissionForm__form"
          onSubmit={this.onFormSubmit} >

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
