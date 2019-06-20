import React, { Component } from 'react';
import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);
    const initialState = {
      player: 1
    };
    props.fields.forEach((field) => {
      if (field.key) {
        initialState[field.key] = "";
      }
    });
    this.state = initialState;
  }

  onValueChange = (event) => {
    console.log(`${event.target} Updated ${event.target.value}`);

    const fields = {};
    fields[event.target.name] = event.target.value;
    this.setState(fields);
  }

  resetForm = () => {
    const clearedState = {};
    this.props.fields.forEach((field) => {
      if (field.key) {
        clearedState[field.key] = "";
      }
    });
    console.log(clearedState)
    this.setState(clearedState);
  }


  onFormSubmit = (event) => {
    event.preventDefault();

    let newSubmission = "";
    this.props.fields.forEach((field) => {
      if (field.key) {
        newSubmission += this.state[field.key];
      } else {
        return field;
      }
      return newSubmission;
    });
    let playerNumber = this.state.player;
    playerNumber += 1
    this.setState({
      player: playerNumber
    })
    this.props.addNewLineCallback(newSubmission);
    this.resetForm();
  }



  render() {

    const formContent = this.props.fields.map((field, i) => {
      if (field.key) {
        return <input
          key={i}
          name={field.key}
          placeholder={field.placeholder}
          value={this.state[field.key]}
          onChange={this.onValueChange}
          type="text"
          className="PlayerSubmissionForm__input"
        />;
      } else {
        return field;
      }
    })


    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{this.state.player}</h3>

        <form
          className="PlayerSubmissionForm__form"
          onSubmit={this.onFormSubmit} >

          {formContent}

          <div className="PlayerSubmissionForm__submit">
            <input
              name="submit"
              type="submit"
              className="PlayerSubmissionForm__submit-btn"
              value="Submit Line"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default PlayerSubmissionForm;
