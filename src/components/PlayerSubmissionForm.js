import React, { Component } from 'react';
import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);
  }

  formInputs = () => {
    const fields = this.props.fields.map((field, i) => {
      if (typeof field !== "object") {
        return field;
      } else {
      return (
        <div key={i}>
          <label adjective="fullName">{field.placeholder}</label>
          <input name="fullName" />
        </div> 
      )}
    });

    return fields
  }

  // submitLine = () => {
  //   this.props.onSubmit(line)
  // }

  render() {

    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{ this.props.player + 1 }</h3>

        <form className="PlayerSubmissionForm__form" >

          <div className="PlayerSubmissionForm__poem-inputs">
            
          <form className="new-student-form">
            {/* Notes from https://github.com/Ada-Developers-Academy/textbook-curriculum/blob/master/React/forms.md utilized */}
            {this.formInputs()}
          </form> 

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
