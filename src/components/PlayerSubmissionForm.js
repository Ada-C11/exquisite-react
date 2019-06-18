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

  onChangeHandler = (event) => {
    const field = {}
    field[event.target.name] = event.target.value;
    this.setState(field);
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.addLineCallback({
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

    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{ this.props.player + 1 }</h3>

        <form className="PlayerSubmissionForm__form" onSubmit={this.handleSubmit} >

          <div className="PlayerSubmissionForm__poem-inputs">
              <label htmlFor="adj1">The</label>
              <input
                name="adj1"
                placeholder="adjective"
                onChange={this.onChangeHandler}
                value={this.state.adj1}
                required
              />
              <label htmlFor="noun"></label>
              <input
                name="noun1"
                placeholder="noun"
                value={this.state.noun1}
                onChange={this.onChangeHandler}
                required
              />
              <label htmlFor="adv"></label>
              <input
                name="adv"
                placeholder="adverb"
                value={this.state.adv}
                onChange={this.onChangeHandler}
                required
              />

              <label htmlFor="verb"></label>
              <input
                name="verb"
                placeholder="verb"
                value={this.state.verb}
                onChange={this.onChangeHandler}
                required
              />    
              <label htmlFor="adj2">the</label>
              <input
                name="adj2"
                placeholder="adjective"
                value={this.state.adj2}
                onChange={this.onChangeHandler}
                required
              />
              <label htmlFor="noun2"></label>
              <input
                name="noun2"
                placeholder="noun"
                value={this.state.noun2}
                onChange={this.onChangeHandler}
                required
              />
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
