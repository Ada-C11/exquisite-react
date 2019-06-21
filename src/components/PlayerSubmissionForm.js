import React, { Component } from 'react';
import './PlayerSubmissionForm.css';
import PropTypes from 'prop-types';

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
    return validations[field].test(this.state[field]);
  };

  handleInput = event => {
    const formField = {};
    formField[event.target.name] = event.target.value;
    this.setState(formField);
  };

  handleSubmitPoem = event => {
    event.preventDefault();
    let isValid = true;
    const validations = this.validations();
    Object.keys(this.state).forEach(field => {
      if (!this.isValid(field, validations)) {
        isValid = false;
      }
    });
    if (isValid) {
      this.props.onPoemSubmissionCallback(this.formatPoemLine(this.state));
      this.setState({ ...this.stateFields(), errorMessage: null });
    } else {
      this.setState({
        errorMessage: '⚠️ Please fill out all fields to submit Line. ⚠️',
      });
    }
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
    return poemLine.slice(0, -2).concat(poemLine.slice(-1));
  };

  createFormBody = () => {
    const validations = this.validations();
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
              !this.isValid(field.key, validations)
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
        <h3>Player Submission Form for Player #{this.props.currentPlayer}</h3>
        {this.state.errorMessage && (
          <section className="PlayerSubmissionFormt__input--invalid center">
            {this.state.errorMessage}
          </section>
        )}

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

PlayerSubmissionForm.propTypes = {
  currentPlayer: PropTypes.number.isRequired,
  format: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        key: PropTypes.string,
        placeholder: PropTypes.string,
      }),
    ]).isRequired
  ),
  onPoemSubmissionCallback: PropTypes.func.isRequired,
};

export default PlayerSubmissionForm;
