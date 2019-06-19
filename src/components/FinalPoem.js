import React, { Component } from 'react';
import './FinalPoem.css';



class FinalPoem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isSubmitted: false
    }
  }

  reveal = () => {
    this.setState({isSubmitted: true })
  }

  render() {
    console.log(this.state.isSubmitted)
    const revealButton = <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" onClick={this.reveal} />

    let finalPoem = this.props.poem.map(function(line){
      return <p>{line}</p>
    })

    const content = this.state.isSubmitted ? finalPoem : revealButton

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
