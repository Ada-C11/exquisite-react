import React, { Component } from 'react';
import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{  }</h3>

        <form className="PlayerSubmissionForm__form" >

          <div className="PlayerSubmissionForm__poem-inputs">

            {
              // Put your form inputs here... We've put in one below as an example
            }

            <input
              placeholder="hm..."
              type="text" />
            <input
              placeholder="hm..."
              type="text" />

        
          <label htmlFor="firstName">First Name:</label>
          <input name="firstName" value={this.state.fullName} onChange={this.onNameChange}  />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input name="lastName" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input name="email" />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input name="password" />
        </div>

        <input
          type="submit"
          value="Create Account"
        />

          <div className="PlayerSubmissionForm__submit">
            <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
          </div>
        </form>
      </div>
    );
  }
}

export default PlayerSubmissionForm;
