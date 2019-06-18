import React, { Component } from 'react';
import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      adj1:"",
      noun1:"",
      adverb:"",
      verb: "",
      adj2: "",
      noun2: ""

    }
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
    const {adj1, noun1, adverb, verb, adj2, noun2} = this.state;
    const sentence = ["The", adj1, noun1, adverb, verb, "the", adj2, noun2].join(" ") + ".";
    this.props.addRecentSubmissionCallback(sentence);
    this.setState({
      adj1:"",
      noun1:"",
      adverb:"",
      verb: "",
      adj2: "",
      noun2: ""
    });
  }
  render() {

    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{this.props.player}</h3>

        <form className="PlayerSubmissionForm__form" 
        onSubmit={this.handleSubmitForm}>

          <div className="PlayerSubmissionForm__poem-inputs">

            {
              // Put your form inputs here... We've put in one below as an example
            }
            <span>The </span>
            <input
              placeholder="adjective"
              type="text" 
              name="adj1"
              value={this.state.adj1}
              onChange={this.onInputChange}
            />

            <input
              placeholder="noun"
              type="text" 
              name="noun1"
              value={this.state.noun1}
              onChange={this.onInputChange}
            />

            <input
              placeholder="adverb"
              type="text" 
              name="adverb"
              value={this.state.adverb}
              onChange={this.onInputChange}
            />

            <input
              placeholder="verb"
              type="text" 
              name="verb"
              value={this.state.verb}
              onChange={this.onInputChange}
            />

            <span> the </span>

            <input
              placeholder="adjective"
              type="text" 
              name="adj2"
              value={this.state.adj2}
              onChange={this.onInputChange}
            />

            <input
              placeholder="noun"
              type="text" 
              name="noun2"
              value={this.state.noun2}
              onChange={this.onInputChange}
            />
            
            <span>.</span>
          </div>

          <div className="PlayerSubmissionForm__submit">
            <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
          </div>
        </form>
      </div>
    );
  }
}

export default PlayerSubmissionForm;
