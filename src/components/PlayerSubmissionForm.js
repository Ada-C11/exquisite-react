import React, { Component } from "react";
import "./PlayerSubmissionForm.css";

class PlayerSubmissionForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      adjective1: "",
      noun1: "",
      adverb1: "",
      verb1: "",
      adjective2: "",
      noun2: "",
      isDirty: false,
      playerCount: 1
    };
  }

  onInputChange = event => {
    const updatedState = {};

    const field = event.target.name;
    const value = event.target.value;

    updatedState[field] = value;
    this.setState(updatedState);
  };

  onFormSubmit = event => {
    event.preventDefault();

    const newLine = {
      adjective1: this.state.adjective1,
      noun1: this.state.noun1,
      adverb1: this.state.adverb1,
      verb1: this.state.verb1,
      adjective2: this.state.adjective2,
      noun2: this.state.noun2
    };

    if (this.hasValidInput) {
      this.props.addLineCallback(newLine);
    }

    this.setState({
      adjective1: "",
      noun1: "",
      adverb1: "",
      verb1: "",
      adjective2: "",
      noun2: "",
      isDirty: true
    });

    this.setState(prevState => {
      return {
        playerCount: prevState.playerCount + 1
      };
    });
  };

  hasValidInput = () => {
    return (
      this.state.adjective1 !== "" &&
      this.state.Adjective1 !== "" &&
      this.state.Noun1 !== "" &&
      this.state.Adverb1 !== "" &&
      this.state.Verb1 !== "" &&
      this.state.Adjective2 !== "" &&
      this.state.Noun2 !== ""
    );
  };

  nameRequired = () => {
    if (this.hasValidInput()) {
      return null;
    } else if (this.state.isDirty) {
      return <div>Error: Please enter text</div>;
    }
  };

  render() {
    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{this.state.playerCount}</h3>
        <form className="PlayerSubmissionForm__form">
          {this.nameRequired()}

          <div className="PlayerSubmissionForm__poem-inputs">
            <span>The</span>
            <input
              name="adjective1"
              value={this.state.adjective1}
              onChange={this.onInputChange}
              placeholder="adjective"
              className={this.hasValidInput() ? "valid" : "invalid"}
            />

            <input
              name="noun1"
              value={this.state.noun1}
              onChange={this.onInputChange}
              placeholder="noun"
              className={this.hasValidInput() ? "valid" : "invalid"}
            />
            <input
              name="adverb1"
              value={this.state.adverb1}
              onChange={this.onInputChange}
              placeholder="adverb"
              className={this.hasValidInput() ? "valid" : "invalid"}
            />
            <input
              name="verb1"
              value={this.state.verb1}
              onChange={this.onInputChange}
              placeholder="verb"
              className={this.hasValidInput() ? "valid" : "invalid"}
            />
            <span>the</span>
            <input
              name="adjective2"
              value={this.state.adjective2}
              onChange={this.onInputChange}
              placeholder="adjective"
              className={this.hasValidInput() ? "valid" : "invalid"}
            />
            <input
              name="noun2"
              value={this.state.noun2}
              onChange={this.onInputChange}
              placeholder="noun"
              className={this.hasValidInput() ? "valid" : "invalid"}
            />
          </div>

          <div className="PlayerSubmissionForm__submit">
            <input
              onClick={this.onFormSubmit}
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
