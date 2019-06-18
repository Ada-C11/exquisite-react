import React, { Component } from 'react';
import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      player: 1,
      adj1: '',
      noun1: '',
      adv: '',
      verb: '',
      adj2: '',
      noun2: ''
    }
  }

  onInputChange = (event) => {
    const updatedState = {};

    const field = event.target.name;
    const value = event.target.value;

    updatedState[field] = value;
    this.setState(updatedState);
  }

  render() {

    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{this.state.player}</h3>

        <form className="PlayerSubmissionForm__form" >

          <div className="PlayerSubmissionForm__poem-inputs">

            {
              // Put your form inputs here... We've put in one below as an example
            }

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
              placeholder='noun' />
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
