import React, { Component } from 'react';
import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {

  constructor({props}) {
    super(props);
    this.state = {
      numPlayers: 1,
      adj1: '',
      noun1: '',
      adv: '',
      verb: '',
      input6: 'the',
      adj2: '',
      noun2: '',
      input9: '.', 
    }
  }

  constructForm = () => {
    const inputs = this.props.fields.map((field, i) => {
      if(typeof field === 'string') {
        return(<span key={i}>{field}</span>);
      }

      return(
        <input 
          key={i}
          name={field.key}
          placeholder={field.placeholder}
          value={this.state[field.key]}
          type="text"
          onChange={this.onChangeHandler}
          className={this.validInput(field.key) ? 'valid' : 'PlayerSubmissionFormt__input--invalid'}
        />
      )
    })

    return inputs;
  }

  onChangeHandler = (event) => {
    const fields = {};
    fields[event.target.name] = event.target.value;
    
    this.setState(fields);
  }
  
  onSubmitButtonClick = (event) => {
    event.preventDefault();
    const sentence = this.props.fields[0] + ' ' + this.state.adj1 + ' ' + this.state.noun1 + ' ' + 
                      this.state.adv + ' ' + this.state.verb + ' ' + this.props.fields[5] + ' ' +
                      this.state.adj2 + ' ' + this.state.noun2 + ' ' + this.props.fields[8];
    
    this.props.inputStorage(sentence);
    this.setState({
      numPlayers: this.state.numPlayers + 1,
      adj1: '',
      noun1: '',
      adv: '',
      verb: '',
      adj2: '',
      noun2: '',
    })
  }

  validInput = (fieldName) => {
    return this.state[fieldName].length !== 0;
  }


  render() {
    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{ this.state.numPlayers }</h3>

        <form className="PlayerSubmissionForm__form" onSubmit={this.onSubmitButtonClick}>

          <div className="PlayerSubmissionForm__poem-inputs">
            { this.constructForm() }
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
