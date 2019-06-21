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

      const constructedLine = this.props.fields.map((field)=> {
        if (field.key) {
          return this.state[field.key];
        } else {
          return field;
        }
      }).join(" ");
      
      
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

     validInput = (field) =>{
       const newState = {...this.state};
       return newState[field]=== ''? "PlayerSubmissionFormt__input--invalid" : "";
     }

   dryFields() {
     const exampleFormat= this.props.fields.map((field) => {
       if (field.key) {
         console.log(field);
         return <input 
         placeholder={field.placeholder}
         name={field.key}
         type="text"
         value={this.state[field.key]}
         onChange={this.onWordInput}
         className={this.validInput(field.key)}/>
       } else {
         return field;
       }
     });
     return exampleFormat;
    }

  render() {

    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{this.props.playerNumber + 1}</h3>

        <form className="PlayerSubmissionForm__form" onSubmit={this.onSubmitForm}>

          <div className="PlayerSubmissionForm__poem-inputs">

            {
              // Put your form inputs here... We've put in one below as an example
              this.dryFields()
            }

            {/* The
            <input
              placeholder="Adjective"
              name='adjective'
              type="text"
              value = {this.state.adjective}
              onChange={this.onWordInput}
              className={this.validInput('adjective')}/>
              <input
              placeholder="Noun"
              name='noun'
              type="text"
              value={this.state.noun}
              onChange={this.onWordInput}
              className={this.validInput('noun')}/>
              <input
              placeholder="Adverb"
              name='adverb'
              type="text"
              value={this.state.adverb}
              onChange={this.onWordInput}
              className={this.validInput('adverb')}/>
              <input
              placeholder="Verb"
              name='verb'
              type="text"
              value={this.state.verb}
              onChange={this.onWordInput}
              className={this.validInput('verb')}/>
              <input
              placeholder="Adjective"
              name='secondAdjective'
              type="text"
              value={this.secondAdjective}
              onChange={this.onWordInput}
              className={this.validInput('secondAdjective')}/>
              <input
              placeholder="Noun"
              name='secondNoun'
              type="text"
              value={this.secondNoun}
              onChange={this.onWordInput}
              className={this.validInput('secondNoun')}/>
              . */
              }
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
