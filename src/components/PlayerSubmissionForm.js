import React, { Component } from 'react';
import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      adj1: 'first adjective2',
      noun1: 'first noun',
      adverb: 'adverb',
      verb: 'verb',
      adj2: 'second adjective',
      noun2: 'second noun',
    }
  }

  // from ada students
  inputRecieved = (event) => {
    const field = {}
    console.log(event.target.value)
    field[event.target.name] = event.target.value;
    console.log(event.target.name)
    this.setState(field);
    console.log("********");
    console.log(field);
    console.log("********");
    console.log(this.state);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("made it here")
    console.log(this.state.adj1)
    console.log("please")

    // let allFieldsValid = true;
    // Object.keys(this.validations).forEach((fieldName) => {
    //   if (!this.fieldValid(fieldName)) {
    //     allFieldsValid = false;
    //   }
    // })

    // if (allFieldsValid) {
      // this.props.addStudentCallback({
        //also this needs to be set up to find out which one it is and set it
    this.props.addLineCallback({
      adj1: this.state.adj1,
      noun1: this.state.noun1,
      adverb: this.state.adverb,
      verb: this.state.verb,
      adj2: this.state.adj2,
      noun2: this.state.noun2,
    });

    this.setState({
      adj1: 'first adjective3',
      noun1: 'first noun',
      adverb: 'adverb',
      verb: 'verb',
      adj2: 'second adjective',
      noun2: 'second noun',
    });
    }
  
  render() {

    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{  }</h3>

        <form className="PlayerSubmissionForm__form" onSubmit={this.handleSubmit}>

          <div className="PlayerSubmissionForm__poem-inputs">

        
              <input
              name="adj1"
              placeholder="first adjective"
              type="text"
              onChange={this.inputRecieved}
              value={this.state.adj1} />

              <input
              name="noun1"
              placeholder="first noun"
              type="text"
              onChange={this.inputRecieved}
              value={this.state.noun1} />

              <input
              name="adverb"
              placeholder="adverb"
              type="text"
              onChange={this.inputRecieved}
              value={this.state.adverb} />

              <input
              name="verb"
              placeholder="verb"
              type="text"
              onChange={this.inputRecieved}
              value={this.state.verb} />

              <input
              name="adj2"
              placeholder="second adjective"
              type="text"
              onChange={this.inputRecieved}
              value={this.state.adj2} />

              <input
              name="noun2"
              placeholder="second noun"
              type="text"
              onChange={this.inputRecieved}
              value={this.state.noun2} />
 

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
