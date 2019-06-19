import React, { Component } from 'react';
import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {
  
  constructor(props) {
    super(props);
    const initState = {
      player: 1, 
    }

    props.fields.forEach((field) => {
      if (field.key) {
        initState[field.key] = '';
      }
    })

    this.state = initState;
  }

  onInputChange = (event) => {
    
    const updatedState = {};

    const field = event.target.name;
    const value = event.target.value;
    updatedState[field] = value;
    this.setState(updatedState);
  }

  makeSentence = () => {
    console.log(this.state.verb);
    const sentence = this.props.fields.map((field) => {
      if (this.state[field.key]) {
        return this.state[field.key] 
      }
      else if (this.state[field.key] === '') {
        return ''
      }
      else {
        return field
      }
    }).join(' ');
    return sentence 
  }

  clearForm = () => {
    const newState = this.state;
    this.props.fields.forEach ((field) => {
      if (field.key) {
        newState[field.key] = ''
      }
    })
    this.setState(newState)
  }

  incrementPlayer = () => {
    const newState = this.state;
    newState.player += 1;
    this.setState(newState);
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.incrementPlayer();
    this.props.addSentenceCallback(this.makeSentence())
    this.clearForm()
  }

  render() {
    
    const formFields = this.props.fields.map((field, i) => {
      const className = this.state[field.key] ? 'PlayerSubmissionFormt__input' : 'PlayerSubmissionFormt__input--invalid';
      if (field.key) {
      return (
      <input
      key = {i}
      name={field.key}
      type="text"
      value={this.state[field.key]}
      onChange={this.onInputChange}
      placeholder={field.placeholder}
      className = {className}
      />
      )}
      else {
        return field 
      }
    })

    return (
      <div className="PlayerSubmissionForm" onSubmit={this.onFormSubmit}>
        <h3>Player Submission Form for Player #{this.state.player}</h3>

        <form className="PlayerSubmissionForm__form" >

          <div className="PlayerSubmissionForm__poem-inputs">

            {formFields}

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
