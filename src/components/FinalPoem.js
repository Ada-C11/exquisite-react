import React from 'react';
import './FinalPoem.css';

const FinalPoem = (props) => {
  const showPoemButton =  
    <div className="FinalPoem__reveal-btn-container">
      <input type="button" 
      value="We are finished: Reveal the Poem" 
      className="FinalPoem__reveal-btn" 
      onClick={props.showFinalPoem}
    />
    </div>
    const allVerses = props.poem.map((verse, i) => {
      return <p key={i}>{verse}</p>
    });

    const finalPoem = 
    <section className="FinalPoem__poem">
      <h3>Final Poem</h3>
      {allVerses}
      </section>
    
    const displayFinalPoem = props.showPoem ? finalPoem : showPoemButton;
  
    return (
    <div className="FinalPoem">      
      { displayFinalPoem } 
    </div>
  );
}

export default FinalPoem;
