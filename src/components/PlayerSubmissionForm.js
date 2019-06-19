import React, { Component } from 'react';
import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      adjective1: 'adjective',
      noun1: 'noun',
      adverb: 'adverb',
      verb: 'verb',
      adjective2: 'adjective',
      noun2: 'noun',
    };
  }

  onChangeHandler = (event) => {
    const field = {}
    field[event.target.name] = event.target.value
    this.setState(field)
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onPlayerSubmissionFormCallback({
      adjective1: this.state.adjective1,
      noun1: this.state.noun1,
      adverb: this.state.adverb,
      verb: this.state.verb,
      adjective2: this.state.adjective2,
      noun2: this.state.noun2,
    });
    // uncomment these lines after i take out the hard coded data 
    // this.setState({
    //   adjective1: '',
    //   noun1: '',
    //   adverb: '',
    //   verb: '',
    //   adjective2: '',
    //   noun2: '',
    // });
  }


  render() {

    return (
      <div className="PlayerSubmissionForm" onSubmit={this.handleSubmit}>
        <h3>Player Submission Form for Player #{}</h3>

        <form className="PlayerSubmissionForm__form" >

          <div className="PlayerSubmissionForm__poem-inputs">
            The 
            <input
              placeholder="adjective"
              type="text" 
              onChange={this.onChangeHandler}
              value={this.state.adjective1}
              />
            <input
              placeholder="noun"
              type="text" 
              onChange={this.onChangeHandler}
              value={this.state.noun1}
              />
            <input
              placeholder="adverb"
              type="text" 
              onChange={this.onChangeHandler}
              value={this.state.adverb}
              />
            <input
              placeholder="verb"
              type="text" 
              onChange={this.onChangeHandler}
              value={this.state.verb}
              />
              the 
            <input
              placeholder="adjective"
              type="text" 
              onChange={this.onChangeHandler}
              value={this.state.adjective2}
              />
            <input
              placeholder="noun"
              type="text" 
              onChange={this.onChangeHandler}
              value={this.state.noun2}
              />

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
