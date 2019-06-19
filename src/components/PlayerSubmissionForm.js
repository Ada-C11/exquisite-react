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

    if (this.hasValidInput()) {
      this.props.addLineCallback(newLine);

      this.setState(prevState => {
        return {
          playerCount: prevState.playerCount + 1,
          adjective1: "",
          noun1: "",
          adverb1: "",
          verb1: "",
          adjective2: "",
          noun2: "",
          isDirty: false
        };
      });
    } else {
      this.setState({
        isDirty: true
      });
    }
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
              className={this.state.adjective1 === "" ? "invalid" : "valid"}
            />

            <input
              name="noun1"
              value={this.state.noun1}
              onChange={this.onInputChange}
              placeholder="noun"
              className={this.state.noun1 === "" ? "invalid" : "valid"}
            />
            <input
              name="adverb1"
              value={this.state.adverb1}
              onChange={this.onInputChange}
              placeholder="adverb"
              className={this.state.adverb1 === "" ? "invalid" : "valid"}
            />
            <input
              name="verb1"
              value={this.state.verb1}
              onChange={this.onInputChange}
              placeholder="verb"
              className={this.state.verb1 === "" ? "invalid" : "valid"}
            />
            <span>the</span>
            <input
              name="adjective2"
              value={this.state.adjective2}
              onChange={this.onInputChange}
              placeholder="adjective"
              className={this.state.adjective2 === "" ? "invalid" : "valid"}
            />
            <input
              name="noun2"
              value={this.state.noun2}
              onChange={this.onInputChange}
              placeholder="noun"
              className={this.state.noun2 === "" ? "invalid" : "valid"}
            />
          </div>

          <div className="PlayerSubmissionForm__submit">
            <input
              onClick={this.onFormSubmit}
              type="button"
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
