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

  onInputChange = (event) => {
    const updatedState = {};
  
    const field = event.target.name;
    const value = event.target.value;
  
    updatedState[field] = value;
    this.setState(updatedState);
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    const newLine = [this.state.adj1,
      this.state.noun1,
      this.state.adv,
      this.state.verb,
      this.state.adj2,
      this.state.noun2]
      console.log(newLine)
    this.props.updateTurnCallBack(newLine);
  
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
        <h3>Player Submission Form for Player #{this.props.id}</h3>

        <form className="PlayerSubmissionForm__form" onSubmit={this.onFormSubmit}>

          <div className="PlayerSubmissionForm__poem-inputs">

            {
              // Put your form inputs here... We've put in one below as an example
            }
            The
            <input
              placeholder="adjective"
              name="adj1"
              type="text"
              value={this.state.adj1} 
              onChange={this.onInputChange}/>
            <input
              placeholder="noun"
              name="noun1"
              type="text"
              value={this.state.noun1}
              onChange={this.onInputChange} />
            <input
              placeholder="adverb"
              name="adv"
              type="text" 
              value={this.state.adv}
              onChange={this.onInputChange}/>
            <input
              placeholder="verb"
              name="verb"
              type="text"
              value={this.state.verb}
              onChange={this.onInputChange}/>
            the
            <input
              placeholder="adjective"
              name="adj2"
              type="text"
              value={this.state.adj2}
              onChange={this.onInputChange} />
            <input
              placeholder="noun"
              name="noun2"
              type="text"
              value={this.state.noun2}
              onChange={this.onInputChange} />
          </div>

          <div className="PlayerSubmissionForm__submit">
            <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn"/>
          </div>
        </form>
      </div>
    );
  }
}

export default PlayerSubmissionForm;
