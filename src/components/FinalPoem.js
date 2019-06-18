import React, {Component} from 'react';
import './FinalPoem.css';

class FinalPoem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      finished: false,
    }
  }

  formatPoem = () => {
    const wholePoem = this.props.poem.map((line, i) => {
      return (
        <p key={i}>
          {line}
        </p>
      )
    });
    console.log(wholePoem)

    return (
      <section className={`FinalPoem__poem ${this.state.finished ? 'visible' : 'hidden'}`}>
        {wholePoem}
      </section>
    )
  }

  revealPoem = () => {
    this.setState ({
      finished: true,
    })
  }

  render() {
    return (
      <div className="FinalPoem">
        <section className="FinalPoem__poem">
          <h3>Final Poem</h3>
          {this.formatPoem()}
        </section>

        <div className="FinalPoem__reveal-btn-container">
          <input 
            type="button" 
            value="We are finished: Reveal the Poem" 
            className={`FinalPoem__reveal-btn ${this.state.finished ? 'hidden' : 'visible'}`}
            onClick={this.revealPoem} />
        </div>
      </div>
    )
  };
}

export default FinalPoem;
