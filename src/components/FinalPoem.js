import React, { Component } from 'react';
import './FinalPoem.css';



class FinalPoem extends Component {

  reveal = () => {
    this.props.submitCallBack()
  }

  render() {
    console.log(this.props.isSubmitted)
    const revealButton = <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" onClick={this.reveal} />

    let finalPoem = this.props.poem.map(function(line, i){
      return <p key={i}>{line}</p>
    })

    const content = this.props.isSubmitted ? finalPoem : revealButton

  return (
    <div className="FinalPoem">
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>

      </section>

      <div className="FinalPoem__reveal-btn-container">
        {content}
      </div>
    </div>
  );
  }
}

export default FinalPoem;
