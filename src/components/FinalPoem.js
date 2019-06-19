import React from 'react';
import './FinalPoem.css';

const FinalPoem = (props) => {
  
  const buttonStyle = props.displayButton ? "hidden" : "FinalPoem__reveal-btn-container"
  return (
    <div className="FinalPoem">
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
        {props.poem}
      </section>

      <div className={buttonStyle}>
        <input type="button" value="We are finished: Reveal the Poem" className= "FinalPoem__reveal-btn"  onClick={props.displayFinalPoemCallback}/>
      </div>
    </div>
  );
}

export default FinalPoem;
