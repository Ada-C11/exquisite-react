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
      noun2: '', 
    }
  }

  resetState = () => {
    this.setState({
      adj1: '',
      noun1: '',
      adv: '',
      verb: '',
      adj2: '',
      noun2: '', 
    })
  }

  onFormChange = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    
    const updatedState = {};
    updatedState[field] = value;
    this.setState(updatedState);
  }

  onSubmit = (event) => {
    event.preventDefault()
    // const {adjective1, noun1, adverb, verb, adjective2, noun2} = this.state

    const newVerse = this.props.fields.map((field) => {
      if (field.key) {
        return this.state[field.key]
      } else {
        return field
      }
    })
    console.log(event)
    this.props.formCallback(newVerse.join(" "))
    
    this.resetState()
  }

  isInputValid = (input) => {
    const className = input.length > 0 ? '' : 'PlayerSubmissionFormt__input--invalid'
    return className
  }



  render() {

    return (
      <div className="PlayerSubmissionForm">
        {/* Add 1 so it does not start from player #0 */}
        <h3>Player Submission Form for Player #{ this.props.playerNumber + 1}</h3>

        <form onSubmit={this.onSubmit} className="PlayerSubmissionForm__form" >

          <div className="PlayerSubmissionForm__poem-inputs">
            <div>
            The <input className={this.isInputValid(this.state.adj1)} name='adj1' type="text" placeholder='adjective' onChange={this.onFormChange} value={this.state.adj1}/>
            </div>
            <div>
              <input className={this.isInputValid(this.state.noun1)} name='noun1' type="text" placeholder='noun' onChange={this.onFormChange} value={this.state.noun1}/>
            </div>
            <div>
              <input className={this.isInputValid(this.state.adv)} name='adv' type="text" placeholder='adverb' onChange={this.onFormChange} value={this.state.adv}/>
            </div>
            <div>
              <input className={this.isInputValid(this.state.verb)} name='verb' type="text" placeholder='verb' onChange={this.onFormChange} value={this.state.verb}/>
            </div>
            <div>
            the <input className={this.isInputValid(this.state.adj2)} name='adj2' type="text" placeholder='adjective' onChange={this.onFormChange} value={this.state.adj2}/>
            </div>
            <div>
              <input className={this.isInputValid(this.state.noun2)} name='noun2' type="text" placeholder='noun' onChange={this.onFormChange} value={this.state.noun2}/>
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


PlayerSubmissionForm.propTypes = {
  formCallback: PropTypes.func.isRequired,
  playerNumber: PropTypes.number.isRequired,
}

export default PlayerSubmissionForm;
