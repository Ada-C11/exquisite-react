import React, { Component } from 'react';
import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);

    this.state = this.emptyStateObject();
  }

  emptyStateObject = () => {
    let stateObject = {}
    this.props.fields.forEach((field) => {
      if(typeof field != 'string') {
        stateObject[field.key] = ''
      }
    })
    return stateObject;
  }

  validations = () => {
    let validationsObject = {}
    this.props.fields.forEach((field) => {
      if(typeof field != 'string') {
        validationsObject[field.key] = /.+/
      }
    })
    return validationsObject;
  }

  fieldValid = (fieldName) => {
    return this.validations()[fieldName].test(this.state[fieldName]);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let fullLine = ''
    this.props.fields.forEach((field) => {
      if(typeof field === 'string') {
        fullLine += field;
      } else {
        fullLine += this.state[field.key]
      }
      fullLine += ' '
    })
    this.props.addLineCallback(fullLine.substring(0, fullLine.length-1));
    this.setState(this.emptyStateObject);
  }

  onChangeHandler = (event) => {
    const field = {}
    field[event.target.name] = event.target.value;

    console.log(`${event.target.name}: ${event.target.value}`)

    this.setState(field);
  }

  generateInputs = () => {
    const formFields = this.props.fields.map((field, i) => {
      if(typeof field === 'string') {
        return field;
      } else {
        return (
          <input
            key={i}
            name={field.key}
            onChange={this.onChangeHandler}
            className={`PlayerSubmissionForm__poem-inputs ${this.fieldValid(field.key) ? '' : "PlayerSubmissionForm__input--invalid"}`}
            placeholder={field.placeholder}
            type="text"
            value={this.state[field.key]} />
        );
      }
    });

    return (
      <div className="PlayerSubmissionForm__poem-inputs">
        {formFields}
      </div>
    )
  }

  render() {
    console.log(this.validations())

    return (
      <div className={`PlayerSubmissionForm ${this.props.gameOver ? 'hidden' : 'visible'}`}>
        <h3>Player Submission Form for Player #{ this.props.currentPlayer }</h3>

        <form className="PlayerSubmissionForm__form" >
          
          {this.generateInputs()}

          <div className="PlayerSubmissionForm__submit">
            <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" onClick={this.handleSubmit}/>
          </div>
        </form>
      </div>
    );
  }
}

export default PlayerSubmissionForm;
