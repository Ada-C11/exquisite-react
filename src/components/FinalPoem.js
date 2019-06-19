import React, { Component } from 'react';
import './FinalPoem.css';

class FinalPoem extends Component {

  constructor(props) {
    super(props);

    this.state = {
      poem: props.poem,
      revealSelf: false,
      hideSubmissionForm: props.poemRevealedCallback,
    }
  };

  render() {
    const poemToDisplay = this.state.poem.map((line, i) => {
      return (<li key={i} className="FinalPoem__line">{line}</li>)
    });

    const handleClick = () => {
      this.setState({revealSelf: true});
      this.state.hideSubmissionForm();
    }
  
    return (
      <div className="FinalPoem">
        
          {this.state.revealSelf ? (
            <section className="FinalPoem__poem">
              <h3>Final Poem</h3>
              <ul>{poemToDisplay}</ul>
            </section>
          ) : (<div className="FinalPoem__reveal-btn-container">
                <input type="button" onClick={handleClick} value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" />
              </div>)
          }

        
      </div>
    );
  }
}

export default FinalPoem;
