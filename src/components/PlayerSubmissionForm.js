import React, { Component } from 'react';
import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      adjectiveOne: "",
      nounOne: "",
      adverb: "",
      verb: "",
      adjectiveTwo: "",
      nounTwo: "",
    }
  }

  onChangeHandler = (event) => {
    const field = {}
    field[event.target.name] = event.target.value

    this.setState(field)
  }

  onClickSubmit = (event) => {
    event.preventDefault()

    this.props.onSubmitLineCallback(this.state)
    
    const emptyState = this.state

    Object.keys(emptyState).forEach((key) => {
      emptyState[key] = '';
    })

    this.setState(emptyState);
    // will probably need to clear the state after this when not hard coded!!
  }

  render() {
    const { onSubmitLineCallback, playerNum } = this.props
    const { adjectiveOne, nounOne, adverb, verb, adjectiveTwo, nounTwo } = this.state

    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{playerNum}</h3>

        <form 
          onSubmit={this.onClickSubmit} 
          className="PlayerSubmissionForm__form" >
          <div className="PlayerSubmissionForm__poem-inputs">
            <label htmlFor="adjectiveOne">The </label>
            <input
              name='adjectiveOne'
              placeholder="adjective"
              type="text"
              onChange={this.onChangeHandler}
              value={adjectiveOne}/>
            <input
              name='nounOne'
              placeholder="noun"
              type="text" 
              onChange={this.onChangeHandler}
              value={nounOne}/>
            <input
              name='adverb'
              placeholder="adverb"
              type="text" 
              onChange={this.onChangeHandler}
              value={adverb}/>
            <input
              name='verb'
              placeholder="verb"
              type="text" 
              onChange={this.onChangeHandler}
              value={verb}/>
            <label htmlFor="adjectiveOne">the </label>
            <input
              name='adjectiveTwo'
              placeholder="adjective"
              type="text" 
              onChange={this.onChangeHandler}
              value={adjectiveTwo}/>
            <input
              name='nounTwo'
              placeholder="noun"
              type="text" 
              onChange={this.onChangeHandler}
              value={nounTwo}/>
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
