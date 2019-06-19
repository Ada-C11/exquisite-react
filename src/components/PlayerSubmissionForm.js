import React, { Component } from 'react';
import './PlayerSubmissionForm.css';
import PropTypes from 'prop-types';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      adjective1: '',
      noun1: '',
      adverb: '',
      verb: '',
      adjective2: '',
      noun2: ''

    }
  }

  validations = {
    adjective1: /.+/,
    noun1: /.+/,
    adverb: /.+/,
    verb: /.+/,
    adjective2: /.+/,
    noun2: /.+/,
  }

  fieldValid = (fieldName) => {
    return this.validations[fieldName].test(this.state[fieldName]);
  }


  onChangeHandler = (event) => {
    const field = {}
    field[event.target.name] = event.target.value;

    this.setState(field);
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmitLineCallback({
      adjective1: this.state.adjective1,
      noun1: this.state.noun1,
      adverb: this.state.adverb,
      verb: this.state.verb,
      adjective2: this.state.adjective2,
      noun2: this.state.noun2
    });

    // console.log(this.state.adjective1);

    this.setState({
      adjective1: '',
      noun1: '',
      adverb: '',
      verb: '',
      adjective2: '',
      noun2: ''
    });
  }

 

  render() {

    const { adjective1, noun1, adverb, verb, adjective2, noun2 } = this.state;

    return (

      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{this.props.playerNumber}</h3>

        <form className="PlayerSubmissionForm__form" onSubmit={this.handleSubmit}>

          <div className="PlayerSubmissionForm__poem-inputs">

            <p>The</p>
            <input
              name='adjective1'
              placeholder='adjective'
              size='10'
              value={adjective1}
              onChange={this.onChangeHandler}
              className={this.fieldValid('adjective1') ? 'valid' : 'PlayerSubmissionFormt__input--invalid'}
            />

            <input
              name='noun1'
              placeholder='noun'
              size='10'
              value={noun1}
              onChange={this.onChangeHandler}
              className={this.fieldValid('noun1') ? 'valid' : 'PlayerSubmissionFormt__input--invalid'}
            />

            <input
              name='adverb'
              placeholder='adverb'
              size='10'
              value={adverb}
              onChange={this.onChangeHandler}
              className={this.fieldValid('adverb') ? 'valid' : 'PlayerSubmissionFormt__input--invalid'}
            />

            <input
              name='verb'
              placeholder='verb'
              size='10'
              value={verb}
              onChange={this.onChangeHandler}
              className={this.fieldValid('verb') ? 'valid' : 'PlayerSubmissionFormt__input--invalid'}
            />

            <p>the</p>
            <input
              name='adjective2'
              placeholder='adjective'
              size='10'
              value={adjective2}
              onChange={this.onChangeHandler}
              className={this.fieldValid('adjective2') ? 'valid' : 'PlayerSubmissionFormt__input--invalid'}
            />

            <input
              name='noun2'
              placeholder='noun'
              size='10'
              value={noun2}
              onChange={this.onChangeHandler}
              className={this.fieldValid('noun2') ? 'valid' : 'PlayerSubmissionFormt__input--invalid'}
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

PlayerSubmissionForm.propTypes = {
  onSubmitLineCallback: PropTypes.func.isRequired,
  playerNumber: PropTypes.number.isRequired,
};


export default PlayerSubmissionForm;
