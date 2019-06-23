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
    };
  }
  // all fields need at least one character
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
   
    const field = {}
    field[event.target.name] = event.target.value
    this.setState(field)
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
      this.props.addSubmissionCallback({
        adj1: this.state.adj1,
        noun1: this.state.noun1,
        adv: this.state.adverb,
        verb: this.state.verb,
        adj2: this.state.adj2,
        noun2: this.state.noun2,
      })
      this.setState({
        adj1: '',
        noun1: '',
        adv: '',
        verb: '',
        adj2: '',
        noun2: '',
      })
    }
  }
  render() {

    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{ this.props.player + 1 }</h3>

        <form className="PlayerSubmissionForm__form" onSubmit={this.handleSubmit}>

          <div className="PlayerSubmissionForm__poem-inputs">
            <p>The</p>
            <input
              name="adj1" 
              onChange={this.onChangeHandler} 
              value={this.state.adj1}
              placeholder="adjective"
              type="text" />

            <input
              name="noun1" 
              onChange={this.onChangeHandler} 
              value={this.state.noun1}
              placeholder="noun"
              type="text" />
          
            <input
              name="adv" 
              onChange={this.onChangeHandler} 
              value={this.state.adv}
              placeholder="adverb"
              type="text" />

            <input
              name="verb" 
              onChange={this.onChangeHandler} 
              value={this.state.verb}
              placeholder="verb"
              type="text" />

            <p>the</p>

            <input
              name="adj2" 
              onChange={this.onChangeHandler} 
              value={this.state.adj2}
              placeholder="adjective"
              type="text" />

            <input
              name="noun2" 
              onChange={this.onChangeHandler} 
              value={this.state.noun2}
              placeholder="noun"
              type="text" />
            
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
