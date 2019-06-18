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
    };
  }

  onChangeHandler = (event) => {
    const field = {}
    field[event.target.name] = event.target.value;

    this.setState(field);
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.addPetCallback({
      adjective: this.state.adjective,
      noun: this.state.noun,
      adverb: this.state.adverb,
      verb: this.state.verb,
      adjective2: this.state.adjective2,
      noun2: this.state.noun2
    });

    this.setState({
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

        <form className="PlayerSubmissionForm__form" onSubmit={this.handleSubmit} >

          <div className="PlayerSubmissionForm__poem-inputs">
            <input
              placeholder="adjective..."
              type="text"
              onChange={this.onChangeHandler}
              value={this.state.adjective}
              required />
            <input
              placeholder="noun..."
              type="text" 
              required
              onChange={this.onChangeHandler}
              value={this.state.noun} />
            <input
              placeholder="adverb..."
              type="text"
              required 
              onChange={this.onChangeHandler}
              value={this.state.adverb} />
            <input
              placeholder="verb..."
              type="text" 
              required 
              onChange={this.onChangeHandler}
              value={this.state.verb}/>
            <input
              placeholder="adjective..."
              type="text"
              required
              onChange={this.onChangeHandler}
              value={this.state.adjective} />
            <input
              placeholder="noun..."
              type="text" 
              required
              onChange={this.onChangeHandler}
              value={this.state.noun} />

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
