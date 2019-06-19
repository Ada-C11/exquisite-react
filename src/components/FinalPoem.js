import React, { Component } from 'react';
import './FinalPoem.css';

class FinalPoem extends Component {
  constructor (props) {
    super(props);
  }

  displayPoem = () => {
    const poem = this.props.allInputs.map((input, i) => {
      return(
        <div key={i}>{input}</div>
      )
    });
    return poem;
  }

  onRevealButtonClick = () => {
    this.props.hiddenCallback(true);
  }
  
  render() {
    if(!this.props.hidden) {
      return(
        <div className="FinalPoem__reveal-btn-container">
          <input 
            type="button" 
            value="We are finished: Reveal the Poem" 
            className="FinalPoem__reveal-btn"
            onClick={this.onRevealButtonClick}
          />
        </div>
      )
    } else {
      return(
        <div className="FinalPoem">
          <section className="FinalPoem__poem">
            <h3>Final Poem</h3>
            {this.displayPoem()}
          </section>
        </div>
      );
    }
  }
}

export default FinalPoem;
