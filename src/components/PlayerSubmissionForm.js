import React, { Component } from 'react';
import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);
   
    this.state = {
    adjective: " ",
    noun: " ",
    adverb: " ",
    verb: " ",
    secondAdjective: "",
    secondNoun: "",
  };
}
    onWordInput = (event) => {
      const field = event.target.name;
      const value = event.target.value; 

      const onUpdateWord = {};
      onUpdateWord[field]= value;
      this.setState(onUpdateWord);
    }
    
    onSubmitForm = (event) => {
      event.preventDefault(); 

      const constructedLine = `The ${this.state.adjective} ${this.state.noun} ${this.state.adverb}
      ${this.state.verb} ${this.state.secondAdjective} ${this.state.secondNoun}`
      
      this.setState = {
        adjective: " ",
        noun: " ",
        adverb: " ",
        verb: " ",
        secondAdjective: "",
        secondNoun: "",
      };

      console.log("Line:", constructedLine);
      this.props.addLineCallback(constructedLine);// to do next 
    }

  render() {

    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{  }</h3>

        <form className="PlayerSubmissionForm__form" onSubmit={this.onSubmitForm}>

          <div className="PlayerSubmissionForm__poem-inputs">

            {
              // Put your form inputs here... We've put in one below as an example
            }
            The
            <input
              placeholder="Adjective"
              name="adjective"
              type="text"
              onChange={this.onWordInput}
              type="text" />
              <input
              placeholder="Noun"
              name="noun"
              type="text"
              onChange={this.onWordInput}
              type="text" />
              <input
              placeholder="Adverb"
              name="adverb"
              type="text"
              onChange={this.onWordInput}
              type="text" />
              <input
              placeholder="Verb"
              name="verb"
              type="text"
              onChange={this.onWordInput}
              type="text" />
              <input
              placeholder="Adjective"
              name="secondAdjective"
              type="text"
              onChange={this.onWordInput}
              type="text" />
              <input
              placeholder="Noun"
              name="secondNoun"
              type="text"
              onChange={this.onWordInput}
              type="text" />

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
