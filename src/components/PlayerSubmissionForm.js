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
      count: 0,
    }
  }
  onInputChange = (event) => {
    const updatedState = {};
  
    const field = event.target.name;
    const value = event.target.value;
  
    updatedState[field] = value;
    this.setState(updatedState);
  }
  onFormSubmit = (event) => {
    event.preventDefault();
  
    const newSubmission = {
      adj1: this.state.adj1,
      noun1: this.state.noun1,
      adv: this.state.adv,
      verb: this.state.verb,
      adj2: this.state.adj2,
      noun2: this.state.noun2,
    };
    
    
  
    this.setState({
      adj1: '',
      noun1: '',
      adv: '',
      verb: '',
      adj2: '',
      noun2: '',
      count: this.state.count + 1
    });
   
    this.props.onSubmissionCallback(newSubmission)
  
  }

  render() {

    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{this.state.count}</h3>

        <form className="PlayerSubmissionForm__form" onSubmit={this.onFormSubmit} >

          <div className="PlayerSubmissionForm__poem-inputs">
            
            <span>The</span>

            <input
              placeholder="adjective"
              name="adj1"
              onChange={this.onInputChange}
              value={this.state.adj1}
              type="text" />
              <input
              placeholder="noun"
              name="noun1"
              onChange={this.onInputChange}
              value={this.state.noun1}
              type="text" />
              <input
              placeholder="adverb"
              name="adv"
              onChange={this.onInputChange}
              value={this.state.adv}
              type="text" />
              <input
              placeholder="verb"
              name="verb"
              onChange={this.onInputChange}
              value={this.state.verb}
              type="text" />
              <span>the</span>
              <input
              placeholder="adjective"
              name="adj2"
              onChange={this.onInputChange}
              value={this.state.adj2}
              type="text" />
              <input
              placeholder="noun"
              name="noun2"
              onChange={this.onInputChange}
              value={this.state.noun2}
              type="text" />
              <span>,</span>

          </div>

          <div className="PlayerSubmissionForm__submit">
            <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn"  />
          </div>
        </form>
      </div>
    );
  }
}

export default PlayerSubmissionForm;
