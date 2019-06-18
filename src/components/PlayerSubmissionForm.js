import React, { Component } from 'react';
import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {
  constructor(props) {
    super(props);
    this.state = this.stateFields();
  }

  stateFields = () => {
    const formFields = {};
    this.props.format.forEach(elem => {
      if (elem.key) {
        formFields[elem.key] = '';
      }
    });
    return formFields;
  };

  handleInput = event => {
    const formField = {};
    formField[event.target.name] = event.target.value;
    this.setState(formField);
  };

  createForm = () => {
    console.log(this.state);
    return this.props.format.map((field, i) => {
      if (field.placeholder) {
        return (
          <input
            type="text"
            placeholder={field.placeholder}
            name={field.key}
            onChange={this.handleInput}
            value={this.state[field.key]}
            key={i}
          />
        );
      } else {
        return <span key={i}>{field}</span>;
      }
    });
  };

  render() {
    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{}</h3>

        <form className="PlayerSubmissionForm__form">
          <div className="PlayerSubmissionForm__poem-inputs">
            {this.createForm()}
          </div>

          <div className="PlayerSubmissionForm__submit">
            <input
              type="submit"
              value="Submit Line"
              className="PlayerSubmissionForm__submit-btn"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default PlayerSubmissionForm;
