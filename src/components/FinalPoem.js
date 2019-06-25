import React from 'react';
import './FinalPoem.css';

const FinalPoem = (props) => {
  
    const fullPoem = props.sentences.map((sentence, index)=>{
      return (<p key={index}>{sentence}</p>);
    });

    const showPoemButton = (
    
      <input 
        type="button" 
        value="We are finished: Reveal the Poem" 
        className="FinalPoem__reveal-btn"
        onClick={props.handleRevealClick} />
    
    )


    return (
      <div className="FinalPoem">
        <section className="FinalPoem__poem">
          <h3>Final Poem</h3>
            {props.gameCompleted ? fullPoem : ""}
        </section>
        
        <div className="FinalPoem__reveal-btn-container">
            {!props.gameCompleted ? showPoemButton: ""}
        </div>
      </div>
    );
}
  
  

export default FinalPoem;
