import React, { Component } from 'react';
import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    
    super(props);
    this.state = {
      submission: '',
      fullSubmission: '',
      placeholder: '',
      onFormButtonCallBack: this.props.onPlayerFormButtonCallBack,
    }
  }

  onChangeInput = (event) => {

    let tempSubmission = ''
    tempSubmission += (event.target.value)

    this.setState({
      submission: tempSubmission,
      placeholder: event.target.placeholder
    })
    

    if (this.state.placeholder !== event.target.placeholder) {
      
      let insert = this.state.submission;
      let fullSubmission = this.state.fullSubmission;
      fullSubmission += insert;
      this.setState({
        fullSubmission,
      })
      
    }

  }

  onSubmitForm = (event) => {
    event.preventDefault();
  
    let fullSubmission = this.state.fullSubmission
    fullSubmission += this.state.submission

    this.setState({
      fullSubmission,
    })
   
    this.state.onFormButtonCallBack(event, fullSubmission);
  }

  

  render() {

    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{  }</h3>

        <form className="PlayerSubmissionForm__form" >

          <div className="PlayerSubmissionForm__poem-inputs">

            
              The 

              <input
                placeholder="adjective1"
                type="text" onChange={this.onChangeInput}/>

              <input
                placeholder="noun1"
                type="text" onChange={this.onChangeInput}/>
              <input
                placeholder="adverb"
                type="text" onChange={this.onChangeInput}/>
              <input
                placeholder="verb"
                type="text" onChange={this.onChangeInput}/>
              
              the

              <input
                placeholder="adjective2"
                type="text" onChange={this.onChangeInput}/>

              <input
                placeholder="noun2"
                type="text" onChange={this.onChangeInput}/>
              
              .
            
          </div>

          <div className="PlayerSubmissionForm__submit">
            <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" onClick={this.onSubmitForm}/>
          </div>
        </form>
      </div>
    );
  }
}

export default PlayerSubmissionForm;
