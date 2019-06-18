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
      noun2: ''
    };
  };

  onChangeHandler = (event) => {
    const field = {}
    field[event.target.name] = event.target.value;

    this.setState(field);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.newSubmissionCallback({
      adjective: this.state.adjective,
      noun: this.state.noun,
      adverb: this.state.adverb,
      verb: this.state.verb,
      adjective2: this.state.adjective2,
      noun2: this.state.noun2,
    });
    this.setState({
      adjective: '',
      noun: '',
      adverb: '',
      verb: '',
      adjective2: '',
      noun2: ''
    });
  }

  render() {

    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{this.props.playerNumber}</h3>

        <form className="PlayerSubmissionForm__form" onSubmit={this.handleSubmit}>

          <div className="PlayerSubmissionForm__poem-inputs">
            <div>
              The
            </div>
            <div>
              <input
                name="adjective"
                placeholder="adjective"
                onChange={this.onChangeHandler}
                value={this.state.adjective}
              />
            </div>
            <div>
              <input
                name="noun"
                placeholder="noun"
                onChange={this.onChangeHandler}
                value={this.state.noun}
              />
            </div>
            <div>
              <input
                name="adverb"
                placeholder="adverb"
                onChange={this.onChangeHandler}
                value={this.state.adverb}
              />
            </div>
            <div>
              <input
                name="verb"
                placeholder="noun"
                onChange={this.onChangeHandler}
                value={this.state.verb}
              />
            </div>
            <div>
              the
            </div>
            <div>
              <input
                name="adjective2"
                placeholder="adjective"
                onChange={this.onChangeHandler}
                value={this.state.adjective2}
              />
            </div>
            <div>
              <input
                name="noun2"
                placeholder="noun"
                onChange={this.onChangeHandler}
                value={this.state.noun2}
              />
            </div>
            <div>
              .
            </div>
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
