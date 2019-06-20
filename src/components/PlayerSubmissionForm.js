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
    };
  }

  onChangeHandler = (event) => {
    const field = {}
    field[event.target.name] = event.target.value;

    this.setState(field);
  }

  handleSubmit = (event) => {
    event.preventDefault();
      
    this.props.addLineCallback(
      `The ${this.state.adj1} ${this.state.noun1} ${this.state.adv} ${this.state.verb} the ${this.state.adj2} ${this.state.noun2}.`
    );

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

    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{ this.props.players + 1 }</h3>

        <form className="PlayerSubmissionForm__form" onSubmit={this.handleSubmit}>

          <div className="PlayerSubmissionForm__poem-inputs">
            <label>The</label>
            <input
              name="adj1"
              placeholder="adjective"
              type="text"
              onChange={this.onChangeHandler}
              value={this.state.adj1}
              required />
            <input
              name="noun1"
              placeholder="noun"
              type="text"
              onChange={this.onChangeHandler}
              value={this.state.noun1}
              required />
            <input
              name="adv"
              placeholder="adverb"
              type="text"
              onChange={this.onChangeHandler}
              value={this.state.adv}
              required />
            <input
              name="verb"
              placeholder="verb"
              type="text"
              onChange={this.onChangeHandler}
              value={this.state.verb}
              required />
            <label>the</label>
            <input
              name="adj2"
              placeholder="adjective"
              type="text"
              onChange={this.onChangeHandler}
              value={this.state.adj2}
              required />
            <input
              name="noun2"
              placeholder="noun"
              type="text"
              onChange={this.onChangeHandler}
              value={this.state.noun2}
              required />
            <label>.</label>
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
