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

  validateInput = (input) => {
    const valid = (!input) ? "PlayerSubmissionFormt__input--invalid" : "";
    return (valid)
  }
  onInputChange = (event) => {
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
    this.props.addNewVerseCallback(verse);

  }
  render() {
    return (
      <div className={((this.props.gameComplete) ? "hidden" : "") + " PlayerSubmissionForm"}>
        <h3>Player Submission Form for Player #{this.state.playerNumber}</h3>
        <form
          className="PlayerSubmissionForm__form"
          onSubmit={this.onFormSubmit}
        >

          <div className="PlayerSubmissionForm__poem-inputs" >
            {"The "}
            <input
              className={this.validateInput(this.state.first)}
              name="first"
              value={this.state.first}
              placeholder="adjective"
              type="text"
              onChange={this.onInputChange} />
            <input
              className={this.validateInput(this.state.second)}
              name="second"
              value={this.state.second}
              placeholder="noun"
              type="text"
              onChange={this.onInputChange} />
            <input
              className={this.validateInput(this.state.third)}
              name="third"
              value={this.state.third}
              placeholder="adverb"
              type="text"
              onChange={this.onInputChange} />
            <input
              className={this.validateInput(this.state.fourth)}
              name="fourth"
              value={this.state.fourth}
              placeholder="verb"
              type="text"
              onChange={this.onInputChange} />
            {"the "}
            <input
              className={this.validateInput(this.state.fifth)}
              name="fifth"
              value={this.state.fifth}
              placeholder="adjective"
              type="text"
              onChange={this.onInputChange} />
            <input
              className={this.validateInput(this.state.sixth)}
              name="sixth"
              value={this.state.sixth}
              placeholder="noun"
              type="text"
              onChange={this.onInputChange} />
            {"."}

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
