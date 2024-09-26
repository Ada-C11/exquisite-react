import React, { Component } from 'react';
import './PlayerSubmissionForm.css';
import PropTypes from 'prop-types';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      adj1: '',
      noun1: '',
      adverb: '',
      verb: '',
      adj2: '',
      noun2: '',
    }
  }

  validations = {
    adj1: /.+/,
    noun1: /.+/,
    adverb: /.+/,
    verb: /.+/,
    adj2: /.+/,
    noun2: /.+/,
  }

  fieldValid = (fieldName) => {
    return this.validations[fieldName].test(this.state[fieldName]);
  }

  // from ada students
  inputRecieved = (event) => {
    const field = {}
    field[event.target.name] = event.target.value;
    this.setState(field);
  }

  handleSubmit = (event) => {
    event.preventDefault();

    let allFieldsValid = true;
    Object.keys(this.validations).forEach((fieldName) => {
      if (!this.fieldValid(fieldName)) {
        allFieldsValid = false;
      }
    })

    if (allFieldsValid) {
      this.props.addLineCallback({
        adj1: this.state.adj1,
        noun1: this.state.noun1,
        adverb: this.state.adverb,
        verb: this.state.verb,
        adj2: this.state.adj2,
        noun2: this.state.noun2,
      });

    //this state has to be blank or it overrides the placeholder
      this.setState({
        adj1: '',
        noun1: '',
        adverb: '',
        verb: '',
        adj2: '',
        noun2: '',
      });
    }
  }
  
  render() {

    return (
      <div className="PlayerSubmissionForm">
        {console.log(this.props)}
        <h3>Player Submission Form for Player #{this.props.count}</h3>

        <form className="PlayerSubmissionForm__form" onSubmit={this.handleSubmit}>

          <div className="PlayerSubmissionForm__poem-inputs">

        
              <input
              name="adj1"
              placeholder="first adjective"
              type="text"
              onChange={this.inputRecieved}
              value={this.state.adj1}
              className={this.fieldValid('adj1') ? 'valid' : 'invalid'} />

              <input
              name="noun1"
              placeholder="first noun"
              type="text"
              onChange={this.inputRecieved}
              value={this.state.noun1} 
              className={this.fieldValid('noun1') ? 'valid' : 'invalid'}/>

              <input
              name="adverb"
              placeholder="adverb"
              type="text"
              onChange={this.inputRecieved}
              value={this.state.adverb} 
              className={this.fieldValid('adverb') ? 'valid' : 'invalid'}/>

              <input
              name="verb"
              placeholder="verb"
              type="text"
              onChange={this.inputRecieved}
              value={this.state.verb} 
              className={this.fieldValid('verb') ? 'valid' : 'invalid'}/>

              <input
              name="adj2"
              placeholder="second adjective"
              type="text"
              onChange={this.inputRecieved}
              value={this.state.adj2} 
              className={this.fieldValid('adj2') ? 'valid' : 'invalid'}/>

              <input
              name="noun2"
              placeholder="second noun"
              type="text"
              onChange={this.inputRecieved}
              value={this.state.noun2} 
              className={this.fieldValid('noun2') ? 'valid' : 'invalid'}/>
 

          </div>

          <div className="PlayerSubmissionForm__submit">
            <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
          </div>
        </form>
      </div>
    );
  }
}

PlayerSubmissionForm.propTypes = {
  // what is fed in from Game.js
  addLineCallback: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
}

export default PlayerSubmissionForm;
