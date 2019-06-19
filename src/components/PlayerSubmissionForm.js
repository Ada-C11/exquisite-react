import React, { Component } from 'react';
import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      adj1: '',
      noun1: '',
      adv: '',
      verb: '',
      adj2: '',
      noun2: '',
    }
  }

  validations = {
    adj1: /.+/,
    noun1: /.+/,
    adv: /.+/,
    verb: /.+/,
    adj2: /.+/,
    noun2: /.+/,
  }

  fieldValid = (fieldName) => {
    return this.validations[fieldName].test(this.state[fieldName]);
  }

  onChangeHandler = (event) => {
    const newState = {}
    newState[event.target.name] = event.target.value;

    this.setState(newState);
  }

  handleSubmit = (event) => {
    event.preventDefault();

    let allFieldsValid = true;
    Object.keys(this.validations).forEach((fieldName) => {
      if (!this.fieldValid(fieldName)) {
        allFieldsValid = false;
      }
    })

    if (allFieldsValid){
      const line = {
        adj1: this.state.adj1,
        noun1: this.state.noun1,
        adv: this.state.adv,
        verb: this.state.verb,
        adj2: this.state.adj2,
        noun2: this.state.noun2,
      }
      this.props.addLineCallback(line);
    }

    this.setState ({
      adj1: '',
      noun1: '',
      adv: '',
      verb: '',
      adj2: '',
      noun2: '',
    });
  }


  render() {
    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{ this.props.playerNumber }</h3>

        <form className="PlayerSubmissionForm__form" onSubmit={this.handleSubmit}>

          <div className="PlayerSubmissionForm__poem-inputs">

            {
              // Put your form inputs here... We've put in one below as an example
            }
            <p> The </p>
            
            <input
              placeholder="adjective"
              type="text" 
              name='adj1'
              value={this.state.adj1}
              onChange={this.onChangeHandler}
              className={this.fieldValid('adj1') ? 'valid' : 'PlayerSubmissionFormt__input--invalid' }
            />
            
            <input
              placeholder="noun"
              type="text" 
              name='noun1'
              value={this.state.noun1}
              onChange={this.onChangeHandler}
              className={this.fieldValid('noun1') ? 'valid' : 'PlayerSubmissionFormt__input--invalid'}
            />
            
            <input
              placeholder="adverb"
              type="text" 
              name='adv'
              value={this.state.adv}
              onChange={this.onChangeHandler}
              className={this.fieldValid('adv') ? 'valid' : 'PlayerSubmissionFormt__input--invalid'}  
            />
             
            <input
              placeholder="verb"
              type="text" 
              name='verb'
              value={this.state.verb}
              onChange={this.onChangeHandler}  
              className={this.fieldValid('verb') ? 'valid' : 'PlayerSubmissionFormt__input--invalid'}
            />
             
            <p> the </p>
             
            <input
              placeholder="adjective"
              type="text" 
              name='adj2'
              value={this.state.adj2}
              onChange={this.onChangeHandler} 
              className={this.fieldValid('adj2') ? 'valid' : 'PlayerSubmissionFormt__input--invalid'} 
            />
             
            <input
              placeholder="noun"
              type="text" 
              name='noun2'
              value={this.state.noun2}
              onChange={this.onChangeHandler}
              className={this.fieldValid('noun2') ? 'valid' : 'PlayerSubmissionFormt__input--invalid'}
            />

              <p>.</p>
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
