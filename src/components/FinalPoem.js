import React, { Component } from 'react';
import './FinalPoem.css';

class FinalPoem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reveal:false,
    }
  }
  

  handleRevealClick = (event) => {
      event.preventDefault();
      this.setState({
        reveal:true,
      });
  }
  render(){
    const fullPoem = this.props.sentences.map((sentence)=>{
      return (<p key={this.props.sentences.indexOf(sentence)}>{sentence}</p>);
    });
    return (
      <div className="FinalPoem">
        <section className="FinalPoem__poem">
          <h3>Final Poem</h3>
            {this.state.reveal? fullPoem : ""}
        </section>
        <div className="FinalPoem__reveal-btn-container">
          <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn"
          onClick={this.handleRevealClick} />
        </div>
        
      </div>
    );
  }
}
  
  

export default FinalPoem;
