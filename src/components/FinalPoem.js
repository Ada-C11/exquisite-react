import React from 'react';
import './FinalPoem.css';
import PropTypes from 'prop-types';

const FinalPoem = (props) => {

  const fullPoem = props.finalPoem.map((line, i) => {
    return (
      <p key={i}>
        {line}
      </p>
    );
  });
    
  const displayFinalPoem = 
    <section className="FinalPoem__poem">
      <div>
        <h3>Final Poem</h3>
        {fullPoem}
      </div>
    </section>;

  const button = 
    <div className="FinalPoem__reveal-btn-container">
      <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" onClick={props.onRevealPoemCallback}/>
    </div>;

  return (
    <div className="FinalPoem">
      
      {props.poemRevealState ? displayFinalPoem : button}
    
    </div>
  );
};

FinalPoem.propTypes = {
  onRevealPoemCallback: PropTypes.func,
  poemRevealState: PropTypes.bool,
  finalPoem: PropTypes.array,
};

export default FinalPoem;
