import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      adj1:'',
      noun1:'',
      adv:'',
      verb:'',
      adj2:'',
      noun2:'',
      playerCount: 1,
    };
  }

  onInputChange = (event) => {
    const updatedState = {};
    
    const field = event.target.name;
    const value = event.target.value;
    updatedState[field] = value;
    this.setState(updatedState);
    value? event.target.className = "PlayerSubmissionFormt__input--valid" : event.target.className = "PlayerSubmissionFormt__input--invalid"
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    
    const newSubmission = {
      adj1: this.state.adj1,
      noun1: this.state.noun1,
      adv: this.state.adv,
      verb: this.state.verb,
      adj2: this.state.adj2,
      noun2: this.state.noun2
    };
    
    this.setState ({
      adj1:'',
      noun1:'',
      adv:'',
      verb:'',
      adj2:'',
      noun2:'',
    })

    let playerCount = this.state.playerCount;
    playerCount += 1;
    this.setState({
      playerCount
    })
    this.props.addSentenceCallback(newSubmission);
  }

  render() {

    return (
      <div className="PlayerSubmissionForm" >
        <h3>Player Submission Form for Player #{ this.state.playerCount }</h3>

        <form className="PlayerSubmissionForm__form" onSubmit={this.onFormSubmit}>

          <div className="PlayerSubmissionForm__poem-inputs">
            <span>The</span>
            <input placeholder="adjective" name="adj1" type="text" onChange={this.onInputChange} value={this.state.adj1} className={"PlayerSubmissionFormt__input--invalid"}/>
            <input placeholder="noun" name="noun1" type="text" onChange={this.onInputChange} value={this.state.noun1} className={"PlayerSubmissionFormt__input--invalid"}/>
            <input placeholder="adverb" name="adv" type="text" onChange={this.onInputChange} value={this.state.adv} className={"PlayerSubmissionFormt__input--invalid"}/>
            <input placeholder="verb" name="verb" type="text" onChange={this.onInputChange} value={this.state.verb} className={"PlayerSubmissionFormt__input--invalid"} />
            <span>the</span>
            <input placeholder="adjective" name="adj2" type="text" onChange={this.onInputChange} value={this.state.adj2} className={"PlayerSubmissionFormt__input--invalid"} />
            <input placeholder="noun" name="noun2" type="text" onChange={this.onInputChange} value={this.state.noun2} className={"PlayerSubmissionFormt__input--invalid"}/>
            <span>.</span>
          </div>

          <div className="PlayerSubmissionForm__submit" >
            <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
          </div>
        </form>
      </div>
    );
  }
}

PlayerSubmissionForm.propTypes = {
  addSentenceCallback: PropTypes.func.isRequired,
};

export default PlayerSubmissionForm;
