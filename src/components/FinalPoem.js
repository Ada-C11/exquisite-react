import React from 'react';
import './FinalPoem.css';

const FinalPoem = (props) => {
  
  const buttonStyle = props.displayButton ? "hidden" : "FinalPoem__reveal-btn-container"
  const poemStyle = props.displayButton ? "FinalPoem__poem" : "hidden"
  const poemLine = props.poem.map((line) => {
    return <div>{line}</div>
  });
  
  return (
    <div className="FinalPoem">
      <section className={poemStyle}>
        <h3>Final Poem</h3>
        {poemLine}
      </section>

      <div className={buttonStyle}>
        <input type="button" value="We are finished: Reveal the Poem" className= "FinalPoem__reveal-btn"  onClick={props.displayFinalPoemCallback}/>
      </div>
    </div>
  );
}

export default FinalPoem;
