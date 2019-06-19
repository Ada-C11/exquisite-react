import React, { Component } from 'react';
import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      submission: '',
      fullSubmission: '',
      name: '',
      turn: 1,
      inputClassName: '--invalid',
      onFormButtonCallback: this.props.onPlayerFormButtonCallback,
    }
  }

  onChangeInput = (event) => {

    event.target.className = "PlayerSubmissionForm__input";

    let tempSubmission = ' '

    if (event.target.name === 'adjective1'){
      tempSubmission = 'The '
      tempSubmission += (event.target.value)
    } else if (event.target.name === 'adjective2') {
      tempSubmission = ' the '
      tempSubmission += (event.target.value)
    } else {
      tempSubmission = ' '
      tempSubmission += (event.target.value)
    }

    this.setState({
      submission: tempSubmission,
      name: event.target.name,
      inputClassName: '',
    })

    if (this.state.name !== event.target.name) {
      
      let insert = this.state.submission;
      let fullSubmission = this.state.fullSubmission;
      fullSubmission += insert;

      this.setState({
        fullSubmission,
      })

    }
  }

  onSubmitForm = (event) => {
    event.preventDefault();
  
    let fullSubmission = this.state.fullSubmission
    fullSubmission += this.state.submission
    let turn = this.state.turn
    turn += 1

    this.setState({
      submission: '',
      fullSubmission: '',
      turn,
    })

    this.state.onFormButtonCallback(event, fullSubmission);
    this.myFormRef.reset();
  }

  

  render() {

    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{ this.state.turn }</h3>

        <form className="PlayerSubmissionForm__form" ref={(el) => this.myFormRef = el}>

          <div className="PlayerSubmissionForm__poem-inputs">

            
              The 

              <input
                className="PlayerSubmissionForm__input--invalid"
                name="adjective1"
                placeholder="adjective"
                type="text" onChange={this.onChangeInput}/>

              <input
                className="PlayerSubmissionForm__input--invalid"
                name="noun1"
                placeholder="noun"
                type="text" onChange={this.onChangeInput}/>

              <input
                className="PlayerSubmissionForm__input--invalid"
                name="adverb"
                placeholder="adverb"
                type="text" onChange={this.onChangeInput}/>

              <input
                className="PlayerSubmissionForm__input--invalid"
                verb="verb"
                placeholder="verb"
                type="text" onChange={this.onChangeInput}/>
              
              the

              <input
                className="PlayerSubmissionForm__input--invalid"
                name="adjective2"
                placeholder="adjective"
                type="text" onChange={this.onChangeInput}/>

              <input
                className="PlayerSubmissionForm__input--invalid"
                name="noun2"
                placeholder="noun"
                type="text" onChange={this.onChangeInput}/>
              
              .
            
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
