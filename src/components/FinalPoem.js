import React from 'react';
import './FinalPoem.css';

const FinalPoem = (props) => {

  let displayFinalPoem = ''
  if (props.poemRevealState) {
    const fullPoem = props.finalPoem.map((line, i) => {
      return (
        <p key={i}>
          {line}
        </p>
      );
    });
    
    displayFinalPoem = <section className="FinalPoem__poem"><div><h3>Final Poem</h3>{fullPoem}</div></section>
  } 

  return (
    <div className="FinalPoem">
      
        {displayFinalPoem}
    
      <div className="FinalPoem__reveal-btn-container">
        <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" onClick={props.onRevealPoemCallback}/>
      </div>
    </div>
  );
}

export default FinalPoem;
