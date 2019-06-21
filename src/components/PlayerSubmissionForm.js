import React, { Component } from 'react';
import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);
    
    this.cleared = {
      adj1: "",
      noun1: "",
      adv: "",
      verb: "",
      adj2: "",
      noun2: "",
    }

    this.state = {...this.cleared, player: 1}
  }
  
  validations = {
    adj1: /.+/,
    noun1: /.+/,
    adv: /.+/, 
    verb: /.+/, 
    adj2: /.+/, 
    noun2: /.+/
  };

  fieldValid = (fieldName) => {
    return this.validations[fieldName].test(this.state[fieldName]);
  };

  addWords  = (event) => {
    
    event.preventDefault();
    
    const words = this.state

    this.props.addPoemLineCallback(words)

    this.setState({...this.cleared})

    let updatedUserId = this.state.player
    updatedUserId += 1
  
    this.setState({
      player: updatedUserId});
      
  }
  
  onChangeHandler = (event) => {
    const updatedState = {};
    
    const field = event.target.name;
    const value = event.target.value;
    
    updatedState[field] = value;
    this.setState(updatedState);
  }

  render() {

    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{ this.state.player }</h3>

        <form className="PlayerSubmissionForm__form" onSubmit={this.addWords}>

          <div className="PlayerSubmissionForm__poem-inputs">
            "The"
            {
              // Put your form inputs here... We've put in one below as an example
            }
            
            <input className={!this.fieldValid('adj1') ? 'PlayerSubmissionFormt__input--invalid' : ''}
              name="adj1"
              placeholder="adjective"
              value={this.state.adj1}
              type="text" 
              onChange={this.onChangeHandler}
              />
            <input className={!this.fieldValid('noun1') ? 'PlayerSubmissionFormt__input--invalid' : ''}
              name="noun1"
              placeholder="noun"
              value={this.state.noun1}
              type="text" 
              onChange={this.onChangeHandler}
              />      
            <input className={!this.fieldValid('adv') ? 'PlayerSubmissionFormt__input--invalid' : ''}
              name="adv"
              placeholder="adverb"
              type="text" 
              value={this.state.adv}
              onChange={this.onChangeHandler}
              />
            <input className={!this.fieldValid('verb') ? 'PlayerSubmissionFormt__input--invalid' : ''}
              name="verb"
              placeholder="verb"
              value={this.state.verb}
              type="text" 
              onChange={this.onChangeHandler}
              />
            "the"
            <input className={!this.fieldValid('adj2') ? 'PlayerSubmissionFormt__input--invalid' : ''}
              name="adj2"
              placeholder="adjective"
              value={this.state.adj2}
              type="text"
              onChange={this.onChangeHandler}
              />
            <input className={!this.fieldValid('noun2') ? 'PlayerSubmissionFormt__input--invalid' : ''}
              name="noun2"
              placeholder="noun"
              value={this.state.noun2}
              type="text" 
              onChange={this.onChangeHandler}
              />
            "."
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
