import React, { Component } from 'react';
import './PlayerSubmissionForm.css';

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

  handleSubmit = (event) => {
    event.preventDefault();
    let fullLine = ''
    this.props.fields.forEach((field) => {
      if(typeof field === 'string') {
        fullLine += field;
      } else {
        fullLine += this.state[field.key]
      }
      fullLine += ' '
    })
    this.props.addLineCallback(fullLine.substring(0, fullLine.length-1));
    this.setState({
      adj1: '',
      noun1: '',
      adv: '',
      verb: '',
      adj2: '',
      noun2: '',
    });
  }

  onChangeHandler = (event) => {
    const field = {}
    field[event.target.name] = event.target.value;

    console.log(`${event.target.name}: ${event.target.value}`)

    this.setState(field);
  }

  invalidClass = "PlayerSubmissionForm__input--invalid"

  generateInputs = () => {
    const formFields = this.props.fields.map((field, i) => {
      if(typeof field === 'string') {
        return field;
      } else {
        return (
          <input
            key={i}
            name={field.key}
            onChange={this.onChangeHandler}
            className={this.invalidClass}
            placeholder={field.placeholder}
            type="text"
            value={this.state[field.key]} />
        );
      }
    });

    return (
      <div className="PlayerSubmissionForm__poem-inputs">
        {formFields}
      </div>
    )
  }

  render() {
    return (
      <div className={`PlayerSubmissionForm ${this.props.gameOver ? 'hidden' : 'visible'}`}>
        <h3>Player Submission Form for Player #{ this.props.currentPlayer }</h3>

        <form className="PlayerSubmissionForm__form" >
          
          {this.generateInputs()}

          <div className="PlayerSubmissionForm__submit">
            <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" onClick={this.handleSubmit}/>
          </div>
        </form>
      </div>
    );
  }
}

export default PlayerSubmissionForm;
