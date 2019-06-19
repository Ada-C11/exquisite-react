import React from 'react';
import './FinalPoem.css';

const FinalPoem = (props) => {
  
  const handleClick = () => {
    props.handleClickCallback();
  }

  return (
    <div className="FinalPoem">
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
        <article>{props.lines}</article>
      </section>

      <div className="FinalPoem__reveal-btn-container">
        <input onClick={handleClick} type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" />
      </div>
    </div>
  );
}

export default FinalPoem;
