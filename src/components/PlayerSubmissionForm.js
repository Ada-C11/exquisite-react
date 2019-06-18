import React, { Component } from 'react';
import './PlayerSubmissionForm.css';

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
        <h3>Player Submission Form for Player #{}</h3>

        <form className="PlayerSubmissionForm__form" >

          <div className="PlayerSubmissionForm__poem-inputs">

            <p>The</p>
            <input
              name='adjective1'
              placeholder='adjective'
              value={adjective1}
              onChange={this.onChangeHandler}
            />

            <input
              name='noun'
              value={noun1}
              onChange={this.onChangeHandler}
            />

            <input
              name='adverb'
              value={adverb}
              onChange={this.onChangeHandler}
            />

            <input
              name='verb'
              value={verb}
              onChange={this.onChangeHandler}
            />

            <p>the</p>
            <input
              name='adjective'
              value={adjective2}
              onChange={this.onChangeHandler}
            />

            <input
              name='noun'
              value={noun2}
              onChange={this.onChangeHandler}
            />

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
