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

  validations = () => {
    const validations = {};
    Object.keys(this.state).forEach(field => {
      validations[field] = /.+/;
    });
    return validations;
  };

  isValid = (field, validations) => {
    return validations[field.key].test(this.state[field.key]);
  };

  handleInput = event => {
    const formField = {};
    formField[event.target.name] = event.target.value;
    this.setState(formField);
  };

  handleSubmitPoem = event => {
    event.preventDefault();
    console.log(event);
    console.log(event.target);
    console.log(this.formatPoemLine(this.state));
  };

  formatPoemLine = poemState => {
    let poemLine = this.props.format
      .map(word => {
        if (word.key) {
          return this.state[word.key];
        } else {
          return word;
        }
      })
      .join(' ');
    return poemLine.slice(0, -3).concat(poemLine.slice(-1));
  };
  createFormBody = () => {
    const validations = this.validations();
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
            className={
              !this.isValid(field, validations)
                ? 'PlayerSubmissionFormt__input--invalid'
                : ''
            }
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

        <form
          className="PlayerSubmissionForm__form"
          onSubmit={this.handleSubmitPoem}
        >
          <div className="PlayerSubmissionForm__poem-inputs">
            {this.createFormBody()}
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
