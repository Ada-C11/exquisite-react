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
      noun2: ''
    }
  }

  formInputs = () => {
    const fields = this.props.fields.map((field, i) => {
      if (typeof field !== "object") {
        return field;
      } else {
        if (this.state[field.key] === '') {
          return (
            <input className='PlayerSubmissionFormt__input--invalid' key={i} name={field.key} placeholder={field.placeholder} onChange={this.onChanges} value={this.state[field.key]}/>
          )
        } else {
          return (
            <input key={i} name={field.key} placeholder={field.placeholder} onChange={this.onChanges} value={this.state[field.key]}/>
          )
        }
      }
    });

    return fields
  }

  onChanges = (event) => {
    const field = {}
    field[event.target.name] = event.target.value;

    this.setState(field);
  }

  submitLine = (event) => {
    event.preventDefault();

    const line = `The ${this.state.adj1} ${this.state.noun1} ${this.state.adv} ${this.state.verb} the ${this.state.adj2} ${this.state.noun2} .`

    this.props.onSubmitCallback(line);
    this.setState({
      adj1: '',
      noun1: '',
      adv: '',
      verb: '',
      adj2: '',
      noun2: ''
    });
  }

  render() {

    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{this.props.player}</h3>

        <form className="PlayerSubmissionForm__form" >

          <div className="PlayerSubmissionForm__poem-inputs">
            {/* Notes from https://github.com/Ada-Developers-Academy/textbook-curriculum/blob/master/React/forms.md utilized */}
            {this.formInputs()}
          </div>

          <div className="PlayerSubmissionForm__submit">
            <input onClick={this.submitLine} type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
          </div>
        </form>
      </div>
    );
  }
}

export default PlayerSubmissionForm;
