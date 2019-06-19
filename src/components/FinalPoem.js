import React from 'react';
import './FinalPoem.css';

class FinalPoem extends React.Component {

  showAllPoems = () => {
    this.props.showAllPoemsCallback()
  }

  render() {
    const displayButton = 
      <div className="FinalPoem__reveal-btn-container">
        <input 
        type="button" 
        value="We are finished: Reveal the Poem" 
        className="FinalPoem__reveal-btn"
        onClick={this.showAllPoems} />
      </div>


    const formatPoem = this.props.allSubmissionsString.map((line, i) => {
      return (
      <p key={i}>
        {line}
      </p>
      )
    })

  return (
    <div className="FinalPoem">
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
      </section>

      <div> 
        {this.props.showPoemStatus ? formatPoem : displayButton} 
      </div>
      
    </div>
  );
  }
}

export default FinalPoem;
