import React, { Component } from 'react';
import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      handleSubmit: this.props.onSubmitCallback,
      currentPlayerNumber: this.props.numOfPlayers + 1,
      poemLine: {
        "adjective-1": '',
        "noun-1": '',
        "adverb": '',
        "verb": '',
        "adjective-2": '',
        "noun-2": '',
      },
    };

    this.createLine = this.createLine.bind(this);

  }

  createLine = () => {
    alert("in submitLine");
    const poemLine = this.state.poemLine;
    const line = `${poemLine["adjective-1"]} ${poemLine["noun-1"]} ${poemLine["adverb"]} ${poemLine["verb"]} ${poemLine["adjective-2"]} ${poemLine["noun-2"]}`;
    return line;
  };
  

  render() {

    const submitLine = (event) => {
      event.preventDefault();
      const line = this.createLine();
      this.state.handleSubmit(line);
    };

    const onInputChange = (event) => {
      const updatedState = {
        poemLine: {
        }
      };

      const field = event.target.name;
      const value = event.target.value;

      updatedState.poemLine[field] = value;
      this.setState(updatedState);
    }
    // This function and it use above and below is courtesy of Ada Developers' Academy instructors, 
    // from: https://github.com/Ada-Developers-Academy/textbook-curriculum/blob/master/React/forms-advanced.md.

    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{this.state.currentPlayerNumber}</h3>

        <form className="PlayerSubmissionForm__form"
          onSubmit={submitLine}>

          <div className="PlayerSubmissionForm__poem-inputs">
            <span>The</span>
            <input
              name="adjective-1"
              placeholder="adjective"
              value={this.state.value}
              type="text"
              onChange={onInputChange} />
            <input
              name="noun-1"
              placeholder="noun"
              type="text"
              onChange={onInputChange} />
            <input
              name="adverb"
              placeholder="adverb"
              type="text"
              onChange={onInputChange} />
            <input
              name="verb"
              placeholder="verb"
              type="text"
              onChange={onInputChange} />
            <span>the</span>
            <input
              name="adjective-2"
              placeholder="adjective"
              type="text"
              onChange={onInputChange} />
            <input
              name="noun-2"
              placeholder="noun"
              type="text"
              onChange={onInputChange} />
            <span>.</span>
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
