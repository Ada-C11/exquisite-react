import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);
    
    const initialState= { playerCount: 1}
    props.fields.forEach((field) => {
      if (field.key){
        initialState[field.key] = ''
      }
    })
    this.state = initialState;
  }
  
  
  onInputChange = (event) => {
    const updatedState = {};
    
    const field = event.target.name;
    const value = event.target.value;
    updatedState[field] = value;
    this.setState(updatedState);
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    
    const newSubmission ={}
    this.props.fields.forEach((field) => {
      if (field.key){
        newSubmission[field.key] = this.state[field.key]
      }
    })

    let playerCount = this.state.playerCount;
    playerCount += 1;
    this.setState({
      playerCount
    })
    this.props.addSentenceCallback(newSubmission);
    this.clearForm();
  }

  clearForm = () => {
    const resetState = {}
    this.props.fields.forEach((field) => {
      if (field.key){
        resetState[field.key] = ''
      }
    })
    this.setState (resetState);
  }
  
  render() {
   
    const formInput = this.props.fields.map((field) => {
      const inputStyle = (this.state[field.key]) ? "PlayerSubmissionFormt__input" : "PlayerSubmissionFormt__input--invalid"
      if (field.key) {
        return <input placeholder={field.placeholder}
                      name={field.key}
                      type="text"
                      onChange={this.onInputChange}
                      value={this.state[field.key]}
                      className={inputStyle}
                />
      } else {
        return field;
      };
    })

    return (
      <div className="PlayerSubmissionForm" >
        <h3>Player Submission Form for Player #{ this.state.playerCount }</h3>
        
        <form className="PlayerSubmissionForm__form" onSubmit={this.onFormSubmit}>

          <div className="PlayerSubmissionForm__poem-inputs">
            {formInput}
          </div>

          <div className="PlayerSubmissionForm__submit" >
            <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
          </div>
        </form>
      </div>
    );
  }
}

PlayerSubmissionForm.propTypes = {
  addSentenceCallback: PropTypes.func.isRequired,
};

export default PlayerSubmissionForm;
