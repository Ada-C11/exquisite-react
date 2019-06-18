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
    console.log(field)
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.addLineCallback({
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
        <h3>Player Submission Form for Player #{ this.props.playerNumber  }</h3>

        <form className="PlayerSubmissionForm__form" onSubmit={this.handleSubmit} >

          <div className="PlayerSubmissionForm__poem-inputs">
            <label>The</label> 
              <input
                name="adjective"
                placeholder="adjective"
                type="text"
                onChange={this.onChangeHandler}
                value={this.state.adjective}
                required />
           
            <input
              name="noun"
              placeholder="noun"
              type="text" 
              required
              onChange={this.onChangeHandler}
              value={this.state.noun} />
            <input
              name="adverb"
              placeholder="adverb"
              type="text"
              required 
              onChange={this.onChangeHandler}
              value={this.state.adverb} />
            <input
              name="verb"
              placeholder="verb"
              type="text" 
              required 
              onChange={this.onChangeHandler}
              value={this.state.verb}/>
            <label>the</label>
              <input
                name="adjective2"
                placeholder="adjective"
                type="text"
                required
                onChange={this.onChangeHandler}
                value={this.state.adjective} />
            <input
              name="noun2"
              placeholder="noun"
              type="text" 
              required
              onChange={this.onChangeHandler}
              value={this.state.noun} />
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
