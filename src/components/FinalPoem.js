import React from 'react';
import './FinalPoem.css';

const FinalPoem = (props) => {

   const poemFull = props.poem.map((line, index)=>{
    return (
    <p key={index}>
     {line}
    </p>
    )
});

  return (
    <div className="FinalPoem">
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
         {
           props.revealPoem && poemFull
         }

      </section>

      <div className="FinalPoem__reveal-btn-container">
        <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" onClick={props.revealPoemCallback} />
      </div>
    </div>
  );
}

export default FinalPoem;
