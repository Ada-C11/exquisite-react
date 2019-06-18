import React, { Component } from 'react';
import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    const { adjective1, noun1, adverb, verb, adjective2, noun2} = this.state;

    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{  }</h3>

        <form className="PlayerSubmissionForm__form" >

          <div className="PlayerSubmissionForm__poem-inputs">
***********************

        <div>
          
          <input
            name='adjective1'
            value={this.state.name}
            onChange={this.onChangeHandler}
          />
        </div>

        <div>
          <label htmlFor='images'>Image Link:</label>
          <input
            name='images'
            value={this.state.images}
            onChange={this.onChangeHandler}
          />
        </div>

        <div>
          <label htmlFor='species'>Species:</label>
          <input
            name='species'
            value={this.state.species}
            onChange={this.onChangeHandler}
          />
        </div>

        <div>
          <label htmlFor='about'>About:</label>
          <input
            name='about'
            value={this.state.about}
            onChange={this.onChangeHandler}
          />
        </div>

        <input className="btn btn-success new-pet-form--submit" type="submit" name="submit" value="Add a Pet" />
      </form>



*********************    
            <input
              placeholder="hm..."
              type="text" />

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
