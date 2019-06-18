import React from 'react';
import './FinalPoem.css';

const FinalPoem = (props) => {

  let displayFinal = ''
  if (props.poemRevealState) {
    const fullPoem = props.getFinalPoem.map((line, i) => {
      return (
        <p key={i}>
          {line}
        </p>
      );
    });
    
    displayFinal = <div>{fullPoem}</div>
  } 

  return (
    <div className="FinalPoem">
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
        {displayFinal}
      </section>

      <div className="FinalPoem__reveal-btn-container">
        <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" onClick={props.revealPoem}/>
      </div>
    </div>
  );
}

export default FinalPoem;
