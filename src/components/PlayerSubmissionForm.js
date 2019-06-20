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
    const field = event.target.name;
    const value = event.target.value;
    event.target.className = ''

    const updatedState = {};
    updatedState[field] = value;
    this.setState(updatedState);
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const nextVerse = this.props.fields.map((field) => {
      if (field.key) {
        return this.state[field.key]
      } else {
        return field
      }
    })
    console.log(event)
    this.props.addLineCallback(nextVerse.join(" "))

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
        <h3>Player Submission Form for Player #{ this.props.playerNumber + 1}</h3>

        <form className="PlayerSubmissionForm__form" onSubmit={this.handleSubmit} >
          <div className="PlayerSubmissionForm__poem-inputs">
            <label>The</label> 
            <input name="adjective" placeholder="adjective" className="PlayerSubmissionFormt__input--invalid" type="text" onChange={this.onChangeHandler} value={this.state.adjective} required />
            <input name="noun" placeholder="noun"  className="PlayerSubmissionFormt__input--invalid"type="text" required onChange={this.onChangeHandler} value={this.state.noun} />
            <input name="adverb" placeholder="adverb" className="PlayerSubmissionFormt__input--invalid" type="text" required  onChange={this.onChangeHandler} value={this.state.adverb} />
            <input name="verb" placeholder="verb" className="PlayerSubmissionFormt__input--invalid" type="text" required  onChange={this.onChangeHandler} value={this.state.verb}/>
            <label>the</label> 
            <input name="adjective2" placeholder="adjective2" className="PlayerSubmissionFormt__input--invalid" type="text"  required  onChange={this.onChangeHandler} value={this.state.adjective2} />
            <input name="noun2" placeholder="noun2" className="PlayerSubmissionFormt__input--invalid" type="text"  required onChange={this.onChangeHandler} value={this.state.noun2} />
            <label>.</label>
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
