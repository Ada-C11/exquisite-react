import React, { Component } from 'react';
import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      adjectiveOne: "adjective",
      nounOne: "noun",
      adverb: "adverb",
      verb: "verb",
      adjectiveTwo: "adjective",
      nounTwo: "noun",
    }
  }

  ChangeHandler = () => {

  }

  onClickSubmit = (event) => {
    event.preventDefault()

    this.props.onSubmitLineCallback(this.state)
    
    // will probably need to clear the state after this when not hard coded!!
  }

  render() {
    const { onSubmitLineCallback, playerNum } = this.props

    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{playerNum}</h3>

        <form onSubmit={this.onClickSubmit} className="PlayerSubmissionForm__form" >

          <div className="PlayerSubmissionForm__poem-inputs">
            <input
              name='adjectiveOne'
              placeholder="adjective"
              type="text"
              onChange={this.changeHandler}
              value="adjective" />
            <input
              name='nounOne'
              placeholder="noun"
              type="text" 
              onChange={this.changeHandler}
              value="noun"/>
            <input
              name='adverb'
              placeholder="adverb"
              type="text" 
              onChange={this.changeHandler}
              value="adverb"/>
            <input
              name='verb'
              placeholder="verb"
              type="text" 
              onChange={this.changeHandler}
              value="verb"/>
            <input
              name='adjectiveTwo'
              placeholder="adjective"
              type="text" 
              onChange={this.changeHandler}
              value="adjective"/>
            <input
              name='nounTwo'
              placeholder="noun"
              type="text" 
              onChange={this.changeHandler}
              value="noun"/>
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
