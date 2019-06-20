import React, { Component } from 'react';
import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);
  
    const stateFromFields = {}
    console.log(this.props.fields)
    this.props.fields.forEach((field) => {
      if (field.key) { 
        stateFromFields[field.key] = ''
      }
    });
    this.state = stateFromFields;

    // this.state = {
    //   adj1: '',
    //   noun1: '',
    //   adv: '',
    //   verb: '',
    //   adj2: '',
    //   noun2: '',
    // }
  }

  onInputChange = (event) => {
    console.log(`Field updated ${event.target.value}`)
    const updatedState = {}

    const field = event.target.name;
    const value = event.target.value;

    updatedState[field] = value;

    this.setState(updatedState);
  }

  clearFields() {
    const fields = {}
    this.props.fields.forEach((field) => {
      if (field.key) {
        fields[field.key] = ""
      }
      this.setState(fields)
    })
  }

  onFormSubmit = (event) => {
    event.preventDefault();
  
    const dataFromForm = {}
    this.props.fields.forEach((field) => {
      if (field.key) {
        dataFromForm[field.key] = this.state[field.key]
      }
    });

    this.props.addSubmissionCallback(dataFromForm);
    this.clearFields()
  }

  
  toggleClassName = (field) => {
    return (this.state[field.key] === '' ? 'PlayerSubmissionFormt__input--invalid' : 'PlayerSubmissionFormt__input')
  }
  
  render() {
    const formInputs = this.props.fields.filter(f => f.key).map((field) => {
      return <input
                key={field.key}
                type="text"
                placeholder={field.placeholder}
                name={field.key}
                value={this.state[field.key]}
                onChange={this.onInputChange}
                className={this.toggleClassName(field)}
              />
    })

    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{ this.props.playerID }</h3>

        <form className="PlayerSubmissionForm__form" onSubmit={this.onFormSubmit}>

          <div className="PlayerSubmissionForm__poem-inputs">

            {
              // Put your form inputs here... We've put in one below as an example
            }

            { formInputs }

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
