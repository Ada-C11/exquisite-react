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

    this.props.gameOverCallback();
  }

  render() {
    return (
      <div className="FinalPoem">
        <section className={this.state.finished ? 'visible' : 'hidden'}>
          <h3>Final Poem</h3>
          {this.formatPoem()}
        </section>

        <div className={`FinalPoem__reveal-btn-container ${this.state.finished ? 'hidden' : 'visible'}`}>
          <input 
            type="button" 
            value="We are finished: Reveal the Poem" 
            className="FinalPoem__reveal-btn"
            onClick={this.revealPoem} />
        </div>
      </div>
    )
  };
}

export default FinalPoem;
