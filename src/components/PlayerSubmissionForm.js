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
  
    // const newSubmission = {
    //   adj1: this.state.adj1,
    //   noun1: this.state.noun1,
    //   adv: this.state.adv,
    //   verb: this.state.verb,
    //   adj2: this.state.adj2,
    //   noun2: this.state.noun2,
    // };
    const newSentence = "The " + this.state.adj1 + " " + this.state.noun1 + " " + this.state.adv + " " + this.state.verb + " the " + this.state.adj2 + " " + this.state.noun2
    console.log(newSentence)
    
    
  
    this.setState({
      adj1: '',
      noun1: '',
      adv: '',
      verb: '',
      adj2: '',
      noun2: '',
    });
   
    this.props.onSubmissionCallback(newSentence)
  
  }
  
  

  render() {
    // let classname = "PlayerSubmissionFormt__input--invalid"
    return (
      <div className="PlayerSubmissionForm">

        <h3>Player Submission Form for Player #{this.props.Counter}</h3>

        <form className="PlayerSubmissionForm__form" onSubmit={this.onFormSubmit} >

          <div className="PlayerSubmissionForm__poem-inputs">
            
            <span>The</span>

            <input
              placeholder="adjective"
              className="PlayerSubmissionFormt__input--invalid"
              name="adj1"
              onChange={this.onInputChange}
              value={this.state.adj1}
              type="text" />
              <input
              placeholder="noun"
              className="PlayerSubmissionFormt__input--invalid"
              name="noun1"
              onChange={this.onInputChange}
              value={this.state.noun1}
              type="text" />
              <input
              placeholder="adverb"
              className="PlayerSubmissionFormt__input--invalid"
              name="adv"
              onChange={this.onInputChange}
              value={this.state.adv}
              type="text" />
              <input
              placeholder="verb"
              className="PlayerSubmissionFormt__input--invalid"
              name="verb"
              onChange={this.onInputChange}
              value={this.state.verb}
              type="text" />
              <span>the</span>
              <input
              placeholder="adjective"
              className="PlayerSubmissionFormt__input--invalid"
              name="adj2"
              onChange={this.onInputChange}
              value={this.state.adj2}
              type="text" />
              <input
              placeholder="noun"
              className="PlayerSubmissionFormt__input--invalid"
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
