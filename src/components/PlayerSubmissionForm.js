import React, { Component } from 'react';
import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      playerNumber: 1,
      first: "",
      second: "",
      third: "",
      fourth: "",
      fifth: "",
      sixth: ""
    }
  }

  onInputChange = (event) => {
    console.log(event.target.value)
    const updatedState = {};

    const field = event.target.name;
    const value = event.target.value;

    updatedState[field] = value;
    this.setState(updatedState);
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    const newPlayerNumber = this.state.playerNumber + 1
    const verse = `The ${this.state.first} ${this.state.second} ${this.state.third} ${this.state.fourth} the ${this.state.fifth} ${this.state.sixth}.`
    this.setState({
      playerNumber: newPlayerNumber,
      first: "",
      second: "",
      third: "",
      fourth: "",
      fifth: "",
      sixth: ""
    });


  }
  render() {

    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{this.state.playerNumber}</h3>
        <form
          className="PlayerSubmissionForm__form"
          onSubmit={this.onFormSubmit}
        >

          <div className="PlayerSubmissionForm__poem-inputs" onChange={this.onInputChange}>

            <input name="first" value={this.state.first} placeholder="adjective" type="text" />
            <input name="second" value={this.state.second} placeholder="noun" type="text" />
            <input name="third" value={this.state.third} placeholder="adverb" type="text" />
            <input name="fourth" value={this.state.fourth} placeholder="verb" type="text" />
            <input name="fifth" value={this.state.fifth} placeholder="adjective" type="text" />
            <input name="sixth" value={this.state.sixth} placeholder="noun" type="text" />

            <input
              placeholder="hm..."
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
