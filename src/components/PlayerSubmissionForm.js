import React, { Component } from 'react';
import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      handleSubmit: this.props.onSubmitCallback,
      currentPlayerNumber: this.props.numOfPlayers,
      poemLine: {
        adjective1: '',
        noun1: '',
        adverb: '',
        verb: '',
        adjective2: '',
        noun2: '',
      },
    };

    this.createLine = this.createLine.bind(this);

  }

  createLine = () => {
    const poemLine = this.state.poemLine;
    const line = `${poemLine["adjective1"]} ${poemLine["noun1"]} ${poemLine["adverb"]} ${poemLine["verb"]} ${poemLine["adjective2"]} ${poemLine["noun2"]}`;
    return line;
  };
  

  render() {
    const submitLine = (event) => {
      event.preventDefault();
      const line = this.createLine();
      this.state.handleSubmit(line);
    };

    const onInputChange = (event) => {
      const updatedState = this.state.poemLine;

      const field = event.target.name;
      const value = event.target.value;

      updatedState[field] = value;
      this.setState(updatedState);
      console.log(this.state.poemLine);
    }
    // This function and it use above and below is courtesy of Ada Developers' Academy instructors, 
    // from: https://github.com/Ada-Developers-Academy/textbook-curriculum/blob/master/React/forms-advanced.md.

    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{this.state.currentPlayerNumber()}</h3>

        <form className="PlayerSubmissionForm__form"
          onSubmit={submitLine}>

          <div className="PlayerSubmissionForm__poem-inputs">
            <span>The</span>
            <input
              name="adjective1"
              placeholder="adjective"
              value={this.state.value}
              type="text"
              onChange={onInputChange} />
            <input
              name="noun1"
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
              name="adjective2"
              placeholder="adjective"
              type="text"
              onChange={onInputChange} />
            <input
              name="noun2"
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
