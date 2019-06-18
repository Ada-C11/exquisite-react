import React, { Component } from 'react';
import './PlayerSubmissionForm.css';

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
    }
  }

  render() {

    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{  }</h3>

        <form className="PlayerSubmissionForm__form" >

          <div className="PlayerSubmissionForm__poem-inputs">
            <div>
              The
            </div>
            <div>
              <input
                name="adjective"
                onChange={this.onChangeHandler}
                value={this.state.adjective}
              />
            </div>
            <div>
              <input
                name="noun"
                onChange={this.onChangeHandler}
                value={this.state.noun}
              />
            </div>
            <div>
              <input
                name="adverb"
                onChange={this.onChangeHandler}
                value={this.state.adverb}
              />
            </div>
            <div>
              <input
                name="verb"
                onChange={this.onChangeHandler}
                value={this.state.verb}
              />
            </div>
            <div>
              the
            </div>
            <div>
              <input
                name="adjective2"
                onChange={this.onChangeHandler}
                value={this.state.adjective2}
              />
            </div>
            <div>
              <input
                name="noun2"
                onChange={this.onChangeHandler}
                value={this.state.noun2}
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
