import React, { Component } from 'react';
import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {
  
  constructor(props) {
    super(props);
    const initState = {
      player: 1, 
    }

    props.fields.forEach((field) => {
      if (field.key) {
        initState[field.key] = ''
      }
    })

    this.state = initState
  }

  onInputChange = (event) => {
    const updatedState = {};

    const field = event.target.name;
    const value = event.target.value;

    updatedState[field] = value;
    this.setState(updatedState);
  }

  makeSentence = () => {
    const words = Object.values(this.state).slice(1);
    const sentence = 'The ' + words.slice(0, 4).join(' ') + ' the' + words.slice(4,6).join(' ');
    return sentence 
  }

  incrementPlayer = () => {
    const newState = this.state;
    newState.player += 1;
    this.setState(newState);
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.incrementPlayer();
    this.props.addSentenceCallback(this.makeSentence())

  }

  render() {
    const formFields = this.props.fields.map((field, i) => {
      if (field.key) {
      return (
      <input
      key = {i}
      name={field.key}
      type="text"
      value={this.state[field.key]}
      onChange={this.onInputChange}
      placeholder={field.placeholder}
      />
      )}
      else {
        return field 
      }
    })

    return (
      <div className="PlayerSubmissionForm" onSubmit={this.onFormSubmit}>
        <h3>Player Submission Form for Player #{this.state.player}</h3>

        <form className="PlayerSubmissionForm__form" >

          <div className="PlayerSubmissionForm__poem-inputs">

            {
              formFields
            }
{/* 
          The
          <input
              name="adj1"
              type="text"
              value={this.state.ajd1}
              onChange={this.onInputChange}
              placeholder='adjective' />
            <input
              name="noun1"
              type="text"
              value={this.state.noun1}
              onChange={this.onInputChange}
              placeholder='noun' />
            <input
              name="adv"
              type="text"
              value={this.state.adv}
              onChange={this.onInputChange}
              placeholder='adverb' />
            <input
              name="verb"
              type="text"
              value={this.state.verb}
              onChange={this.onInputChange}
              placeholder='verb' />
            the
          <input
              name="adj2"
              type="text"
              value={this.state.ajd2}
              onChange={this.onInputChange}
              placeholder='adjective' />
            <input
              name="noun2"
              type="text"
              value={this.state.noun2}
              onChange={this.onInputChange}
              placeholder='noun' /> */}
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
