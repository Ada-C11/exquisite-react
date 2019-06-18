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
      adjective2: '',
      noun2: '',
    }
  }

  onChangeHandler = (event) => {
    const newState = {}
    newState[event.target.name] = event.target.value;

    this.setState(newState);
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const line = {
      adjective: this.state.adjective,
      noun: this.state.noun,
      adverb: this.state.adverb,
      verb: this.state.verb,
      adjective2: this.state.adjective2,
      noun2: this.state.noun2,
    }
    console.log(line.adjective);


    this.props.addLineCallback(line);

    this.setState ({
      adjective: '',
      noun: '',
      adverb: '',
      verb: '',
      adjective2: '',
      noun2: '',
    });
  }
  render() {

    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{  }</h3>

        <form className="PlayerSubmissionForm__form" onSubmit={this.handleSubmit}>

          <div className="PlayerSubmissionForm__poem-inputs">

            {
              // Put your form inputs here... We've put in one below as an example
            }
            <p> The </p>
            
            <input
              placeholder="adjective"
              type="text" 
              name='adjective'
              value={this.state.adjective}
              onChange={this.onChangeHandler}
            />
            
            <input
              placeholder="noun"
              type="text" 
              name='noun'
              value={this.state.noun}
              onChange={this.onChangeHandler}
            />
            
            <input
              placeholder="adverb"
              type="text" 
              name='adverb'
              value={this.state.adverb}
              onChange={this.onChangeHandler}  
            />
             
            <input
              placeholder="verb"
              type="text" 
              name='verb'
              value={this.state.verb}
              onChange={this.onChangeHandler}  
            />
             
            <p> the </p>
             
            <input
              placeholder="adjective"
              type="text" 
              name='adjective2'
              value={this.state.adjective2}
              onChange={this.onChangeHandler}  
            />
             
            <input
              placeholder="noun"
              type="text" 
              name='noun2'
              value={this.state.noun2}
              onChange={this.onChangeHandler}
            />

              <p>.</p>
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
