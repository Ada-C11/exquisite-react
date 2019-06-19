import React, { Component } from 'react';
import './PlayerSubmissionForm.css';
import PropTypes from 'prop-types';

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
                className={!this.state.adjective ? "PlayerSubmissionFormt__input--invalid": ""}
              />
            </div>
            <div>
              <input
                name="noun"
                placeholder="noun"
                onChange={this.onChangeHandler}
                value={this.state.noun}
                className={!this.state.noun ? "PlayerSubmissionFormt__input--invalid": ""}
              />
            </div>
            <div>
              <input
                name="adverb"
                placeholder="adverb"
                onChange={this.onChangeHandler}
                value={this.state.adverb}
                className={!this.state.adverb ? "PlayerSubmissionFormt__input--invalid": ""}
              />
            </div>
            <div>
              <input
                name="verb"
                placeholder="verb"
                onChange={this.onChangeHandler}
                value={this.state.verb}
                className={!this.state.verb ? "PlayerSubmissionFormt__input--invalid": ""}
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
                className={!this.state.adjective2 ? "PlayerSubmissionFormt__input--invalid": ""}
              />
            </div>
            <div>
              <input
                name="noun2"
                placeholder="noun"
                onChange={this.onChangeHandler}
                value={this.state.noun2}
                className={!this.state.noun2 ? "PlayerSubmissionFormt__input--invalid": ""}
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
