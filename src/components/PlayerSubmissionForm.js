import React, { Component } from 'react';
import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);

    const allPoemFields = {};
    props.fields.forEach((field) => {
      if (field.key) {
        allPoemFields[ field.key ] = '';
      }
    });
    this.state = {...allPoemFields, player: 1, addSubmissionCallback: this.addSubmission};
  }

  onChangeHandler = (value, id) => {
    this.setState({
      [id]: value,
    })
  }

  increasePlayerCount = (value) => {
    value += 1;
    return value;
  }

  isValid = (field) => {
    return field.length > 0 ? true : false;
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const poemLine = this.props.fields.map((field) => {
      if (field.key) {
        return this.state[field.key];
      } else {
        return field;
      }
    });

    this.props.addSubmissionCallback(poemLine.join(" "));
  
    this.setState({
      adj1: '',
      noun1: '',
      adv: '',
      verb: '',
      adj2: '',
      noun2: '',
      player: this.increasePlayerCount(this.state.player),
    });
}

  render() {

    const formContent = this.props.fields.map( (field, i) => {
      if (field.key) {
        return <input
          key={ i }
          placeholder={ field.placeholder }
          value={ this.state[field.key] }
          onChange={ (event) => { this.onChangeHandler(event.target.value, field.key) } }
          type="text"
          className={this.isValid(this.state[field.key]) ? "PlayerSubmissionForm__input" : "PlayerSubmissionForm__input--invalid"}
        />;
      } else {
        return field;
      }
    })

    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{ this.state.player }</h3>

        <form className="PlayerSubmissionForm__form" onSubmit={this.handleSubmit}>

          <div className="PlayerSubmissionForm__poem-inputs">

          { formContent }

          <div className="PlayerSubmissionForm__submit">
            <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
          </div>
          </div>
        </form>
      </div>
    );
  }
}

export default PlayerSubmissionForm;
