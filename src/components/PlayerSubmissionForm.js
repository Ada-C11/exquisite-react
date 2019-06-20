import React, { Component } from 'react';
import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);
   
    this.state = {
    adjective: '',
    noun: '',
    adverb: '',
    verb: '',
    secondAdjective: '',
    secondNoun: '',
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
      ${this.state.verb} ${this.state.secondAdjective} ${this.state.secondNoun} .`
      
      this.setState({
        adjective: '',
        noun: '',
        adverb: '',
        verb: '',
        secondAdjective: '',
        secondNoun: '',
      });

      //console.log("Line:", constructedLine);
      this.props.addLineCallback(constructedLine);// to do next 
      console.log(this.state);
    }

  render() {

    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{this.props.playerNumber + 1}</h3>

        <form className="PlayerSubmissionForm__form" onSubmit={this.onSubmitForm}>

          <div className="PlayerSubmissionForm__poem-inputs">

            {
              // Put your form inputs here... We've put in one below as an example
            }

            The
            <input
              placeholder="Adjective"
              name='adjective'
              type="text"
              value = {this.state.adjective}
              onChange={this.onWordInput}/>
              <input
              placeholder="Noun"
              name='noun'
              type="text"
              value={this.state.noun}
              onChange={this.onWordInput}/>
              <input
              placeholder="Adverb"
              name='adverb'
              type="text"
              value={this.state.adverb}
              onChange={this.onWordInput}/>
              <input
              placeholder="Verb"
              name='verb'
              type="text"
              value={this.state.verb}
              onChange={this.onWordInput}/>
              <input
              placeholder="Adjective"
              name='secondAdjective'
              type="text"
              value={this.secondAdjective}
              onChange={this.onWordInput}/>
              <input
              placeholder="Noun"
              name='secondNoun'
              type="text"
              value={this.secondNoun}
              onChange={this.onWordInput}/>
              .
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
