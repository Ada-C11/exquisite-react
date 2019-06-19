import React, { Component } from 'react';
import './FinalPoem.css';



class FinalPoem extends Component {

  reveal = () => {
    this.props.submitCallBack()
  }

  render() {
    const revealButton =<div className="FinalPoem__reveal-btn-container"><input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" onClick={this.reveal} /></div>

    let finalPoem = this.props.poem.map(function(line, i){
      return <p key={i}>{line}</p>
    })

    let finalContent = <section className="FinalPoem__poem"><h3>Final Poem</h3>{finalPoem}</section>

    const content = this.props.isSubmitted ? finalContent : revealButton

  return (
    <div className="FinalPoem">
      {content}
    </div>
  );
  }
}

export default FinalPoem;
