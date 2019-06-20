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

  validations = {
    adj1: /^[a-zA-Z]+$/,
    noun1: /^[a-zA-Z]+$/,
    adv: /^[a-zA-Z]+$/,
    verb: /^[a-zA-Z]+$/,
    adj2: /^[a-zA-Z]+$/,
    noun2: /^[a-zA-Z]+$/,
  }

  fieldValid = (fieldName) => {
    return (
      this.validations[fieldName].test(this.state[fieldName]
    ));
  }

  onChangeHandler = (event) => {
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
      this.props.addLineCallback(
        `The ${ this.state.adj1 } ${ this.state.noun1 } ${ this.state.adv } ${ this.state.verb } the ${ this.state.adj2 } ${ this.state.noun2 }.`
      );

      this.setState({
        adj1: '',
        noun1: '',
        adv: '',
        verb: '',
        adj2: '',
        noun2: '',
      });
    }
  }

  render() {

    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{ this.props.players + 1 }</h3>

        <form className="PlayerSubmissionForm__form" onSubmit={ this.handleSubmit }>

          <div className="PlayerSubmissionForm__poem-inputs">
            <label>The</label>
            <input
              name="adj1"
              placeholder="adjective"
              type="text"
              onChange={ this.onChangeHandler }
              value={ this.state.adj1 }
              className={ this.fieldValid('adj1') ? 'valid' : 'PlayerSubmissionFormt__input--invalid' }
              required />
            <input
              name="noun1"
              placeholder="noun"
              type="text"
              onChange={ this.onChangeHandler }
              value={ this.state.noun1 }
              className={ this.fieldValid('noun1') ? 'valid' : 'PlayerSubmissionFormt__input--invalid' }
              required />
            <input
              name="adv"
              placeholder="adverb"
              type="text"
              onChange={ this.onChangeHandler }
              value={ this.state.adv }
              className={ this.fieldValid('adv') ? 'valid' : 'PlayerSubmissionFormt__input--invalid' }
              required />
            <input
              name="verb"
              placeholder="verb"
              type="text"
              onChange={ this.onChangeHandler }
              value={ this.state.verb }
              className={ this.fieldValid('verb') ? 'valid' : 'PlayerSubmissionFormt__input--invalid' }
              required />
            <label>the</label>
            <input
              name="adj2"
              placeholder="adjective"
              type="text"
              onChange={ this.onChangeHandler }
              value={ this.state.adj2 }
              className={ this.fieldValid('adj2') ? 'valid' : 'PlayerSubmissionFormt__input--invalid' }
              required />
            <input
              name="noun2"
              placeholder="noun"
              type="text"
              onChange={ this.onChangeHandler }
              value={ this.state.noun2 }
              className={ this.fieldValid('noun2') ? 'valid' : 'PlayerSubmissionFormt__input--invalid' }
              required />
            <label>.</label>
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
