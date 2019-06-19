import React, { Component } from 'react';
import './PlayerSubmissionForm.css';
import PropTypes from 'prop-types';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      adj1: '',
      noun1: '',
      adv: '',
      verb: '',
      adj2: '',
      noun2: ''
    };
  };

  onChangeHandler = (event) => {
    const field = {}
    field[event.target.name] = event.target.value;

    this.setState(field);
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.onFormSubmitCallback(
      `The ${this.state.adj1} ${this.state.noun1} ${this.state.adv} ${this.state.verb} the ${this.state.adj2} ${this.state.noun2}.`
    );

    this.setState({
      adj1: '',
      noun1: '',
      adv: '',
      verb: '',
      adj2: '',
      noun2: ''
    });
  };

  validations = {
    adj1: /.+/,
    noun1: /.+/,
    adv: /.+/, 
    verb: /.+/, 
    adj2: /.+/, 
    noun2: /.+/
  };

  fieldValid = (fieldName) => {
    return this.validations[fieldName].test(this.state[fieldName]);
  };

  render() {

    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{ this.props.playerNumber }</h3>

        <form className="PlayerSubmissionForm__form" onSubmit={this.handleSubmit}>
          <div className="PlayerSubmissionForm__poem-inputs">
              The
              <input
                className={!this.fieldValid('adj1') ? 'PlayerSubmissionFormt__input--invalid' : ''}
                name='adj1'
                value={this.state.adj1}
                placeholder='adjective'
                type='text'
                onChange={this.onChangeHandler} 
              />
            
              <input
                className={!this.fieldValid('noun1') ? 'PlayerSubmissionFormt__input--invalid' : ''}
                name='noun1'
                value={this.state.noun1}
                placeholder='noun'
                type='text'
                onChange={this.onChangeHandler}
              />
            
              <input
                className={!this.fieldValid('adv') ? 'PlayerSubmissionFormt__input--invalid' : ''}
                name='adv'
                value={this.state.adv}
                placeholder='adverb'
                type='text'
                onChange={this.onChangeHandler}
              />

              <input
                className={!this.fieldValid('verb') ? 'PlayerSubmissionFormt__input--invalid' : ''}
                name='verb'
                value={this.state.verb}
                placeholder='verb'
                type='text'
                onChange={this.onChangeHandler}
              />

            the

              <input
                className={!this.fieldValid('adj2') ? 'PlayerSubmissionFormt__input--invalid' : ''}
                name='adj2'
                value={this.state.adj2}
                placeholder='adjective'
                type='text'
                onChange={this.onChangeHandler}
              />

              <input
                className={!this.fieldValid('noun2') ? 'PlayerSubmissionFormt__input--invalid' : ''}
                name='noun2'
                value={this.state.noun2}
                placeholder='noun'
                type='text'
                onChange={this.onChangeHandler}
              />

              . 

          </div>

          <div className="PlayerSubmissionForm__submit">
            <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
          </div>
        </form>
      </div>
    );
  };
};

PlayerSubmissionForm.propTypes = {
  onFormSubmitCallback: PropTypes.func,
  playerNumber: PropTypes.number,
};

export default PlayerSubmissionForm;
