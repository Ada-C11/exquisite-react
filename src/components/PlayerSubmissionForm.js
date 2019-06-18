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
      // first: "",
      // second: "",
      // third: "",
      // fourth: "",
      // fifth: "",
      // sixth: ""
    }
    // this.setFieldsState(this.props.fields);

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
    // console.log(event.target.value)
    // console.log(event.target.name)
    console.log(this.state[event.target.name])
    const updatedState = {};
    const field = event.target.name;
    const value = event.target.value;
    updatedState[field] = value;
    this.setState(updatedState);
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    const newPlayerNumber = this.state.playerNumber + 1
    const newState = this.newFieldsState(this.state.fields)
    let verse = "";
    this.state.fields.forEach((field) => {
      if (typeof (field) == 'string') {
        verse += field + ' ';
      } else {
        verse += this.state[field.key] + ' ';
      }
    })
    // const verse = `The ${this.state.first} ${this.state.second} ${this.state.third} ${this.state.fourth} the ${this.state.fifth} ${this.state.sixth}.`
    this.setState({
      playerNumber: newPlayerNumber,
      ...newState
      // first: "",
      // second: "",
      // third: "",
      // fourth: "",
      // fifth: "",
      // sixth: ""
    });
    this.props.addNewVerseCallback(verse);
  }
  generateForm = () => {
    return this.state.fields.map((field, i) => {
      if (typeof (field) == "string") {
        // console.log(field);
        return (<span key={i}>{field}</span>)
      } else {
        console.log("in generateForm")
        console.log(field.key)
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
    // console.log(this.state.fields);
    const formInputs = this.generateForm();
    console.log(formInputs)
    return (
      <div className={((this.props.gameComplete) ? "hidden" : "") + " PlayerSubmissionForm"}>
        <h3>Player Submission Form for Player #{this.state.playerNumber}</h3>
        <form
          className="PlayerSubmissionForm__form"
          onSubmit={this.onFormSubmit}
        >

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
