import React from 'react';
import './FinalPoem.css';


class FinalPoem extends React.Component {

  showFinalPoem = () => {
    this.props.showFinalPoemCallback()
  }

  render() {
    const displayButton = 
      <div className="FinalPoem__reveal-btn-container">
        <input 
        type="button" 
        value="We are finished: Reveal the Poem" 
        className="FinalPoem__reveal-btn"
        onClick={this.showFinalPoem} />
      </div>


    const formatPoem = this.props.allLines.map((line, i) => {

      return (
        <div>
          <h3>Final Poem</h3>
            <p key={i}>
              The {line.adj1} {line.noun1} {line.adv} {line.verb} the {line.adj2} {line.noun2}.
            </p>
      </div>
      )
    })


  return (
    <div className="FinalPoem">
      <section className="FinalPoem__poem">
       
        <div> 
            {this.props.showPoemStatus ? formatPoem : displayButton} 
        </div>
       </section>
      </div>
);
}
}

export default FinalPoem;
