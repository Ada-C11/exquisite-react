import React, { Component } from 'react';
import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);
    const newFields = this.newFieldsState(this.props.fields);
    this.state = {
      fields: this.props.fields,
      playerNumber: 1,
      ...newFields
    }
  }

  newFieldsState = (fields) => {
    const newState = {};
    fields.forEach((field) => {
      if (typeof (field) == 'object') {
        newState[field.key] = "";
      }
    });
    return (newState)
  }

  validateInput = (input) => {
    const valid = (!input) ? "PlayerSubmissionFormt__input--invalid" : "";
    return (valid)
  }

  onInputChange = (event) => {
    const updatedState = {};
    updatedState[event.target.name] = event.target.value;
    this.setState(updatedState);
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    const newState = this.newFieldsState(this.state.fields)
    let verse = "";
    this.state.fields.forEach((field) => {
      if (typeof (field) == 'string') {
        verse += field + ' ';
      } else {
        verse += this.state[field.key] + ' ';
      }
    })
    this.setState({
      playerNumber: this.state.playerNumber + 1,
      ...newState
    });
    this.props.addNewVerseCallback(verse);
  }

  generateForm = () => {
    return this.state.fields.map((field, i) => {
      if (typeof (field) == "string") {
        return (<span key={i}>{field}</span>)
      } else {
        return (
          <input
            key={i}
            className={this.validateInput(this.state[field.key])}
            name={field.key}
            value={this.state[field.key]}
            placeholder={field.placeholder}
            type="text"
            onChange={this.onInputChange} />
        )
      }
    });
  }


  render() {
    const formInputs = this.generateForm();
    return (
      <div className={((this.props.gameComplete) ? "hidden" : "") + " PlayerSubmissionForm"}>
        <h3>Player Submission Form for Player #{this.state.playerNumber}</h3>
        <form
          className="PlayerSubmissionForm__form"
          onSubmit={this.onFormSubmit}>
          <div className="PlayerSubmissionForm__poem-inputs" >
            {formInputs}
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
