import React, { Component } from 'react';
import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      adjective1: "",
      noun1: "",
      adverb: "",
      verb: "",
      adjective2: "",
      noun2: "",
      currentplayer: 1
    }
  }

  onInputChange = (event) => {
    const updatedState = {};

    const field = event.target.name;
    const value = event.target.value;

    updatedState[field] = value;
    this.setState(updatedState);
  }

  clearForm = () => {
    this.setState({
      adjective1: "",
      noun1: "",
      adverb: "",
      verb: "",
      adjective2: "",
      noun2: "",
    });
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    const newLine = {
      adjective1: this.state.adjective1,
      noun1: this.state.noun1,
      adverb: this.state.adverb,
      verb: this.state.verb,
      adjective2: this.state.adjective2,
      noun2: this.state.noun2, 
    }

    console.log(newLine)

    let newCurrentPlayer = this.state.currentplayer + 1
    this.setState({
      currentplayer: newCurrentPlayer,
    });

    this.props.addLineCallback(newLine);

    this.clearForm()
  }

  render() {

    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{this.state.currentplayer}</h3>

        <form className="PlayerSubmissionForm__form" onSubmit={ this.onFormSubmit } >

          <div className="PlayerSubmissionForm__poem-inputs">
            <div>
              <input name="adjective1" value={this.state.adjective1} placeholder="adjective" type="text" onChange={this.onInputChange} />
            </div>
            <div>
              <input name="noun1" value={this.state.noun1} placeholder="noun" type="text" onChange={this.onInputChange} />
            </div>
            <div>
              <input name="adverb" value={this.state.adverb} placeholder="adverb" type="text" onChange={this.onInputChange} />
            </div>
            <div>
              <input name="verb" value={this.state.verb} placeholder="verb" type="text" onChange={this.onInputChange} />
            </div>
            <div>
              <input name="adjective2" value={this.state.adjective2} placeholder="adjective" type="text" onChange={this.onInputChange} />
            </div>
            <div>
              <input name="noun2" value={this.state.noun2} placeholder="noun" type="text" onChange={this.onInputChange} />
            </div> 

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
