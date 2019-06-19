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
      player: 1
    };
  }

  onChangeHandler = (event) => {
    // console.log('event: ', event.target)
    const field = {}
    field[event.target.name] = event.target.value
    this.setState(field)
  }

  handleSubmit = (event) => {
    event.preventDefault();

    // this.props.submitFormCallback({
    //   adj1: this.state.adj1,
    //   noun1: this.state.noun1,
    //   adv: this.state.adv,
    //   verb: this.state.verb, 
    //   adj2: this.state.adj2,
    //   noun2: this.state.noun2
    // })

    this.props.submitFormCallback(
      `The ${this.state.adj1} ${this.state.noun1} ${this.state.adv} ${this.state.verb} the ${this.state.adj2} ${this.state.noun2}.`
    )

    const nextPlayer = this.state.player

    this.setState({
      adj1: '',
      noun1: '',
      adv: '',
      verb: '', 
      adj2: '',
      noun2: '',
      player: nextPlayer + 1
    })
  }

  render() {

    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{this.state.player}</h3>

        <form className="PlayerSubmissionForm__form" onSubmit={this.handleSubmit} >

          <div className="PlayerSubmissionForm__poem-inputs">
            The 
            <input
              name='adj1'
              placeholder="adjective"
              type="text"
              onChange={this.onChangeHandler}
              value={this.state.adj1} />

            <input 
              name='noun1'
              placeholder='noun'
              type="text"
              onChange={this.onChangeHandler}
              value={this.state.noun1}/>

            <input 
              name='adv'
              placeholder='adverb'
              type="text"
              onChange={this.onChangeHandler}
              value={this.state.adv}/>

            <input 
              name='verb'
              placeholder='verb'
              type="text"
              onChange={this.onChangeHandler}
              value={this.state.verb}/>

            the 
            <input 
              name='adj2'
              placeholder='adjective'
              type="text"
              onChange={this.onChangeHandler}
              value={this.state.adj2}/>

            <input 
              name='noun2'
              placeholder='noun'
              type="text"
              onChange={this.onChangeHandler}
              value={this.state.noun2}/>
            . 
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
