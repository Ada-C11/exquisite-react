import React, { Component } from 'react';
import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      adjective1: '',
      noun1: '',
      adverb: '',
      verb: '',
      adjective2: '',
      noun2: '',
    };
  }

  onChangeHandler = (event) => {
    const field = {}
    field[event.target.name] = event.target.value
    this.setState(field)
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmitLineCallback({
      adjective1: this.state.adjective1,
      noun1: this.state.noun1,
      adverb: this.state.adverb,
      verb: this.state.verb,
      adjective2: this.state.adjective2,
      noun2: this.state.noun2,
    });
    this.setState({
      adjective1: '',
      noun1: '',
      adverb: '',
      verb: '',
      adjective2: '',
      noun2: '',
    });
  }


  render() {

    return (
      <div className="PlayerSubmissionForm" >
        <h3>Player Submission Form for Player #{this.props.playerTurn}</h3>

        <form className="PlayerSubmissionForm__form" onSubmit={this.handleSubmit} >

          <div className="PlayerSubmissionForm__poem-inputs">
            The
            <input
              name="adjective1"
              placeholder="adjective"
              onChange={this.onChangeHandler}
              value={this.state.adjective1}
            />
            <input
              name="noun1"
              placeholder="noun"
              onChange={this.onChangeHandler}
              value={this.state.noun1}
            />
            <input
              name="adverb"
              placeholder="adverb"
              onChange={this.onChangeHandler}
              value={this.state.adverb}
            />
            <input
              name="verb"
              placeholder="verb"
              onChange={this.onChangeHandler}
              value={this.state.verb}
            />
            the
            <input
              name="adjective2"
              placeholder="adjective"
              onChange={this.onChangeHandler}
              value={this.state.adjective2}
            />
            <input
              name="noun2"
              placeholder="noun" 
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
