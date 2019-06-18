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
      // addPetCallback: this.addPet,
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addSubmissionCallback({
      adj1: this.state.adj1,
      noun1: this.state.noun1,
      adv: this.state.adv,
      verb: this.state.verb,
      adj2: this.state.adj2,
      noun2: this.state.noun2,
    });
    this.setState({
      adj1: '',
      noun1: '',
      adv: '',
      verb: '',
      adj2: '',
      noun2: '',
    });
}

  render() {

    const formContent = this.props.fields.map( (field, i) => {
      if (field.key) {
        return <input
          key={ i }
          placeholder={ field.placeholder }
          value={ this.state[field.key] }
          type="text"
          className="PlayerSubmissionForm__input"
        />;
      } else {
        return field;
      }
    })


    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{  }</h3>

        <form className="PlayerSubmissionForm__form" >

          <div className="PlayerSubmissionForm__poem-inputs">

          { formContent }

          <div className="PlayerSubmissionForm__submit">
            <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
          </div>
          </div>
        </form>
      </div>
    );
  }
}

export default PlayerSubmissionForm;
