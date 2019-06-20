import React from 'react';
import './FinalPoem.css';

const FinalPoem = (props) => {

  const tonyStanza = props.poem.map( (line, i) => {
    return <p key={i}>{line}</p>
  });

  const poemInfo =
    <section className="FinalPoem__poem">
      <h3>Final Poem</h3>
      { tonyStanza }
    </section>
  
  const submitPoemButton =
    <div className="FinalPoem__reveal-btn-container" onClick={props.finalPoemCallback}>
      <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn"/>
    </div>
    
  const displayPoemContent =
      <div>
        { props.isFinal ? poemInfo : '' }
        { props.isFinal ? '' : submitPoemButton }
      </div>

  return (
    <div className="FinalPoem">
      { displayPoemContent }
    </div>
  );
}

export default FinalPoem;
