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
      noun2: '', 
    }
  }

  resetState = () => {
    this.setState({
      adjective1: '',
      noun1: '',
      adverb: '',
      verb: '',
      adjective2: '',
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



  render() {

    return (
      <div className="PlayerSubmissionForm">
        {/* Add 1 so it does not start from player #0 */}
        <h3>Player Submission Form for Player #{ this.props.playerNumber + 1}</h3>

        <form onSubmit={this.onSubmit} className="PlayerSubmissionForm__form" >

          <div className="PlayerSubmissionForm__poem-inputs">
            <div>
            <input name='adjective1' type="text" placeholder='adjective' onChange={this.onFormChange} value={this.state.adjective1}/>
            </div>
            <div>
              <input name='noun1' type="text" placeholder='noun' onChange={this.onFormChange} value={this.state.noun1}/>
            </div>
            <div>
              <input name='adverb' type="text" placeholder='adverb' onChange={this.onFormChange} value={this.state.adverb}/>
            </div>
            <div>
              <input name='verb' type="text" placeholder='verb' onChange={this.onFormChange} value={this.state.verb}/>
            </div>
            <div>
            <input name='adjective2' type="text" placeholder='adjective' onChange={this.onFormChange} value={this.state.adjective2}/>
            </div>
            <div>
              <input name='noun2' type="text" placeholder='noun' onChange={this.onFormChange} value={this.state.noun2}/>
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
