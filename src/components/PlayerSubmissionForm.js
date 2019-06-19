import React, { Component } from 'react';
import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);

    const initialState = {};
    props.fields.forEach((field) => {
      if (field.key) {
        initialState[field.key] = "";
      }
    });
    this.state = initialState;
  }

  // this.state = {
  //   adjective1: "",
  //   noun1: "",
  //   adverb: "",
  //   verb: "",
  //   adjective2: "",
  //   noun2: "",
  //   // player: 1,
  //   // addNewLineCallback: this.addNewLine,
  // };


  onValueChange = (event) => {
    console.log(`${event.target} Updated ${event.target.value}`);

    const fields = {};
    fields[event.target.name] = event.target.value;
    this.setState(fields);
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    let newSubmission = "";
    this.props.fields.forEach((field) => {
      if (field.key) {
        newSubmission += this.state[field.key];
      } else {
        return field;
      }
      return newSubmission;
    });
    this.props.addNewLineCallback(newSubmission);

    // const newLine = {
    //   adjective1: this.state.adjective1,
    //   noun1: this.state.noun1,
    //   adverb: this.state.adverb,
    //   verb: this.state.verb,
    //   adjective2: this.state.adjective2,
    //   noun2: this.state.noun2,
    //   player: this.state.player,
    // }



    // Reset the Form
    this.setState({
      adjective1: "",
      noun1: "",
      adverb: "",
      verb: "",
      adjective2: "",
      noun2: "",
    });
  }

  render() {

    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{this.props.index}</h3>

        <form
          className="PlayerSubmissionForm__form"
          onSubmit={this.onFormSubmit} >

          <div className="PlayerSubmissionForm__poem-inputs">
            The
            <input
              name="adjective1"
              placeholder="adjective"
              type="text"
              className="PlayerSubmissionForm__poem-inputs"
              onChange={this.onValueChange}
              value={this.state.adjective1}
            />
            <input
              name="noun1"
              placeholder="noun"
              type="text"
              className="PlayerSubmissionForm__poem-inputs"
              onChange={this.onValueChange}
              value={this.state.noun1}
            />
            <input
              name="adverb"
              placeholder="adverb"
              type="text"
              className="PlayerSubmissionForm__poem-inputs"
              onChange={this.onValueChange}
              value={this.state.adverb}
            />
            <input
              name="verb"
              placeholder="verb"
              type="text"
              className="PlayerSubmissionForm__poem-inputs"
              onChange={this.onValueChange}
              value={this.state.verb}
            />
            the
            <input
              name="adjective2"
              placeholder="adjective"
              type="text"
              className="PlayerSubmissionForm__poem-inputs"
              onChange={this.onValueChange}
              value={this.state.adjective2}
            />
            <input
              name="noun2"
              placeholder="noun"
              type="text"
              className="PlayerSubmissionForm__poem-inputs"
              onChange={this.onValueChange}
              value={this.state.noun2}
            />
            .
          </div>
          <div className="PlayerSubmissionForm__submit">
            <input
              name="submit"
              type="submit"
              className="PlayerSubmissionForm__submit-btn"
              value="Submit Line"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default PlayerSubmissionForm;
