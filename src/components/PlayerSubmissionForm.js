import React, { Component } from 'react';
import './PlayerSubmissionForm.css';
import setAllValuesTo from "object-set-all-values-to";

class PlayerSubmissionForm extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      submission: {
        adj1: '',
        noun1: '', 
        adv: '', 
        verb: '', 
        adj2: '', noun2: ''
      },
      fullSubmission: '',
      name: '',
      turn: 1,
      inputClassName: '--invalid'
    }
  }

  onChangeInput = (event) => {

    event.target.className = "PlayerSubmissionForm__input";

    let submission = {
      ...this.state.submission,
      [event.target.name]: event.target.value
    };
    
    this.setState({
      submission
    });

    console.log(submission)
  
  }

  onSubmitForm = (event) => {
    event.preventDefault();
    const{
      submission,
      turn
    } = this.state;
    this.props.onPlayerFormButtonCallback(event, submission);
    let newSub = setAllValuesTo(submission, '');
    console.log(newSub === submission);
    this.setState({
      submission: setAllValuesTo(submission, '') ,
      fullSubmission: '',
      turn: turn + 1,
    })
  }

  

  render() {

    let formFields = this.props.fields.map(field => {
      if (typeof field === "string") {
        return field;
      } else {
        const {
          key,
          placeholder
        } = field;
        return (
          <input
            key={key}
            className="PlayerSubmissionForm__input--invalid"
            name={key}
            placeholder={placeholder}
            value={this.state.submission[key]}
            type="text" onChange={this.onChangeInput}
          />
        );
      }

    })

    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{ this.state.turn }</h3>

        <form className="PlayerSubmissionForm__form" >

          <div className="PlayerSubmissionForm__poem-inputs">
            { formFields }
          </div>

          <div className="PlayerSubmissionForm__submit">
            <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" onClick={this.onSubmitForm}/>
          </div>
        </form>
      </div>
    );
  }
}

export default PlayerSubmissionForm;
