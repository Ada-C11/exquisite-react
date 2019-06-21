import React, { Component } from 'react';
import './FinalPoem.css';

class FinalPoem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      finalPoem: props.poem
    }
  }
  showFinalPoem = () => {
    const poemlines = this.state.finalPoem.map((poemline, i) => {
      return (
        <p key={i}>{poemline}</p>
      )
    });
    return poemlines
  }

  onSubmitButtonClick = () => {
    this.props.displayCallback()
  }

  render() {
   if(this.props.display) {

    return (
      <div className="FinalPoem">
        <section className="FinalPoem__poem">
          <h3>Final Poem</h3>
        </section>
        <div className="FinalPoem__reveal-btn-container">
          <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" onClick={this.onSubmitButtonClick}/>
        </div>
      </div>
    );
   } else {
     return(
      <div className="FinalPoem">
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
        <section>
        {this.showFinalPoem()}
        </section> 
      </section>
      </div>
     )

   }
  }
}

export default FinalPoem;
