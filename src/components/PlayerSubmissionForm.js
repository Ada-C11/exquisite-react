import React, { Component } from 'react';
import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      adjective1: '',
      noun1: '',
      adverb: '',
      verb: '',
      adjective2: '',
      noun2: '',
    };
  }
  // all fields need at least one character
  validations = {
    adjective1: /.+/,
    noun1: /.+/,
    adverb: /.+/,
    verb: /.+/,
    adjective2: /.+/,
    noun2: /.+/,
  }

  fieldValid = (fieldName) => {
    return this.validations[fieldName].test(this.state[fieldName]);
  }

  onChangeHandler = (event) => {
    console.log(event.target);
    console.log(event.target.name);
    console.log(event.target.value);
    const field = {}
    field[event.target.name] = event.target.value
    this.setState(field)
  }


  handleSubmit = (event) => {
    event.preventDefault();
    let allFieldsValid = true;

    Object.keys(this.validations).forEach((fieldName) => {
      if (!this.fieldValid(fieldName)) {
        allFieldsValid = false;
      }
    })

    if (allFieldsValid) {
      this.props.addSubmissionCallback({
        adjective1: this.state.adjective1,
        noun1: this.state.noun1,
        adverb: this.state.adverb,
        verb: this.state.verb,
        adjective2: this.state.adjective2,
        noun2: this.state.noun2,
      })
      this.setState({
        adjective1: '',
        noun1: '',
        adverb: '',
        verb: '',
        adjective2: '',
        noun2: '',
      })
    }
  }
  render() {

    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{  }</h3>

        <form className="PlayerSubmissionForm__form" >

          <div className="PlayerSubmissionForm__poem-inputs">
            <input
              name="adjective1" onChange={this.onChangeHandler} value={this.state.adjective1}
              placeholder="adjective"
              type="text" />
          </div>
          <div className="PlayerSubmissionForm__poem-inputs">
            <input
              name="noun1" onChange={this.onChangeHandler} value={this.state.noun1}
              placeholder="noun"
              type="text" />
          </div>
          <div className="PlayerSubmissionForm__poem-inputs">
            <input
              name="adverb" onChange={this.onChangeHandler} value={this.state.adverb}
              placeholder="adverb"
              type="text" />
          </div>
          <div className="PlayerSubmissionForm__poem-inputs">
            <input
              name="verb" onChange={this.onChangeHandler} value={this.state.verb}
              placeholder="verb"
              type="text" />
          </div>
          <div className="PlayerSubmissionForm__poem-inputs">
            <input
              name="adjective2" onChange={this.onChangeHandler} value={this.state.adjective2}
              placeholder="adjective"
              type="text" />
          </div>
          <div className="PlayerSubmissionForm__poem-inputs">
            <input
              name="noun2" onChange={this.onChangeHandler} value={this.state.noun2}
              placeholder="noun"
              type="text" />
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
