import React, { Component } from 'react';
import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ...this.initialState(),
    }
  }

  initialState = () => {
    return (
      this.props.fields.map(
        (field)=> { return field.key ? {[field.key]: "" } : null;}
      ).reduce((total, current)=> {
            return current ? {...total, ...current} : total
        }, {}
      )
    );
  }

  onInputChange = (event) => {
    const updatedState = {};
  
    const field = event.target.name;
    const value = event.target.value;
  
    updatedState[field] = value;
    this.setState(updatedState);
  }

  handleSubmitForm  = (event)=> {
    event.preventDefault();

    const sentence = this.props.fields.map((field) => {
      return (field.key ? this.state[field.key] : field)
    }).join(" ");
    this.props.addRecentSubmissionCallback(sentence);
    
    this.setState({
      ...this.initialState()
    });
  }
  render() {
    const fields = this.props.fields.map((field) => {
      if (field.key) {
        return (
          <input
              key = {field.key}
              placeholder={field.placeholder}
              type="text" 
              name={field.key}
              value={this.state[field.key]}
              onChange={this.onInputChange}
              className={this.state[field.key] ? "" : "PlayerSubmissionFormt__input--invalid"}
            />
        )
      } else {
        return field;
      }
    });

    if (!this.props.gameCompleted) {
      return (
        <div className="PlayerSubmissionForm">
          <h3>Player Submission Form for Player #{this.props.player}</h3>
          <form className="PlayerSubmissionForm__form" onSubmit={this.handleSubmitForm}>
            <div className="PlayerSubmissionForm__poem-inputs">
              {fields}
            </div>
            <div className="PlayerSubmissionForm__submit">
              <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
            </div>
          </form>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default PlayerSubmissionForm;
