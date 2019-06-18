import React from 'react';
import './FinalPoem.css';

const FinalPoem = (props) => {
  
    const fullPoem = props.sentences.map((sentence)=>{
      return (<p key={props.sentences.indexOf(sentence)}>{sentence}</p>);
    });

    return (
      <div className="FinalPoem">
        <section className="FinalPoem__poem">
          <h3>Final Poem</h3>
            {props.gameCompleted ? fullPoem : ""}
        </section>
        <div className="FinalPoem__reveal-btn-container">
          <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn"
          onClick={props.handleRevealClick} />
        </div>
        
      </div>
    );
}
  
  

export default FinalPoem;
